import React, { react } from "react";
import axios from "axios";
import { Redirect } from "react-router";
import Header from "./common/Header";

class Login extends React.Component {

    state = {}
    handleSubmit = e => {
        e.preventDefault();
        const data = {
            Email: this.Email,
            Password: this.Password
        };

        axios.post('user/Login', data).then(
            res => {
                //console.log(JSON.stringify(res.data.UserDetails));
                if (res.data.status == '200') {
                    localStorage.setItem('UId', JSON.stringify(res.data.UserDetails.UId))
                    localStorage.setItem('Name', JSON.stringify(res.data.UserDetails.Name))
                    localStorage.setItem('Email', JSON.stringify(res.data.UserDetails.Email))
                    localStorage.setItem('Password', JSON.stringify(res.data.UserDetails.Password))
                    this.setState({
                        loggedIn: true
                    });
                }
                else
                    alert(res.data.message);
            }
        ).catch(
            err => {
                console.log(err);
            }
        )

    };









    render() {
        if (this.state.loggedIn) {
            return <Redirect to="/propertylist" />
        }

        return (
            <>
                <Header />
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <form onSubmit={this.handleSubmit}>
                            <h3>Login</h3>

                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" placeholder="Email" onChange={e => this.Email = e.target.value} required/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Password" onChange={e => this.Password = e.target.value} required/>
                            </div>

                            <button className="btn btn-secondary btn-block">Submit</button>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

export default Login;
