import React, { Component } from "react";
import axios from 'axios';
import { NavLink } from "react-router-dom";

class  Register extends Component {
    constructor(props) {
        super(props);

        this.state = {Users : []};
    
    }
     handleInputs =(e) =>
    {   let{name, value} = e.target;
        let {Users} = this.state;
        this.setState({Users:{...Users, [name]:value}});
    }

     handleSubmit = (e) =>
    {
        e.preventDefault();
        axios.post("http://localhost:3001/auth/signup", this.state)
            .then(res => { console.log(res); })
            .catch(error => {
                console.log(error);
            })
    }

    render()
    {
        return (
            <>
    
                <div className="container mt-5 pt-3">
                    <div className="row">
                        <div className="col-12 col-sm-8 col-md-5 m-auto">
                            <h4 className="text-center"><b>Sign Up</b></h4>
                            <div className="card card-body shadow p-3 mb-5 bg-body rounded">
    
                                <div className="icons">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-plus" viewBox="0 0 16 16">
                                        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                        <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                                    </svg>
                                </div>
    
    
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input type='text' name="username" placeholder="Enter Username" value={this.state.username}  className="form-control" />
                                    </div>
    
                                    <div className="form-group">
                                        <label>Email Id</label>
                                        <input type='email' name="email" placeholder="Enter Email Id" value={this.state.email} className="form-control" />
                                    </div>
    
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type='password' name="password" placeholder="Enter Password" value={this.state.password}  className="form-control" />
                                    </div><br />
    
                                    <div className="form-group text-center">
                                        <button type="submit" className=" btn btn-primary"> <span>Register me</span> </button>
                                    </div>
                                    <div>
                                        <NavLink to ='/LoginForm'>Already registered.</NavLink>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    
}  
      

export default Register
