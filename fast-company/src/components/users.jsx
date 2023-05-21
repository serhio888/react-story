import React, { useState, useEffect } from "react"
import Pagination from "./pagination"
import SearchStatus from "./searchstatus"
import UsersTables from "./usersTable"
import GroupList from "./grouplist"
import Loader from "./loader"
import { paginate } from "../utils/paginate"
import API from "../api"
import _ from "lodash"

const Users = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [users, setUsers] = useState([])
    const [professions, setProfessions] = useState()
    const [filteredItems, setFilteredItems] = useState()
    const [order, setOrder] = useState({
        path: "",
        order: "asc",
        arrow: ""
    })
    const pageSize = 6
    const handleItems = (selected) => {
        setFilteredItems(selected)
    }

    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId))
    }

    const handleReset = () => {
        setFilteredItems()
    }

    const handleToggleBookmark = (userId) => {
        setUsers((prevState) =>
            prevState.map((user) => {
                if (user._id === userId) {
                    return {
                        ...user,
                        bookmark: !user.bookmark
                    }
                } else {
                    return user
                }
            })
        )
    }
    const handlePageChange = (page) => {
        setCurrentPage(page)
    }
    const handleSort = (item) => {
        setOrder(item)
    }
    const filtered = filteredItems
        ? users.filter((user) => user.profession.name === filteredItems.name)
        : users
    const sorteredUsers = _.orderBy(filtered, order.path, order.order)
    const userCrop = paginate(sorteredUsers, currentPage, pageSize)
    const count = filtered.length

    useEffect(() => {
        API.users.fetchAll().then((data) => {
            setUsers(data)
        })
    }, [])
    useEffect(() => {
        API.professions.fetchAll().then((data) => {
            setProfessions(data)
        })
    }, [])
    useEffect(() => {
        if (userCrop.length === 0 && currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }, [userCrop])

    return (
        <>
            <SearchStatus length={count} />
            <div className="d-flex mt-2">
                {professions ? (
                    <div className="mx-2">
                        <GroupList
                            items={professions}
                            checkItems={handleItems}
                            reset={handleReset}
                            active={filteredItems}
                        />
                    </div>
                ) : (
                    <div>
                        <Loader string={"загружаем профессии"} />
                    </div>
                )}

                <div className="d-flex flex-column flex-grow-1 m-2">
                    <UsersTables
                        users={userCrop}
                        bookmarkActive={handleToggleBookmark}
                        deleteUser={handleDelete}
                        onSort={handleSort}
                        selectedSort={order}
                    />
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        onPageChange={handlePageChange}
                        active={currentPage}
                    />
                </div>
            </div>
        </>
    )
}

export default Users
