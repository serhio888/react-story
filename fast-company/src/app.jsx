import React,{useState} from 'react';
import Users from './components/users';
import SearchStatus from './components/searchstatus';
import 'bootstrap/dist/css/bootstrap.css'

import { fetchAll } from './api/fake.api/user.api';


const App = () =>{

    const [users,setUsers] = useState(fetchAll())
    console.log(users)
    const handleDelete = (userId)=> {

    }

    const handleToggleBookmark = (id)=>{

    }

    if(users.length === 0) return <SearchStatus length={users.length}/>
    return (
        <>
            <SearchStatus length={users.length}/>
            <Users/>
        </>
    )
}

export default App