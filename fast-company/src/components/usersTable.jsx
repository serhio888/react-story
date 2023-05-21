import React from "react"
import PropTypes from "prop-types"
import TableHeader from "./tableHeader"
import TableBody from "./tablebody"
import Bookmark from "./bookmark"
import Qualities from "./qualities"
import Table from "./table"

const UsersTables = ({
    users,
    bookmarkActive,
    deleteUser,
    onSort,
    selectedSort
}) => {
    const columns = {
        name: { path: "name", name: "Имя" },
        qualities: {
            name: "Качества",
            component: (user) => <Qualities qualities={user.qualities} />
        },
        profession: { path: "profession.name", name: "Профессия" },
        completedMeetings: {
            path: "completedMeetings",
            name: "Встретился, раз"
        },
        rate: { path: "rate", name: "Оценка" },
        bookmark: {
            path: "bookmark",
            name: "Избранное",
            component: (user) => {
                return (
                    <Bookmark
                        bookmarkActive={bookmarkActive}
                        id={user._id}
                        active={user.bookmark}
                    />
                )
            }
        },
        delete: {
            component: (user) => (
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => deleteUser(user._id)}
                >
                    delete
                </button>
            )
        }
    }

    return (
        <Table>
            <TableHeader
                columns={columns}
                onSort={onSort}
                selectedSort={selectedSort}
            />
            <TableBody columns={columns} data={users} />
        </Table>
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
