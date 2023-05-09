import React from "react"
import PropTypes from "prop-types"

const GroupList = ({ professions }) => {
    const arrayProfessions = Object.values(professions)
    return (
        <ul className="list-group">
            {arrayProfessions.map((item) => (
                <li
                    key={item.id}
                    className="list-group-item"
                    style={{ textAlign: "center" }}
                >
                    {item.name}
                </li>
            ))}
            {
                <li className="list-group-item" style={{ textAlign: "center" }}>
                    <button type="button" className="btn btn-danger">
                        Сброс
                    </button>
                </li>
            }
        </ul>
    )
}

GroupList.propTypes = {
    professions: PropTypes.object.isRequired
}

export default GroupList
