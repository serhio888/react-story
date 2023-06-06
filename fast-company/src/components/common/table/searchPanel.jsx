import React from "react"
import PropTypes from "prop-types"

const SearchPanel = ({ search }) => {
    return (
        <div className="input-group">
            <span className="input-group-text">searchpanel</span>
            <input
                type="text"
                onChange={(e) => search(e.target.value)}
                maxLength={10}
                className="form-control"
            />
        </div>
    )
}

SearchPanel.propTypes = {
    search: PropTypes.func
}

export default SearchPanel
