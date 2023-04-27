import React, { useState } from "react"
import Users from "./components/users"
import SearchStatus from "./components/searchstatus"
import "bootstrap/dist/css/bootstrap.css"

import { fetchAll } from "./api/fake.api/user.api"

const App = () => {
    const [users, setUsers] = useState(fetchAll())

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
                    return {
                        ...user
                    }
                }
            })
        )
    }

    if (users.length === 0) return <SearchStatus length={users.length} />
    return (
        <>
            <SearchStatus length={users.length} />
            <Users
                bookmarkActive={handleToggleBookmark}
                deleteUser={handleDelete}
                users={users}
            />
        </>
    )
}

export default App
