import React from "react"
import PropTypes from "prop-types"

const SearchStatus = ({ length }) => {
    if (length === 2 || length === 3 || length === 4) {
        return (
            <div className="badge bg-primary fs-6">
                <span className="m-2">
                    {length} человека тусонет с тобой сегодня
                </span>
                <i className="bi bi-emoji-neutral"></i>
            </div>
        )
    } else if (length !== 0) {
        return (
            <div className="badge bg-primary fs-6">
                <span className="m-2">
                    {length} человек тусонет с тобой сегодня
                </span>
                {length === 1 ? (
                    <i className="bi bi-emoji-neutral"></i>
                ) : (
                    <i className="bi bi-emoji-smile"></i>
                )}
            </div>
        )
    }

    return (
        <div className="badge bg-warning text-dark fs-6">
            <span className="m-2">Никто не тусонет с тобой сегодня</span>
            <i className="bi bi-emoji-frown m-2"></i>
        </div>
    )
}
SearchStatus.propTypes = {
    length: PropTypes.string.isRequired
}

export default SearchStatus
