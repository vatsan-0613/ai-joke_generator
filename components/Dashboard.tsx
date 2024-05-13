"use client"
import { signIn, useSession } from 'next-auth/react';
import React from 'react'
import LoginForm from './LoginForm';
import Home from './Home';

const Dashboard = () => {
  const {data : session} = useSession();
  return (
    <>    { session ? (
        <>
            {console.log(session)}
            <Home mail = {session.user?.email as string} name = {session.user?.name as string} image = {session.user?.image as string} />
        </>
    ):(
        <>
            <LoginForm />
        </>
    )}
    </>

  )
}

export default Dashboard