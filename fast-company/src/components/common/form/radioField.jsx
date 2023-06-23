import React from "react"
import PropTypes from "prop-types"
const RadioField = ({ options, name, onChange, value, label }) => {
    const handleChange = ({ target }) => {
        onChange({ name: [target.name], value: target.value })
    }

    return (
        <div className="mb-4">
            <label className="form-label">{label}</label>
            {options.map((option) => (
                <div
                    className="form-check form-check-inline"
                    key={option.name + "_" + option.value}
                >
                    <input
                        className="form-check-input"
                        type="radio"
                        name={name}
                        id={option.name + "_" + option.value}
                        value={option.value}
                        checked={option.value === value}
                        onChange={handleChange}
                    />
                    <label
                        className="form-check-label"
                        htmlFor={option.name + "_" + option.value}
                    >
                        {option.name}
                    </label>
                </div>
            ))}
        </div>
    )
}
RadioField.propTypes = {
    options: PropTypes.array,
    value: PropTypes.string,
    name: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func,
    label: PropTypes.string
}
export default RadioField
