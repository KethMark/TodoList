'use client'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { signIn } from "next-auth/react"
import { Loader2 } from 'lucide-react'
import { FcGoogle } from "react-icons/fc";

export const Provider = () => {

  const [ isLoading, setLoading] = useState(false)

  return (
    <div className='grid gap-4'>
      <Button className='gap-2' onClick={() => {
        setLoading(true),
        signIn("google", {
          callbackUrl: '/'
        })
      }}>
        {isLoading ? (
          <Loader2 className='mr-2 h-4 w-4 animate-spin'/>
        ): (
          <FcGoogle className='mr-2 h-4 w-4'/>
        )} 
        Google
      </Button>
    </div>
  )
}
