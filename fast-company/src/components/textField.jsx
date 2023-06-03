import React from "react"
import PropTypes from "prop-types"

const TextField = ({ type, value, name, onChange, label, error }) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                value={value}
                name={name}
                onChange={onChange}
                id={name}
            />
            {error && <p>{error}</p>}
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
