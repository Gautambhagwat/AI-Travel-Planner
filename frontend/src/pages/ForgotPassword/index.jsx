import AuthLayout from "../../components/auth/AuthLayout";

import ForgotPasswordForm from "../../components/auth/ForgotPasswordForm";

function ForgotPassword(){

return(

<AuthLayout

title="Forgot Password"

subtitle="We'll email you a reset link"

>

<ForgotPasswordForm/>

</AuthLayout>

)

}

export default ForgotPassword;