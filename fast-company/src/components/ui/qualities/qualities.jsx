import React from "react"
import Quality from "./quality"
import PropTypes from "prop-types"

const Qualities = ({ qualities }) => {
    return qualities.map((q) => (
        <Quality key={q._id} name={q.name} color={q.color} />
    ))
}

Qualities.propTypes = {
    qualities: PropTypes.array.isRequired
}

export default Qualities
