import React, { useState } from "react"
import PropTypes from "prop-types"

const TextField = ({ type, value, name, onChange, label, error }) => {
    const [showPassword, setShowPassword] = useState(false)
    const getInputClasses = () => {
        return "form-control" + (error ? " is-invalid" : "")
    }

    const lookPassword = () => {
        setShowPassword((prevState) => !prevState)
    }

    return (
        <div className="mb-4">
            <label htmlFor={name}>{label}</label>
            <div className="input-group has-validation">
                <input
                    type={showPassword ? "text" : type}
                    value={value}
                    name={name}
                    onChange={onChange}
                    id={name}
                    className={getInputClasses()}
                />
                {type === "password" && (
                    <button
                        onClick={lookPassword}
                        className="btn btn-outline-secondary"
                        type="button"
                    >
                        <i
                            className={
                                "bi bi-eye" + (showPassword ? "" : "-slash")
                            }
                        ></i>
                    </button>
                )}
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
    )
}
TextField.defaultProps = {
    type: "text"
}
TextField.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func
}

export default TextField
