import React, { useState, useEffect } from "react"
import TextField from "../common/form/textField"
import { validator } from "../../utils/validator"
import SelectField from "../common/form/selectField"
import API from "../../api"
import RadioField from "../common/form/radioField"

const RegisterForm = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
        profession: "",
        sex: "male"
    })
    const [errors, setErrors] = useState({})
    const [professions, setProfessions] = useState()

    useEffect(() => {
        validate()
    }, [data])
    useEffect(() => {
        API.professions.fetchAll().then((data) => setProfessions(data))
    }, [])
    const handleChange = ({ target }) => {
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
                message: "Пароль нужен восьмисимвольный"
            }
        },
        profession: {
            isRequired: {
                message: "Выбор профессии обязателен"
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
        <form onSubmit={handlerSubmit}>
            <TextField
                value={data.email}
                name={"email"}
                onChange={handleChange}
                label="email"
                error={errors.email}
            />
            <TextField
                value={data.password}
                name={"password"}
                onChange={handleChange}
                label="password"
                type="password"
                error={errors.password}
            />
            <SelectField
                label="Выбери профессию"
                defaultOption="..."
                options={professions}
                onChange={handleChange}
                value={data.profession}
                error={errors.profession}
            />
            <RadioField
                options={[
                    { name: "Male", value: "male" },
                    { name: "Female", value: "female" },
                    { name: "Other", value: "Other" }
                ]}
                value={data.sex}
                name={"sex"}
                onChange={handleChange}
            />
            <button
                className="btn btn-primary w-100 mx-auto"
                disabled={!isValid}
                type="submit"
            >
                Submit
            </button>
        </form>
    )
}

export default RegisterForm
