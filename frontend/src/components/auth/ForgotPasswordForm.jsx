import { useForm } from "react-hook-form";

import Button from "../common/Button";

function ForgotPasswordForm(){

const{

register,

handleSubmit

}=useForm();

const submit=(data)=>{

console.log(data);

}

return(

<form
onSubmit={handleSubmit(submit)}
className="space-y-5"
>

<input

placeholder="Email"

{...register("email")}

className="w-full border rounded-lg p-3"

/>

<Button type="submit">

Send Reset Link

</Button>

</form>

)

}

export default ForgotPasswordForm;