/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";

const Login = () => {
    const {register, handleSubmit} = useForm({
        defaultValues:{
            email:'rakib@gmail.com',
            password:'123456'
        }
    });

    const [login,{data,error}] = useLoginMutation();
    console.log(data)
    console.log(error)
    const onSubmit = (data:any) => {
        const userInfo = {
            email:data.email,
            password:data.password
        }
        // console.log(userInfo)
        login(userInfo)
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