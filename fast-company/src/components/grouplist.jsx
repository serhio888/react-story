import React from "react"
import PropTypes from "prop-types"

const GroupList = ({ items, checkItems, reset, active }) => {
    //console.log("items", Object.keys(items))
    return (
        <ul className="list-group">
            {Object.keys(items).map((item) => (
                <li
                    key={items[item]._id}
                    className={
                        "list-group-item" +
                        (items[item] === active ? " list-group-item-info" : "")
                    }
                    style={{ textAlign: "center" }}
                    onClick={() => checkItems(items[item])}
                    role="button"
                >
                    {items[item].name}
                </li>
            ))}
            {
                <li className="list-group-item" style={{ textAlign: "center" }}>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => reset()}
                    >
                        Сброс
                    </button>
                </li>
            }
        </ul>
    )
}

GroupList.propTypes = {
    items: PropTypes.oneOfType([
        PropTypes.object.isRequired,
        PropTypes.array.isRequired
    ]),
    checkItems: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    active: PropTypes.object
}

export default GroupList
