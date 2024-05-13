import React, { FC } from 'react'
import Image from 'next/image'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { signOut } from 'next-auth/react';


interface user {
    mail: string,
    name: string,
    image: string
}



const Nav: FC<user> = ({ mail, name, image }): JSX.Element => {
    return (
        <nav className='w-full  py-2 px-10 flex justify-between items-center'>
            <h1 className='text-2xl font-semibold'>
                KadiJoke
                {/* {mail}
                {name} */}
            </h1>
            <div className='rounded-full'>
                <DropdownMenu>
                    <DropdownMenuTrigger><Image src={image} width={50} height={50} alt='photo-logo' className='rounded-full'/></DropdownMenuTrigger>
                    <DropdownMenuContent className='me-10'>
                        <DropdownMenuLabel>{name}</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className='p-0'><button className='bg-[#9DB2BF] w-full py-2 px-3 rounded-md font-semibold' onClick={() => signOut()}>Sign out</button></DropdownMenuItem>
                        {/* <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem> */}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    )
};

export default Nav