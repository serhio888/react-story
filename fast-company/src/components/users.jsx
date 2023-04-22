import React from "react";
import User from "./user";

const Users = ({bookmarkActive,deleteUser,users})=>{
        return (
            
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
                    users.map((user,index)=>{
                        return <User
                                    key = {user._id}   
                                    bookmarkActive={bookmarkActive}
                                    deleteUser={deleteUser}
                                    user={user}
                                    id={index}
                                 />
                    })
                }
                
            </tbody>
        </table>
        )
    
    
}

export default Users