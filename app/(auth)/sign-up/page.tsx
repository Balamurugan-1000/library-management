"use client"
import AuthForm from "@/components/AuthForm"
import { signupSchema } from "@/lib/validation"

const page = () => (
    <AuthForm
        type="SIGN_UP"
        schema={signupSchema}
        defaultValues={{
            fullName: "",
            email: "",
            password: "",
            universityId: "",
            universityCard: "",
        }}
        onSubmit={() => { }}
    />
)

export default page
