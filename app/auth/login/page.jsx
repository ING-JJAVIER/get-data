<<<<<<< HEAD
=======
import LoginForm from '@/components/LoginForm'
>>>>>>> e00f6fb26ef2fdacde949e2e60427b60674521eb
import axios from 'axios'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'

export default function page() {
<<<<<<< HEAD
=======

>>>>>>> e00f6fb26ef2fdacde949e2e60427b60674521eb
  const handlesubmit = async (formdata) => {
    'use server'
    const username = formdata.get('username')
    const password = formdata.get('password')

    let success = false
<<<<<<< HEAD
    try {
      const { data } = await axios.post('https://auth-api-cgtt.onrender.com/api/v1/auth/login', {
        username,
        password
      })

      cookies().set('token', data.token);
      success = true;
=======

    try {
      const {data} = await axios.post('https://auth-api-cgtt.onrender.com/api/v1/auth/login', {
        username,
        password
      })
      
      cookies().set('token', data.token);
      success = true;
      
>>>>>>> e00f6fb26ef2fdacde949e2e60427b60674521eb
    } catch (error) {
      console.log(error?.response?.data || error.message)
    }

<<<<<<< HEAD
    if (success) {
      redirect('/')
    }

    return (
      <div className='w-full h-screen grid place-content-center bg-slate-100'>
        <LoginForm handlesubmit={handlesubmit}/>
      </div>
    )
  }
=======
    if(success){
      redirect('/')
    }


  }


  return (
    <div className='w-full h-screen grid place-content-center bg-slate-100'>
      <LoginForm handlesubmit={handlesubmit} />
    </div>
  )
>>>>>>> e00f6fb26ef2fdacde949e2e60427b60674521eb
}
