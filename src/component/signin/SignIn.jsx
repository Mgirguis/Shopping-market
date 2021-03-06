import React, { Component } from "react";
import "./signin.scss";
import FormInput from "../formInput/FormInput";
import CustomButton from "../custom-button/CustomButton";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
// import { auth } from "firebase";

export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>Already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
            label="Email"
            required
          />

          <FormInput
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
            label="Password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
