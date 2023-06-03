import React, { useState } from "react"

const Login = () => {
    const [data, setData] = useState({ email: "", password: "" })
    const handlerChange = ({ target }) => {
        setData((pS) => ({ ...pS, [target.name]: target.value }))
    }

    return (
        <form action="">
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    value={data.email}
                    name="email"
                    onChange={handlerChange}
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={data.password}
                    onChange={handlerChange}
                />
            </div>
        </form>
    )
}

export default Login
