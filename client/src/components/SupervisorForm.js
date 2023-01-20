import React, { Component } from 'react';
import axios from 'axios';

class SupervisorForm extends Component{

    constructor(props) {
        super(props) 
        this.state = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        contactMethod: "",
        supervisor: ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const {firstName, lastName, email, phone, contactMethod, supervisor} = this.state
        axios.post('http://localhost:3000/hello', {
            firstName, lastName, email, phone, contactMethod, supervisor        
        })
        .then(res=>{console.log(res)})
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      }

    render() {
        return (
            <div className="App">
                <form onSubmit = { this.handleSubmit }>
                    <label> Person Name:                         
                        <br />
                        <input type="text" placeholder='First Name' name="firstName" onChange= {this.handleChange}/>
                        <br />
                        <input type="text" placeholder='Last Name' name="lastName" onChange= {this.handleChange}/>
                        <br />
                        <input type="text" placeholder='Email' name="email" onChange= {this.handleChange}/>
                        <br />
                        <input type="text" placeholder='Phone' name="phone" onChange= {this.handleChange}/>
                        <br />
                        <input type="text" placeholder='Contact Method' name="contactMethod" onChange= {this.handleChange}/>
                        <br />
                        <input type="text" placeholder='Supervisor' name="supervisor" onChange= {this.handleChange}/>
                        <br />
                    </label>
                    <button type="submit"> Add </button>
                </form>
            </div>
        );
    }
}



export default SupervisorForm