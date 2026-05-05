import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/ui/ThemeToggler'
import Link from 'next/link'
import React from 'react'

export default function Article() {
    return (
        <div className=' flex items-center justify-center h-screen flex-col gap-4'>
            <ModeToggle />
            <h1 className="bg-linear-to-r from-primary to-accent  font-extrabold px-5 py-2 ">Articles Page</h1>
            <Link href={"/"}>
                <Button>
                    Home Page
                </Button>
            </Link>
            <Link href={"/dashboard"}>
                <Button>
                    dashboard Page
                </Button>
            </Link>
        </div>
    )
}
