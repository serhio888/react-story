import React, { useState, useEffect } from "react"
import Pagination from "./pagination"
import User from "./user"
import { paginate } from "../utils/paginate"
import PropTypes from "prop-types"

const Users = ({ bookmarkActive, deleteUser, users }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const count = users.length
    const pageSize = 4
    const handlePageChange = (page) => {
        setCurrentPage(page)
    }
    const userCrop = paginate(users, currentPage, pageSize)
    useEffect(() => {
        if (userCrop.length === 0 && currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }, [userCrop])
    return (
        <>
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
    users: PropTypes.array.isRequired
}
export default Users
