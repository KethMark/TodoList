import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from '../ui/button'
import { auth } from '@/lib/auth'
import { User } from '../auth/user'
import { ModeToggle } from './theme'
import { DrawerPop } from '../admin/drawer'

export const Navbar = async () => {

  const session = await auth()

  return (
    <div className='m-auto container flex items-center justify-between py-3'>
        <Link href='/' className='text-3xl font-medium text-blue-500'>
            Task
        </Link>
        <div className='flex items-center gap-4'>
          <DrawerPop get={session}/>
          <ModeToggle/>
          {session? (
            <User data={session}/>
          ) : (
            <Link href='/signin' className={cn(buttonVariants())}>Login</Link>
          )}
        </div>
    </div>
  )
}
