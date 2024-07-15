import { Button } from "antd";
import { useForm } from "react-hook-form";

const Login = () => {
    const {register, handleSubmit} = useForm();
    const onSubmit = () => {
        console.log('Form submitted');
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="id">ID:</label>
                <input type="text" id="id" {...register('id')} />
            </div>
            <div>
                <label htmlFor="password">PASSWORD:</label>
                <input type="text"  id="password" {...register('password')} />
            </div>
            <Button onSubmit={sub} >submit</Button>
        </form>
    );
};

export default Login;