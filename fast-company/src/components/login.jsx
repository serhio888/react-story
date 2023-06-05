import React, { useState, useEffect } from "react"
import TextField from "./textField"
import { validator } from "./../utils/validator"

const Login = () => {
    const [data, setData] = useState({ email: "", password: "" })
    const [errors, setErrors] = useState({})

    useEffect(() => {
        validate()
    }, [data])
    const handlerChange = ({ target }) => {
        setData((pS) => ({ ...pS, [target.name]: target.value }))
    }

    const validatorConfig = {
        email: {
            isRequired: {
                message: "Email обязателен для заполнения"
            },
            isEmail: {
                message: "Введите корректный email"
            }
        },
        password: {
            isRequired: {
                message: "Password обязателен для заполнения"
            }
        }
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
        const errors = validator(data, validatorConfig)
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
