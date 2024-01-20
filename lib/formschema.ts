import { z } from "zod";

export const formSchema = z.object({
    id: z.string(),
    name: z.string().min(4, {
        message: "Name must be atleast 4 characters",
    }),
    message: z.string().min(10, {
        message: 'Message must be at least 10 characters'
    })
})