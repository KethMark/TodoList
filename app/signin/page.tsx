import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ChevronLeftIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

import { Metadata } from 'next'
import { Provider } from '@/components/auth/provider'

export const metadata: Metadata = {
  title: "Task | Login",
  description: "Welcome",
};

const page = () => {
  return (
      <div className="container flex h-screen w-screen flex-col items-center justify-center">
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute left-4 top-4 md:left-8 md:top-8 items-center"
          )}
        >
          <>
            <ChevronLeftIcon />
            Back
          </>
        </Link>
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <Image src='/notebook.png' alt='Notebook' width='80' height='80' className='mx-auto'/>
            <h1 className="text-2xl font-semibold tracking-tight">
              Welcome back
            </h1>
            <p className="text-sm text-muted-foreground">
               click the provider below to create your account
            </p>
          </div>
          <Provider/>
          <p className="px-8 text-center text-sm text-muted-foreground">
            <Link
              href="/register"
              className="hover:text-brand underline underline-offset-4"
            >
              Don't have an account? Sign Up
            </Link>
          </p>
        </div>
      </div>
  )
}

export default page