import React, { useState, useEffect } from "react"
import Users from "./components/users"
import GroupList from "./components/grouplist"
import Loader from "./components/loader"
import "bootstrap/dist/css/bootstrap.css"

import API from "./api/index"

const App = () => {
    const [users, setUsers] = useState([])
    const [professions, setProfessions] = useState()
    const [filteredItems, setFilteredItems] = useState()
    useEffect(() => {
        API.users.fetchAll().then((data) => {
            setUsers(data)
        })
    }, [])
    useEffect(() => {
        API.professions.fetchAll().then((data) => {
            //console.log(data)
            setProfessions(data)
        })
    }, [])

    const handleItems = (selected) => {
        //console.log(selected)
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
