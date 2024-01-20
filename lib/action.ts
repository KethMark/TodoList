"use server";

import { revalidateTag } from "next/cache";
import prisma from "./prisma";
import { formSchema } from "./formschema";
import { z } from "zod";

type Message = z.infer<typeof formSchema>

export const Create = async (data: Message) => {
  const validate = formSchema.safeParse({
    name: data.name,
    message: data.message
  })

  if (!validate.success) {
    return {
      errors: validate.error.flatten().fieldErrors,
    }
  }

  try {
    await prisma.todo.create({
      data: {
        name: validate.data.name,
        message: validate.data.message
      },
    });

    revalidateTag("todo");

    return { message: "Success"};
  } catch (error) {
    return {
      error: "Their's something wrong",
    }
  }
}

export const Get = async () => {
   try {
    const data = await prisma.todo.findMany()
    revalidateTag("todo")
    return data
   } catch (error) {
     throw new Error("Their's something wrong")
   }
}

export const Update = async (data: Message) => {

  const validate = formSchema.safeParse({
    id: data.id,
    name: data.name,
    message: data.message
  })

  if (!validate.success) {
    return {
      errors: validate.error.flatten().fieldErrors,
    }
  }

  try {
    await prisma.todo.update({
      where: {
        id: data.id
      }, data: {
        name: data.name,
        message: data.message
      }
    })

    revalidateTag("todo")

    return { message: "Success" };
  } catch (error) {
    return {
      error: "Their's something wrong",
    }
  }
}

export const Delete = async (formdata: FormData) => {
  try {
    await prisma.todo.delete({
      where: {
        id: formdata.get("id") as string,
      }
    })

    revalidateTag("todo")

    return { message: "Success" };
  } catch (error) {
    return {
      error: "Their's something wrong",
    }
  }
}
