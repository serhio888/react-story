import React, { useState, useEffect } from "react"
import Pagination from "./../common/pagination"
import SearchStatus from "../ui/searchstatus"
import UsersTables from "../common/table/usersTable"
import GroupList from "./../common/grouplist"
import Loader from "../ui/loader"
import { paginate } from "../../utils/paginate"
import API from "../../api"
import _ from "lodash"
import { useParams } from "react-router-dom"
import UserPage from "../page/userPage/userpage"
import SearchPanel from "../common/table/searchPanel"

const Users = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [users, setUsers] = useState([])
    const [professions, setProfessions] = useState()
    const [filteredItems, setFilteredItems] = useState()
    const [filteredItemsSearch, setFilteredItemsSearch] = useState()
    const [order, setOrder] = useState({
        path: "",
        order: "asc",
        arrow: ""
    })
    const { userId } = useParams()
    const pageSize = 6
    const handleSearch = (str) => {
        setFilteredItems()
        const regExp = new RegExp(str, "gi")
        setFilteredItemsSearch({ regExp })
    }
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
        ? users.filter((user) => user.profession._id === filteredItems._id)
        : filteredItemsSearch
        ? users.filter((user) => filteredItemsSearch.regExp.test(user.name))
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

    if (userId) {
        return <UserPage userId={userId} />
    } else {
        return (
            <>
                <div className="ms-2">
                    <SearchStatus length={count} />
                </div>
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
                        <SearchPanel search={handleSearch} />
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
}

export default Users
