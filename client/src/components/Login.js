import { useState } from "react"
import { Link } from "react-router-dom"

export default function Login({getUser, error}){

    const [formData, setformData] = useState({
        username: '',
        password: ''
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
        getUser(formData)
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                <h3 className="my-4 text-center"><span className="line">Welcome</span> Back</h3>
                {error ? <p className='text-danger' id='error'>Error! Invalid username or password.</p> : false}
                <input value={formData.username} onChange={handleInput} className="form-control my-3" type="text" name="username" placeholder="Enter username" />
                <input value={formData.password} onChange={handleInput} className="form-control my-3" type="password" name="password" placeholder="Password" />
                    <div className="description justify-content-end gap-2 my-3">
                        <button type="submit">Login</button>
                    </div>
                    <p>Don't have an account? <Link to="/register">Register here</Link></p>
                </div>
                <div className="col-md-3"></div>
            </div>
        </form>
        </>
    )
}