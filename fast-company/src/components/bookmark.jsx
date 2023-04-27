import React from "react"
import PropTypes from "prop-types"

const Bookmark = ({ bookmarkActive, id, active }) => {
    return (
        <span className="bookmark">
            <i
                className={
                    active ? "bi bi-bookmark-plus-fill" : "bi bi-bookmark-dash"
                }
                onClick={() => bookmarkActive(id)}
            ></i>
        </span>
    )
}
Bookmark.propTypes = {
    bookmarkActive: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired
}
export default Bookmark
