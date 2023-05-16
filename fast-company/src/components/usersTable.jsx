import React from "react"
import PropTypes from "prop-types"
import TableHeader from "./tableHeader"
import TableBody from "./tablebody"

const UsersTables = ({
    users,
    bookmarkActive,
    deleteUser,
    onSort,
    selectedSort
}) => {
    const columns = {
        name: { path: "name", name: "Имя" },
        qualities: { name: "Качества" },
        profession: { path: "profession.name", name: "Профессия" },
        completedMeetings: {
            path: "completedMeetings",
            name: "Встретился, раз"
        },
        rate: { path: "rate", name: "Оценка" },
        bookmark: { path: "bookmark", name: "Избранное" },
        delete: {}
    }

    return (
        <table className="table">
            <TableHeader
                columns={columns}
                onSort={onSort}
                selectedSort={selectedSort}
            />
            <TableBody columns={columns} data={users} />
            {/* <tbody>
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
            </tbody> */}
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
