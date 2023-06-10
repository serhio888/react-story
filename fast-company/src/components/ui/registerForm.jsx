import React, { useState, useEffect } from "react"
import TextField from "../common/form/textField"
import { validator } from "../../utils/validator"
import SelectField from "../common/form/selectField"
import API from "../../api"
import RadioField from "../common/form/radioField"
import MultiSelectField from "./../common/form/multiSelectField"
import CheckBoxField from "../common/form/checkboxField"

const RegisterForm = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
        profession: "",
        sex: "male",
        qualities: [],
        license: false
    })
    const [errors, setErrors] = useState({})
    const [professions, setProfessions] = useState()
    const [qualities, setQualities] = useState()

    useEffect(() => {
        validate()
    }, [data])
    useEffect(() => {
        API.professions.fetchAll().then((data) => setProfessions(data))
        API.qualities.fetchAll().then((data) => setQualities(data))
    }, [])
    const handleChange = (target) => {
        console.log("target", target)
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
        },
        license: {
            isRequired: {
                message: "Нужно принять лицензию"
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
                name={"profession"}
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
            <MultiSelectField
                options={qualities}
                onChange={handleChange}
                name="qualities"
                label="Выберите качества"
                defaultValue={data.qualities}
            />
            <CheckBoxField
                value={data.license}
                onChange={handleChange}
                name="license"
                error={errors.license}
            >
                Принять <a href="">лицензионное соглашение</a>
            </CheckBoxField>
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
