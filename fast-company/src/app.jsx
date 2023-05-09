import React, { useState, useEffect } from "react"
import Users from "./components/users"
import SearchStatus from "./components/searchstatus"
import GroupList from "./components/grouplist"
import Loader from "./components/loader"
import { list } from "./api/fake.api/professions.api"
import "bootstrap/dist/css/bootstrap.css"

import { fetchAll } from "./api/fake.api/user.api"

const App = () => {
    const [users, setUsers] = useState(fetchAll())
    const [professions, setProfessions] = useState(null)

    useEffect(() => {
        list.then((object) => {
            setProfessions(object)
        })
    }, [])

    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId))
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

    if (users.length === 0) return <SearchStatus length={users.length} />
    return (
        <div>
            <div className="mb-2">
                <SearchStatus length={users.length} />
            </div>
            <div className="d-flex justify-content-start">
                {professions ? (
                    <div className="mx-2">
                        <GroupList professions={professions} />
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
                    />
                </div>
            </div>
        </div>
    )
}

export default App
