import React, { useState, useEffect } from "react"
import Users from "./components/users"
//import SearchStatus from "./components/searchstatus"
import GroupList from "./components/grouplist"
import Loader from "./components/loader"
import { list } from "./api/fake.api/professions.api"
import "bootstrap/dist/css/bootstrap.css"

import { fetchAll } from "./api/fake.api/user.api"

const App = () => {
    const [users, setUsers] = useState(fetchAll())
    const [professions, setProfessions] = useState()
    const [filteredItems, setFilteredItems] = useState()

    useEffect(() => {
        list.then((data) => {
            setProfessions(data)
        })
    }, [])

    const handleItems = (selected) => {
        setFilteredItems(selected)
    }

    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId))
    }

    const handleReset = () => {
        setUsers(fetchAll())
        setFilteredItems()
    }

    const handleToggleBookmark = (userId) => {
        setUsers((prevState) =>
            prevState.map((user) => {
                if (user._id === userId) {
                    console.log(user)
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

    return (
        <div>
            <div className="d-flex justify-content-start">
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
                <div className="d-flex flex-column flex-grow-1 mx-4">
                    <Users
                        bookmarkActive={handleToggleBookmark}
                        deleteUser={handleDelete}
                        users={users}
                        filteredItems={filteredItems}
                    />
                </div>
            </div>
        </div>
    )
}

export default App
