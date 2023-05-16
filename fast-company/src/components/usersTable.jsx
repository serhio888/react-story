import React from "react"
import User from "./user"
import PropTypes from "prop-types"
import TableHeader from "./tableHeader"

const UsersTables = ({
    users,
    bookmarkActive,
    deleteUser,
    onSort,
    selectedSort
}) => {
    const colums = {
        name: { iter: "name", name: "Имя" },
        qualities: { name: "Качества" },
        profession: { iter: "profession.name", name: "Профессия" },
        completedMeetings: {
            iter: "completedMeetings",
            name: "Встретился, раз"
        },
        rate: { iter: "rate", name: "Оценка" },
        bookmark: { iter: "bookmark", name: "Избранное" },
        delete: {}
    }

    return (
        <table className="table">
            <TableHeader
                colums={colums}
                onSort={onSort}
                selectedSort={selectedSort}
            />
            <tbody>
                {users.map((user) => {
                    return (
                        <User
                            key={user._id}
                            user={user}
                            bookmarkActive={bookmarkActive}
                            deleteUser={deleteUser}
                            id={user._id}
                        />
                    )
                })}
            </tbody>
        </table>
    )
}

UsersTables.propTypes = {
    users: PropTypes.array.isRequired,
    bookmarkActive: PropTypes.func.isRequired,
    deleteUser: PropTypes.func.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired
}

export default UsersTables
