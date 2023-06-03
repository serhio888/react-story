import React, { useState, useEffect } from "react"
import TextField from "./textField"

const Login = () => {
    const [data, setData] = useState({ email: "", password: "" })
    const [errors, setErrors] = useState({})

    useEffect(() => {
        validate()
    }, [data])
    const handlerChange = ({ target }) => {
        setData((pS) => ({ ...pS, [target.name]: target.value }))
    }

    const handlerSubmit = (e) => {
        e.preventDefault()
        if (validate()) {
            console.log("Все в норме можно отправлять")
        } else {
            console.log(errors)
        }
    }

    const validate = () => {
        const errors = {}
        for (const errorFiled in data) {
            if (data[errorFiled].trim() === "") {
                errors[errorFiled] = `Поле ${errorFiled} должно быть заполнено`
            }
        }

        setErrors(errors)
        return Object.keys(errors).length === 0
    }

    return (
        <form onSubmit={handlerSubmit}>
            <TextField
                value={data.email}
                name={"email"}
                onChange={handlerChange}
                label="EMAIL"
                error={errors.email}
            />
            <TextField
                value={data.password}
                name={"password"}
                onChange={handlerChange}
                label="password"
                type="password"
                error={errors.password}
            />
            <button>Submit</button>
        </form>
    )
}

export default Login
