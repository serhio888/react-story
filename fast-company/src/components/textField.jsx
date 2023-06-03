import React from "react"
import PropTypes from "prop-types"

const TextField = ({ type, value, name, onChange, label }) => {
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
    onChange: PropTypes.func
}

export default TextField
