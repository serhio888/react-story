import React, { useState, useEffect } from "react"
import Pagination from "./pagination"
import SearchStatus from "./searchstatus"
import UsersTables from "./usersTable"
import { paginate } from "../utils/paginate"
import PropTypes from "prop-types"

const Users = ({ bookmarkActive, deleteUser, users, filteredItems }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 2
    const handlePageChange = (page) => {
        setCurrentPage(page)
    }
    const handleSort = (param) => {
        console.log(param)
    }
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
            <UsersTables
                users={userCrop}
                bookmarkActive={bookmarkActive}
                deleteUser={deleteUser}
                onSort={handleSort}
            />
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
