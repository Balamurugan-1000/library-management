"use client"
import AuthForm from "@/components/AuthForm"
import { signinSchema } from "@/lib/validation"

// @ts-ignore
const page = () => (
  <AuthForm
    type="SIGN_IN"
    schema={signinSchema}
    defaultValues={{
      email: "",
      password: "",
    }}
    onSubmit={() => { }}
  />
          
)

export default page
