import React from "react"
import PropTypes from "prop-types"
const CheckBoxField = ({ name, onChange, children, value, error }) => {
    const getInputClasses = () => {
        return "form-check-input" + (error ? " is-invalid" : "")
    }
    const handleChange = (e) => {
        //console.log(e.target)
        console.log("{ [e.target.name]: value }", { [e.target.name]: value })
        onChange({ name: name, value: !value })
    }

    return (
        <div className="form-check mb-4">
            <input
                className={getInputClasses()}
                type="checkbox"
                id={name}
                checked={value}
                onChange={handleChange}
                name={name}
            />
            <label className="form-check-label" htmlFor={name}>
                {children}
            </label>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    )
}
CheckBoxField.propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    error: PropTypes.string
}
export default CheckBoxField
