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
            },
            isCapitalSymbol: {
                message: "Нужен заглавный символ"
            },
            isDigit: {
                message: "Нужна цифра"
            },
            isCount: {
                message: "Пароль нужен восьми символьный"
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

    const isValid = Object.keys(errors).length === 0

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    <h3 className="mb-4">Login</h3>
                    <form onSubmit={handlerSubmit}>
                        <TextField
                            value={data.email}
                            name={"email"}
                            onChange={handlerChange}
                            label="email"
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
                        <button
                            className="btn btn-primary w-100 mx-auto"
                            disabled={!isValid}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
