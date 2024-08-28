/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from "antd";
import { ReactNode } from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";

type TFormProps = {
  onSubmit:SubmitHandler<FieldValues>;
  children: ReactNode;
  // defaultValues:Record<string,any>
} & TDefaultValues;
type TDefaultValues = {
  defaultValues ?: Record<string,any> 
}

const FormWrapper = ({onSubmit, children, defaultValues}:TFormProps) => {

  const defaultFormValues:TDefaultValues = {};
  if(defaultValues){
    defaultFormValues['defaultValues']=defaultValues
  }

    const methods = useForm(
      defaultFormValues,
    )
  return (
    <FormProvider {...methods}>
        <Form layout="vertical" onFinish={methods.handleSubmit(onSubmit)}>
      {children}
    </Form>
    </FormProvider>

    
  )
}

export default FormWrapper
