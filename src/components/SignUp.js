import axios from "axios";
import React, { react } from "react";
import { Redirect } from "react-router-dom";
import Header from "./common/Header";


class SignUp extends React.Component {
      
    constructor(){
        super();
        this.state={
            confirmError:"",
            passwordError:""
           
           
        }
    }


    handleSubmit = e => {
        if(this.valid())
        {
        e.preventDefault();    //avoid refreshing
        const data = {
            Name: this.Name,
            Email: this.Email,
            Password: this.Password
        };

        axios.post('Users', data).then(
            res => {
                //console.log(res)
                alert("You are successfully signed up");
                this.setState({
                    loggedIn: true
                });
                //return <Redirect to="/" />
                //localStorage.setItem("user-info",data)

            }
        ).catch(
            err => {
                console.log(err);
            }
        )
        }
    };

valid(){
   
    if(this.Password.length<5)
    {
        this.setState({passwordError:"Password length should be more than 5"})
    }
    else if(this.Password !=this.confirmPassword)
    {
        this.setState({confirmError:"Password and Confirm Password are not same"})
    }
    else
    {
    return true;
    }
}



    render() {
        if (this.state.loggedIn) {
            return <Redirect to="/login" />
        }
        return (
            <>
                <Header />
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <form onSubmit={this.handleSubmit}>
                            <h3>Sign Up</h3>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control" placeholder="Name" onChange={e => this.Name = e.target.value} required/>
                                
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" placeholder="Email" onChange={e => this.Email = e.target.value} required/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Password" onChange={e => this.Password = e.target.value} required/>
                                <p style={{color:"red",fontSize:"14px"}}>{this.state.passwordError}</p>
                            </div>
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input type="password" className="form-control" placeholder="Confirm Password" onChange={e => this.confirmPassword = e.target.value} />
                                <p style={{color:"red",fontSize:"14px"}}>{this.state.confirmError}</p>
                            </div>
                            <button className="btn btn-secondary btn-block">Submit</button>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

export default SignUp;