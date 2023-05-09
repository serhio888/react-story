import React from "react"
import PropTypes from "prop-types"

const Loader = ({ string }) => {
    return <span>{string}</span>
}

Loader.propTypes = {
    string: PropTypes.string.isRequired
}

export default Loader
