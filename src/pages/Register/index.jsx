import AuthLayout from "../../components/auth/AuthLayout";

import RegisterForm from "../../components/auth/RegisterForm";

function Register(){

return(

<AuthLayout

title="Create Account"

subtitle="Start planning smarter"

>

<RegisterForm/>

</AuthLayout>

)

}

export default Register;