import { z } from "zod";

export const formSchema = z.object({
    id: z.string().optional(),
    name: z.string().min(4, {
        message: "Name must be atleast 4 characters",
    }),
    message: z.string().min(10, {
        message: 'Task must be at least 10 characters'
    })
})

