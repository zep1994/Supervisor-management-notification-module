import React, { useState, useEffect } from 'react';
import axios from 'axios';

const URL = 'http://localhost:5000/api'

const SupervisorForm = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState('')
    const [preferredMethod, setPrefferedMethod] = useState('')
    const [supervisor, setSupervisor] = useState('Anastacio')
    const [submitted, setSubmitted] = useState(false)
    const [selectableOptions, setSelectableOptions] = useState([])

    useEffect(() => {
        fetch(`${URL}/supervisors`)
        .then((data)=>data.json()).then((val)=>setSelectableOptions(val))
    }, [])
    


    const handleSubmit = (event) => {
        event.preventDefault()
        if (/\d/.test(firstName) || /\d/.test(lastName) === true) {
            event.preventDefault()
            alert("Please remove numbers From your name")
            return false
        } 
        axios.post('http://localhost:5000/api/submit', {
            firstName, lastName, email, phone, preferredMethod, supervisor        
        })
        .then(res=>{console.log(res)})
        setSubmitted(true)
       

    }

    if (submitted) {
		return (
			<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				<h3>Thank you! We'll be in touch shortly.</h3>
			</div>
		)
	}
    
    console.log(selectableOptions['firstName'])
    return (
        <div className="App">
            <form onSubmit = { handleSubmit }>
                <label> Supervisor Notification:                         
                    <br />
                    <input type="text"  placeholder='First Name' name="firstName" onChange={(e) => setFirstName(e.target.value)} required/>
                    <br />
                    <input type="text" placeholder='Last Name' name="lastName" onChange={(e) => setLastName(e.target.value)} required/>
                    <br />
                    <label>Preferred Method Email:</label>
                    <input type="radio" value='Email' name="preferredMethod" onChange={(e) => setPrefferedMethod(e.target.value)} />
                    <br />
                    <input type="email" placeholder='Email' name="email" onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    <label>Preferred Method Phone:</label>
                    <input type="radio" value='Phone' name="preferredMethod" onChange={(e) => setPrefferedMethod(e.target.value)} />
                    <br />
                    <input type="phone" placeholder='Phone' name="phone" onChange={(e) => setPhone(e.target.value)} />
                    <br />
                    <select value={supervisor} onChange={(e) => setSupervisor(e.target.value)} required>
                        {
                            selectableOptions.map((opt, i) =><option key={i}>{opt.firstName}</option>)
                        }
                    </select>
                    <br />
                </label>
                <button type="submit"> Add </button>
            </form>
        </div>
    );

}



export default SupervisorForm