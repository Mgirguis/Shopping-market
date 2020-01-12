import React, { Component } from 'react'
import './signUp.scss'
import FormInput from '../formInput/FormInput';
import CustomButton from '../custom-button/CustomButton';
import {auth, createUserProfileData} from '../../firebase/firebase.utils'

export class SignUp extends Component {
    constructor(){
        super();
        this.state ={
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    handleSubmit = async e => {
        e.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert("passwords don't match");
            return;
        } 
        try{
            const {user} = await auth.createUserWithEmailAndPassword(
                email,
                password
            );
            await createUserProfileData(user, { displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

        }  catch(error){
            console.error(error)
        }
    }
    handleChange = e =>{
        const {name, value} = e.target;
        this.setState({[name]: value});
    }
    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className="sign-up">
                <h1 className="title">Create new user</h1>
                <span>sign up with email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput 
                    type='text'
                    name='displayName'
                    value={displayName}
                    label= 'Display name'
                    onChange = {this.handleChange}
                    required /> 
                    <FormInput 
                    type='email'
                    name='email'
                    value={email}
                    label= 'Email'
                    onChange = {this.handleChange}
                    required /> 
                    <FormInput 
                    type='password'
                    name='password'
                    value={password}
                    label= 'Password'
                    onChange = {this.handleChange}
                    required /> 
                    <FormInput 
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    label= 'Confirm password'
                    onChange = {this.handleChange}
                    required />
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
                
            </div>
        )
    }
}

export default SignUp;
