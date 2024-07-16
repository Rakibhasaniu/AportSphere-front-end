/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, Tuser } from "../redux/features/auth/authSlice";
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
    const onSubmit = async(data:FieldValues) => {
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