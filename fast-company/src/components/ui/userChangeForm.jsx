import React, { useState, useEffect } from "react"
import API from "../../api"
import TextField from "./../common/form/textField"
import { useHistory } from "react-router-dom"
import PropTypes from "prop-types"
import SelectField from "./../common/form/selectField"
import RadioField from "../common/form/radioField"
import MultiSelectField from "../common/form/multiSelectField"
import * as yup from "yup"

const UserChangeForm = ({ userId }) => {
    const [userInfo, setUserInfo] = useState()
    const [professions, setProfessions] = useState()
    const [qualities, setQualities] = useState()
    const [errors, setErrors] = useState({})
    const history = useHistory()

    let userSchema = yup.object().shape({
        name: yup.string().min(5, "должно быть не менее 5 символов"),
        email: yup
            .string()
            .required("Электронная почта обязательна для заполнения")
            .email("Email введён некорректно")
            .matches(/^\S+@\S+\.\S+$/g, "введите email"),
        qualities: yup.array().min(1, "Нужно выбрать хотябы одно качество")
    })

    useEffect(() => {
        API.users.getById(userId).then((data) => setUserInfo(data))
        API.professions.fetchAll().then((data) => setProfessions(data))
        API.qualities.fetchAll().then((data) => setQualities(data))
    }, [])
    useEffect(() => {
        userSchema
            .validate(userInfo, { abortEarly: true })
            .then(() => setErrors({}))
            .catch((err) => {
                setErrors({ [err.path]: err.message })
            })
    }, [userInfo])

    const handleChange = (target) => {
        setUserInfo((pS) => ({ ...pS, [target.name]: target.value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        API.users.update(userId, userInfo).then(() => {
            history.push(`/users/${userId}`)
        })
    }
    const isValid = Object.keys(errors).length === 0
    if (!userInfo) {
        return <h3>Loading....</h3>
    }
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    <form onSubmit={handleSubmit}>
                        <TextField
                            value={userInfo.name}
                            name="name"
                            onChange={handleChange}
                            label="Имя"
                            error={errors.name}
                        />
                        <TextField
                            value={userInfo.email}
                            name="email"
                            onChange={handleChange}
                            label="email"
                            error={errors.email}
                        />
                        <SelectField
                            label="Выбери профессию"
                            defaultOption={"..."}
                            options={professions}
                            onChange={handleChange}
                            value={userInfo.profession._id}
                            name="profession"
                        />
                        <RadioField
                            options={[
                                { name: "Male", value: "male" },
                                { name: "Female", value: "female" },
                                { name: "Other", value: "Other" }
                            ]}
                            value={userInfo.sex}
                            name="sex"
                            onChange={handleChange}
                            label={"Изменить пол"}
                        />
                        <MultiSelectField
                            options={qualities}
                            onChange={handleChange}
                            name="qualities"
                            label="Выберите качества"
                            defaultValue={userInfo.qualities.map((qualiti) => ({
                                label: qualiti.name,
                                value: qualiti._id,
                                color: qualiti.color
                            }))}
                            error={errors.qualities}
                        />
                        <button
                            className="btn btn-primary w-100 mx-auto"
                            disabled={!isValid}
                            type="submit"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

UserChangeForm.propTypes = {
    userId: PropTypes.string
}

export default UserChangeForm
