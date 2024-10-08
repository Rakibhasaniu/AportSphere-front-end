import { Form, Input } from 'antd'
import { Controller } from 'react-hook-form'


type TInput = {
  type:string;
  name: string;
  label?: string;
}

const PInput = ({type,name,label}:TInput) => {
    // const {register} = useFormContext()

  return (
    <div style={{marginBottom:'20px '}}>
    {label ? label : null}
         <Controller
         name={name}
         render={({field,fieldState:{error}})=>
          <Form.Item>
               <Input {...field} type={type} id={name} 
         
          />
          {error && <small style={{color:'red'}}>{error.message}</small>}
          </Form.Item>
         
          
          
         }
         
         />
         
         
    </div>
  )
}

export default PInput
