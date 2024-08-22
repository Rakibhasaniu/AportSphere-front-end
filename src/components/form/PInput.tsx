import { Input } from 'antd'
import { Controller } from 'react-hook-form'

const PInput = ({type,name,label}) => {
    // const {register} = useFormContext()

  return (
    <div style={{marginBottom:'20px '}}>
    {label ? label : null}
         <Controller
         name={name}
         render={({field})=>
          <Input {...field} type={type} id={name} />
         }
         />

    </div>
  )
}

export default PInput
