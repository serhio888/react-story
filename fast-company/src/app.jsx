import React,{useState} from 'react';
import Users from './components/users';
import SearchStatus from './components/searchstatus';
import 'bootstrap/dist/css/bootstrap.css'

import { fetchAll } from './api/fake.api/user.api';


const App = () =>{

    const [users,setUsers] = useState(fetchAll())
    
    const handleDelete = (userId)=> {
       setUsers(users.filter((user)=>user._id !== userId))
    }

    const handleToggleBookmark = (id)=>{
        let newUsers = structuredClone(users)   //будем считать что у всех современные браузеры
        newUsers[id].bookmark = !users[id].bookmark
        setUsers(newUsers)
    }

    if(users.length === 0) return <SearchStatus length={users.length}/>
    return (
        <>
            <SearchStatus length={users.length}/>
            <Users
                bookmarkActive = {handleToggleBookmark}
                deleteUser = {handleDelete}
                users={users}
            />
        </>
    )
}

export default App