import React, { useState } from "react"
import TextField from "./textField"

const Login = () => {
    const [data, setData] = useState({ email: "", password: "" })
    const handlerChange = ({ target }) => {
        setData((pS) => ({ ...pS, [target.name]: target.value }))
    }

    const handlerSubmit = (e) => {
        e.preventDefault()
        console.log(data)
    }

    return (
        <form onSubmit={handlerSubmit}>
            <TextField
                value={data.email}
                name={"email"}
                onChange={handlerChange}
                label="EMAIL"
            />
            <TextField
                value={data.password}
                name={"password"}
                onChange={handlerChange}
                label="password"
                type="password"
            />
            <button>Submit</button>
        </form>
    )
}

export default Login
