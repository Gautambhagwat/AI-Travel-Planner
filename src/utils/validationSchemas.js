import { z } from "zod";

export const loginSchema = z.object({

    email: z
        .string()
        .email("Enter a valid email"),

    password: z
        .string()
        .min(6, "Password must be at least 6 characters")

});

export const registerSchema = z.object({

    name: z
        .string()
        .min(3),

    email: z
        .string()
        .email(),

    password: z
        .string()
        .min(6),

    confirmPassword: z
        .string()

}).refine((data)=>data.password===data.confirmPassword,{

    message:"Passwords do not match",

    path:["confirmPassword"]

});