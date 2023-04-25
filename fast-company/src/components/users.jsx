import React from "react";
import Pagination from "./pagination";
import User from "./user";

const Users = ({bookmarkActive,deleteUser,users})=>{

        const count = users.length
        const pageSize = 4
        const handlePageChange = (number)=>{
            console.log(number)
        }
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
                {
                    users.map((user)=>{
                        return <User
                                    key = {user._id}   
                                    bookmarkActive={bookmarkActive}
                                    deleteUser={deleteUser}
                                    user={user}
                                    id={user._id}
                                 />
                    })
                }
                
            </tbody>
        </table>
        <Pagination itemsCount={count} pageSize={pageSize} onPageChange={handlePageChange}/>      
        </> 
        )
    
    
}

export default Users