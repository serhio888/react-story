import React from "react"
import PropTypes from "prop-types"

const GroupList = ({ professions }) => {
    const arrayProfessions = Object.values(professions)
    return (
        <ul className="list-group">
            {arrayProfessions.map((item) => (
                <li key={item.id} className="list-group-item">
                    {item.name}
                </li>
            ))}
        </ul>
    )
}

GroupList.propTypes = {
    professions: PropTypes.object.isRequired
}

export default GroupList
