import { Form, Select } from 'antd'
import { Controller } from 'react-hook-form';

type TSelectProps = {
  label: string;
  name:string;
  options: {
    value:string;
    label: string;
    disabled?:boolean;
  
  }[]
}

const PSelect = ({label,name,options}:TSelectProps) => {
    // const handleChange = (value: string) => {
    //     console.log(`selected ${value}`);
    //   };
  return (
   <Controller 
   name={name}
   render={({field, fieldState:{error}})=> (
   
    <Form.Item label={label}>
   
    <Select
      defaultValue="New"
      style={{ width: '100%' }}
      // onChange={onChange}
      {...field}
      options={options}
      // options={[
      //   { value: 'new', label: 'New' },
      //   { value: 'used', label: 'Used' }
       
      // ]}
    />
   {/* console.log({error?.message}) */}
    
   {error && <small  style={{color:'red'}}>{error.message}</small>}

     </Form.Item>
   )}
   />
 
  )
}

export default PSelect
