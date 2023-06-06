import React from "react"
import PropTypes from "prop-types"
const SelectField = ({
    label,
    value,
    onChange,
    defaultOption,
    options,
    error
}) => {
    const getInputClasses = () => {
        return "form-select" + (error ? " is-invalid" : "")
    }
    const optionsArray =
        !Array.isArray(options) && typeof options === "object"
            ? Object.key(options).map((profession) => ({
                  name: options[profession].name,
                  value: options[profession]._id
              }))
            : options
    return (
        <div className="mb-4">
            <label className="form-label">{label}</label>
            <select
                className={getInputClasses()}
                value={value}
                onChange={onChange}
                name="profession"
            >
                <option disabled value="">
                    {defaultOption}
                </option>
                {optionsArray &&
                    optionsArray.map((option, ind) => (
                        <option key={ind} value={option.value}>
                            {option.name}
                        </option>
                    ))}
            </select>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    )
}
SelectField.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    defaultOption: PropTypes.string,
    error: PropTypes.string,
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}
export default SelectField
