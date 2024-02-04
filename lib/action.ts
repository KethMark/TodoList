"use server";

import { revalidateTag } from "next/cache";
import prisma from "./prisma";
import { formSchema } from "./formschema";
import { z } from "zod";
import { auth } from "./auth";

type Message = z.infer<typeof formSchema>

export const Create = async (data: Message) => {

  const session = await auth()

  if(!session) {
    throw new Error("User  not authenticated")
  }

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
        userId: session?.user.id,
        name: validate.data.name,
        message: validate.data.message,
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

  const session = await auth()

  if(!session) {
    throw new  Error('User  not authenticated')
  }

  return prisma.todo.findMany({
    where: {
      userId: session?.user.id
    }
  })
}

export const Update = async (data: Message) => {

  const session = await auth()

  if(!session) {
    throw new  Error('User  not authenticated')
  }

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
        message: data.message,
        userId: session.user.id
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

export const Delete = async (data: FormData) => {

  const id = data.get("id") as string

  try {
    await prisma.todo.delete({
      where: {
        id
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

export const isUpdate = async (id: string) => {

  try {
    await prisma.todo.update({
      where: {
        id
      }, data: {
        isCompleted: true
      }
    })

    revalidateTag("todo")

  return { message: "Todo mark as done"}
  } catch (error) {
    return {
      error:  "Their's something wrong"
    }
  }
}

export const GetAll = async () => {

  return prisma.todo.findMany({
    include: {
      user: true
    }
  })
}
