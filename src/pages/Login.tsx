/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import {  useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {register, handleSubmit} = useForm({
        defaultValues:{
            email:'rakib@gmail.com',
            password:'123456'
        }
    });

    const [login,{error}] = useLoginMutation();
    // console.log(data)
    // console.log(error)
    const onSubmit = async(data:any) => {
        toast.loading('Loging In..')
        try{
            const userInfo = {
                email:data.email,
                password:data.password
            }
            // console.log(userInfo)
            const res = await login(userInfo).unwrap();
            // console.log(res)
            const user = verifyToken(res.data.accessToken)
            console.log(user)
            dispatch(setUser({user:user,token:res.data.accessToken}))
            navigate(`/${user.role}/dashboard`)
        } catch(err){
            console.log(err)
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" {...register('email')} />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="text"  id="password" {...register('password')} />
            </div>
            <Button htmlType="submit" >submit</Button>
        </form>
    );
};

export default Login;