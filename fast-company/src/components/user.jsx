import React from "react"
import Bookmark from "./bookmark"
import Qualities from "./qualities"
import PropTypes from "prop-types"

const User = ({ bookmarkActive, deleteUser, user, id }) => {
    return (
        <tr>
            <th scope="row">{user.name}</th>
            <td>
                <Qualities qualities={user.qualities} />
            </td>
            <td>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate}/5</td>
            <td>
                <Bookmark
                    bookmarkActive={bookmarkActive}
                    id={id}
                    active={user.bookmark}
                />
            </td>
            <td>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => deleteUser(user._id)}
                >
                    delete
                </button>
            </td>
        </tr>
    )
}

User.propTypes = {
    bookmarkActive: PropTypes.func.isRequired,
    deleteUser: PropTypes.func.isRequired,
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        qualities: PropTypes.array.isRequired,
        profession: PropTypes.shape({
            _id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired,
        completedMeetings: PropTypes.number.isRequired,
        rate: PropTypes.number.isRequired,
        bookmark: PropTypes.bool.isRequired,
        _id: PropTypes.string.isRequired
    }),
    id: PropTypes.string.isRequired
}

export default User
