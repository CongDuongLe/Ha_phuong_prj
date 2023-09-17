import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { Icons } from '../../assets/svg'

const SignIn = () => {
  return (
    <div className='w-full h-full'>
        {/* Phan header */}
        <Header 
            headerText={'This is sign in page'} 
            subTitle={'Sign in subtitle'}
            bgColor={'bg-red-500'}
            />
        {/* Phan content */}
        <div>
            <p>Day la content</p>
            <Icons.ChatIcon />
        </div>
        {/* Phan footer */}
        <Footer />
    </div>
  )
}

export default SignIn