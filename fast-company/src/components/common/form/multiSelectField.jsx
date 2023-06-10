import React from "react"
import Select from "react-select"
import PropTypes from "prop-types"

const MultiSelectField = ({ options, onChange, name, label, defaultValue }) => {
    const optionsArray =
        !Array.isArray(options) && typeof options === "object"
            ? Object.keys(options).map((qualiti) => ({
                  label: options[qualiti].name,
                  value: options[qualiti]._id
              }))
            : options
    const handleChange = (value) => {
        onChange({ name: name, value })
    }
    return (
        <div className="mb-4">
            <label htmlFor={name}>{label}</label>
            <Select
                isMulti
                options={optionsArray}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={handleChange}
                closeMenuOnSelect={false}
                defaultValue={defaultValue}
            />
        </div>
    )
}

MultiSelectField.propTypes = {
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onChange: PropTypes.func,
    name: PropTypes.string,
    label: PropTypes.string,
    defaultValue: PropTypes.array
}
export default MultiSelectField
