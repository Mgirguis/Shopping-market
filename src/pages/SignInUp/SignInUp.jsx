import React from 'react'
import './SignInUp.scss'
import SignIn from '../../component/signin/SignIn'
import SignUp from '../../component/signup/SignUp'

const SignInUp = () => {
    return (
        <div className='signInUp'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInUp
