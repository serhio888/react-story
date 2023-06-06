import React, { useState } from "react"
import LoginForm from "../ui/loginForm"
import { useParams } from "react-router-dom"
import RegisterForm from "../ui/registerForm"

const Login = () => {
    const { type } = useParams()
    const [typeForm, setTypeForm] = useState(
        type === "register" ? type : "login"
    )
    const toggleTypeForm = () => {
        setTypeForm((prevState) =>
            prevState === "register" ? "login" : "register"
        )
    }
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    {typeForm === "register" ? (
                        <>
                            <h3 className="mb-4">Register</h3>
                            <RegisterForm />
                            <p>
                                Уже есть аккаунт?
                                <a role="button" onClick={toggleTypeForm}>
                                    Логин
                                </a>
                            </p>
                        </>
                    ) : (
                        <>
                            <h3 className="mb-4">Login</h3>
                            <LoginForm />
                            <p>
                                Нужен аккаунт
                                <a role="button" onClick={toggleTypeForm}>
                                    Регистрация
                                </a>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Login
