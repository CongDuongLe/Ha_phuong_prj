import React, {useState} from 'react'
import Header from '../../components/header/Header'
import { auth } from '../../firebase/firebase.config'

import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword
} from "firebase/auth";


const SignUp = () => {


  const [signUpInfo, setSignUpInfo] = useState({
    email: '',
    password: '',

   })


   const handleSignUpAccount = async (e) => {

    // prevent reload page

    e.preventDefault()

    if (
      signUpInfo.email === "" ||
      signUpInfo.password === "" ||
      signUpInfo.password?.length < 6 ||
      !signUpInfo.email?.includes("@")
    ) {
      return alert("Please check your email and password again");
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        signUpInfo.email,
        signUpInfo.password
      );
      const user = userCredential.user
      console.log(user, 'user')
      
    } catch (error) {
      console.log(error, 'error')
    }
   }


   const handleSignUpWithGoogle = async (e) => { 
      e.preventDefault()
      try {
        const provider = new GoogleAuthProvider()
        const userCredential = await signInWithPopup(auth, provider)
        const user = userCredential.user
        console.log(user, 'user')
      }
      catch (error) {
        console.log(error, 'error')
      }


   }



    const showAlert = () => {
      alert('Day la header cua trang sign up')
     }


  return (
    <div className="flex flex-1 flex-col gap-y-5">
      <Header
        headerText={"Day la header cua trang sign up"}
        subTitle={"Sub title cua trang sign up"}
        bgColor={"bg-blue-500"}
        onClickHeader={showAlert}
      />
      <div className="flex flex-1 justify-center items-center">
        <form
          autoComplete="off"
          className="w-full max-w-[600px] p-10 bg-white rounded-lg shadow"
          aria-label="signup-form"
        >
          <h2 className="mb-10 text-3xl font-bold text-center">Sign Up Form</h2>
          <div className="flex flex-col items-start mb-5 gap-y-3">
            <label
              htmlFor="email"
              className="text-sm font-medium cursor-pointer"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={signUpInfo.email}
              className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
              placeholder="Enter your email address..."
              onChange={(e) =>
                setSignUpInfo({
                  ...signUpInfo,
                  email: e.target.value,
                })
              }
            />
          </div>
          <div className="flex flex-col items-start mb-5 gap-y-3">
            <label
              htmlFor="password"
              className="text-sm font-medium cursor-pointer"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
              placeholder="Enter your password"
              value={signUpInfo.password}
              onChange={(e) =>
                setSignUpInfo({
                  ...signUpInfo,
                  password: e.target.value,
                })
              }
            />
          </div>
          <div className="flex items-center justify-end mb-5 text-slate-400">
            <p>Already have an account?</p>
            <a href="#" className="text-blue-500 underline">
              Sign In
            </a>
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]"
            onClick={(e) => handleSignUpAccount(e)}
          >
            Create an account
          </button>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-red-500 mt-4 rounded-lg h-[60px]"
            onClick={(e) => handleSignUpWithGoogle(e)}
          >
            Sign In with Google
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp