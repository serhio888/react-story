import React from "react"
import PropTypes from "prop-types"

const Quality = ({ name, color }) => {
    return <span className={"badge p-1 m-1 text-bg-" + color}>{name}</span>
}
Quality.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}
export default Quality
