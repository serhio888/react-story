import React, { useState, useEffect } from "react"
import Pagination from "./pagination"
import User from "./user"
import SearchStatus from "./searchstatus"
import { paginate } from "../utils/paginate"
import PropTypes from "prop-types"

const Users = ({ bookmarkActive, deleteUser, users, filteredItems }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 2
    const handlePageChange = (page) => {
        setCurrentPage(page)
    }
    //console.log(users)
    //console.log(filteredItems)
    const filtered = filteredItems
        ? users.filter((user) => user.profession.name === filteredItems.name)
        : users
    const userCrop = paginate(filtered, currentPage, pageSize)
    const count = filtered.length
    useEffect(() => {
        if (userCrop.length === 0 && currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }, [userCrop])

    return (
        <>
            <SearchStatus length={count} />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Имя</th>
                        <th scope="col">Качества</th>
                        <th scope="col">Профессия</th>
                        <th scope="col">Встретился, раз</th>
                        <th scope="col">Оценка</th>
                        <th scope="col">Избранное</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {userCrop.map((user) => {
                        return (
                            <User
                                key={user._id}
                                bookmarkActive={bookmarkActive}
                                deleteUser={deleteUser}
                                user={user}
                                id={user._id}
                            />
                        )
                    })}
                </tbody>
            </table>
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                onPageChange={handlePageChange}
                active={currentPage}
            />
        </>
    )
}
Users.propTypes = {
    bookmarkActive: PropTypes.func.isRequired,
    deleteUser: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
    filteredItems: PropTypes.object
}
export default Users
