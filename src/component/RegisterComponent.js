import React from 'react';
import RegisterForm from './RegisterForm';
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom';

class RegisterComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            firstname: "",
            lastname: "",
            email: "",
            message: ""
        }
        this.clickHandler = this.clickHandler.bind(this)
        this.setUsername = this.setUsername.bind(this)
        this.setPassword = this.setPassword.bind(this)
        this.setFirstName = this.setFirstName.bind(this);
        this.setLastName = this.setLastName.bind(this);
        this.setEmail = this.setEmail.bind(this);
    }

    setUsername(username) {
        this.setState({ username: username })
    }

    setPassword(password) {
        this.setState({ password: password })
    }

    setFirstName(firstname) {
        this.setState({ firstname: firstname })
    }

    setLastName(lastname) {
        this.setState({ lastname: lastname })
    }

    setEmail(email) {
        this.setState({ email: email })
    }

    clickHandler(event) {
        event.preventDefault();
        let username = this.state.username;
        let password = this.state.password;
        let firstname = this.state.firstname;
        let lastname = this.state.lastname;
        let email = this.state.email;
        if (username !== '' && password !== '' && firstname !== '' && lastname !== '' && email !== '') {
            let msg = "User " + firstname + " " + lastname + " is registered successfully"
            this.setState({ message: msg })
            this.props.history.push('/register');
        } else {
            this.setState({ message: "Please fill all the fields" })
        }
    }

    render() {
        return (
            <div id="register">
                <h3>Registration Form</h3>
                <p className={this.state.message ? 'alert alert-danger' : ''}>{this.state.message}</p>
                <form>
                    <RegisterForm id="username" labelName="User Name" inputType="text" userproperty={this.setUsername} />
                    <RegisterForm id="password" labelName="Password" inputType="password" userproperty={this.setPassword} />
                    <RegisterForm id="firstname" labelName="First Name" inputType="text" userproperty={this.setFirstName} />
                    <RegisterForm id="lastname" labelName="Last Name" inputType="text" userproperty={this.setLastName} />
                    <RegisterForm id="email" labelName="Email" inputType="text" userproperty={this.setEmail} />
                    <button class="btn btn-primary" onClick={this.clickHandler}>Register</button>
                </form>
            </div>
        )
    }
}
export default RegisterComponent;