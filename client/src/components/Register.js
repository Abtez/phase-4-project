import { useState } from 'react'
import {Link} from 'react-router-dom'


export default function Register({getUser}){    

    const [error, seterror] = useState(false)

    const [formData, setformData] = useState({
        username: '',
        password: '',
        avatar: '',
        bio: ''
    })

    function handleInput(e){
        const name = e.target.name
        let value = e.target.value

        setformData({...formData,
        [name]: value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch("/users", {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(res => {
            if (res.status === 422) {
                res.json().then(data => {
                    seterror(true)
                })
            }
            else{
                res.json().then(data => {
                    const user = {
                        username: data.username,
                        password: formData.password
                    }
                    getUser(user)
                    seterror(false)
                })
            }
        })
        
    }

    return(
        <>
        <div className="bg-image-container">
        <div className="login-container">
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                <h3 className="my-4 text-center"><span className="line">User</span> Registration</h3>
                    {error ? <p className='text-danger' id='error'>All fields are required. Or try a different username.</p> : false}
                    <div className="input-group">
                    <input value={formData.username} onChange={handleInput} className="form-control my-3" type="text" name="username" placeholder="Enter username" />
                    </div>
                    <div className="input-group">
                    <input value={formData.password} onChange={handleInput} className="form-control my-3" type="password" name="password" placeholder="Password" />
                    </div> 
                    <div className="input-group">
                    <input value={formData.avatar} onChange={handleInput} className="form-control my-3" type="url" name="avatar" placeholder="Profile picture URL" />
                    </div>
                    <div className="input-group">
                    <textarea value={formData.bio} onChange={handleInput} className="form-control w-100" name='bio' placeholder="Enter a short bio" style={{height:'7rem'}}></textarea>
                    </div>
                    <div className="description justify-content-end gap-2 my-3">
                        <button className="login-button" type="submit">Register</button>
                    </div>
                    <p>Already have an account? <Link to="/login">Login here</Link></p>
                </div>
                <div className="col-md-3"></div>
            </div>
        </form>
        </div>
        </div>
        </>
    )
}