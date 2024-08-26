/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Row } from "antd";
import { FieldValues  } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, Tuser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import {  useNavigate } from "react-router-dom";
import { toast } from "sonner";
import FormWrapper from "../components/form/FormWrapper";
import PInput from "../components/form/PInput";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    // const {register, handleSubmit} = useForm({
    //     defaultValues:{
    //         email:'rakib@gmail.com',
    //         password:'123456'
    //     }
    // });

    const defaultValues = {
        email: 'rakib@gmail.com',
        password: '123456'
    }

    const [login,{error}] = useLoginMutation();
    // console.log(data)
    // console.log(error)
    const onSubmit = async(data:FieldValues) => {
        // console.log(data)
        const toastId = toast.loading('Loging In..')
        try{
            const userInfo = {
                email:data.email,
                password:data.password
            }
            // console.log(userInfo)
            const res = await login(userInfo).unwrap();
            // console.log(res)
            const user = verifyToken(res.data.accessToken) as Tuser;
            // console.log(user)
            dispatch(setUser({user:user,token:res.data.accessToken}))
            toast.success('Loged In.',{id:toastId, duration:2000})
            navigate(`/${user.role}/dashboard`)
        } catch(err){
            console.log(err)
            toast.error("Can't login",{id:toastId,duration:2000})
        }
    }
    return (
        <Row justify="center" align="middle" style={{height:'100vh'}}>
        <FormWrapper onSubmit={onSubmit} defaultValues = {defaultValues} >
                {/* <label htmlFor="email">Email:</label> */}
                {/* <input type="text" id="email" {...register('email')} /> */}
                <PInput type="email"  name="email" label="Email:" />

           
                {/* <label htmlFor="password">Password:</label> */}
                {/* <input type="text"  id="password" {...register('password')} /> */}
                <PInput type="text" name="password"  label="Password:" />
            <Button htmlType="submit" >submit</Button>
        </FormWrapper>
        </Row>
        
    );
};

export default Login;