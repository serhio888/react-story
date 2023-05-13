import React from "react"
import PropTypes from "prop-types"

const GroupList = ({ items, checkProfessions }) => {
    //const arrayProfessions = Object.values(professions)
    //console.log(arrayProfessions)
    console.log(Object.keys(items))
    return (
        <ul className="list-group">
            {Object.keys(items).map((item) => (
                <li
                    key={items[item]._id}
                    className="list-group-item"
                    style={{ textAlign: "center" }}
                    onClick={() => checkProfessions(items[item])}
                    role="button"
                >
                    {items[item].name}
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
    items: PropTypes.object.isRequired,
    checkProfessions: PropTypes.func.isRequired
}

export default GroupList
