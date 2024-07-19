import React from 'react'
import { Input } from './Input'
import telephone from './iconos/llamada-telefonica.png'
import email from './iconos/email.png'
import wall from './public/wallp.jpg'

export const SignIn = () => {
  return (
    <div className='font-PrincipalFont'>
      <div>
        <img src={wall} alt="fondo de pantalla" className='min-h-screen bg-cover bg-center' />
      </div>
        <div className='flex flex-col text-center absolute bg-[#2f2f31] left-[35%] top-[4%] rounded-xl h-[300px] w-[500px] place-content-center '>
            <h1 className='text-[35px] underline text-[#f5f5f6]'>Sign in to your account</h1>
            <p className='text-[#cfcfd2]'>Enter your email and password to access your account.</p>
            <Input placeholder='Email' type='text'/>
            <Input placeholder='Password' type='password'/>
            <button className='bg-[#f5f5f6] w-[150px] text-[#2f2f31] flex place-content-center left-0 right-0 mx-auto rounded-xl my-[5px] px-3 py-1 hover:active:bg-[#5b5b5f] hover:bg-[#444546] hover:text-white'>Sign In </button>
        </div>
        <div className='flex flex-col absolute bg-[#2f2f31] top-[55%] left-[35%] rounded-xl h-[300px] w-[500px] px-7 py-7'>
            <h1 className='text-[35px] text-[#f5f5f6] underline'>Need help?</h1>
            <p className='text-left m-[5px] text-[#cfcfd2]'>Our support team is here to assist you with any questions or issues you may have.</p>
            <div className='flex flex-col'>
            <span className='py-[15px] flex text-[#cfcfd2]'> <img src={telephone} alt="icon telephone" className='w-[25px] mx-2'/>+51 987654321</span>
            <span className='py-[15px] flex text-[#cfcfd2]'> <img src={email} alt="icon email" className='w-[25px] mx-2'/>tupropiocorreo@gmail.com</span>
            </div>
            <button className='bg-[#f5f5f6] text-[#2f2f31] rounded-lg py-1 hover:active:bg-[#5b5b5f] hover:bg-[#444546] hover:text-white my-2'>Send Me</button>

        </div>
    </div>
  )
}
