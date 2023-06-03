import React, { useState } from "react"

const Login = () => {
    const [email, setEmail] = useState("")
    const handlerChange = (e) => {
        setEmail(e.target.value)
    }

    return (
        <form action="">
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={handlerChange}
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
            </div>
        </form>
    )
}

export default Login
