import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { registerSchema } from "../../utils/validationSchemas";

import Button from "../common/Button";

import PasswordInput from "./PasswordInput";

function RegisterForm(){

const{

register,

handleSubmit,

formState:{errors}

}=useForm({

resolver:zodResolver(registerSchema)

});

const submit=(data)=>{

console.log(data);

}

return(

<form
onSubmit={handleSubmit(submit)}
className="space-y-5"
>

<div>

<input

placeholder="Full Name"

{...register("name")}

className="w-full border rounded-lg p-3"

/>

<p className="text-red-500">

{errors.name?.message}

</p>

</div>

<div>

<input

placeholder="Email"

{...register("email")}

className="w-full border rounded-lg p-3"

/>

<p className="text-red-500">

{errors.email?.message}

</p>

</div>

<PasswordInput

placeholder="Password"

register={register}

name="password"

/>

<p className="text-red-500">

{errors.password?.message}

</p>

<PasswordInput

placeholder="Confirm Password"

register={register}

name="confirmPassword"

/>

<p className="text-red-500">

{errors.confirmPassword?.message}

</p>

<Button type="submit">

Create Account

</Button>

</form>

);

}

export default RegisterForm;