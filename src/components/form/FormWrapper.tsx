/* eslint-disable @typescript-eslint/no-explicit-any */
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
        <form onSubmit={methods.handleSubmit(onSubmit)}>
      {children}
    </form>
    </FormProvider>

    
  )
}

export default FormWrapper
