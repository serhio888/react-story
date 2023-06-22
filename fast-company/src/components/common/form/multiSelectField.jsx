import React from "react"
import Select from "react-select"
import PropTypes from "prop-types"

const MultiSelectField = ({
    options,
    onChange,
    name,
    label,
    defaultValue,
    error
}) => {
    const optionsArray =
        !Array.isArray(options) && typeof options === "object"
            ? Object.keys(options).map((qualiti) => ({
                  label: options[qualiti].name,
                  value: options[qualiti]._id,
                  color: options[qualiti].color
              }))
            : options
    const getInputClasses = () => {
        return "basic-multi-select" + (error ? " is-invalid" : "")
    }
    const handleChange = (value) => {
        onChange({
            name: name,
            value: value.map((qualiti) => ({
                _id: qualiti.value,
                color: qualiti.color,
                name: qualiti.label
            }))
        })
    }
    return (
        <div className="mb-4">
            <label htmlFor={name}>{label}</label>
            <Select
                isMulti
                options={optionsArray}
                className={getInputClasses()}
                classNamePrefix="select"
                onChange={handleChange}
                closeMenuOnSelect={false}
                defaultValue={defaultValue}
            />
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    )
}

MultiSelectField.propTypes = {
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onChange: PropTypes.func,
    name: PropTypes.string,
    label: PropTypes.string,
    defaultValue: PropTypes.array,
    error: PropTypes.string
}
export default MultiSelectField
