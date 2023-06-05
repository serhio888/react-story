import React from "react"
import PropTypes from "prop-types"

const TextField = ({ type, value, name, onChange, label, error }) => {
    const getInputClasses = () => {
        return "form-control" + (error ? " is-invalid" : "")
    }

    return (
        <div className="mb-4">
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                value={value}
                name={name}
                onChange={onChange}
                id={name}
                className={getInputClasses()}
            />
            {error && <div className="invalid-feedback">{error}</div>}
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
