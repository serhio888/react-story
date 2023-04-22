import React from "react";
import User from "./user";

const Users = ()=>{
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
                {/* {
                    users.map((user,index)=>{
                        return (
                            <tr key={user._id}>
                                <th scope="row">{user.name}</th>
                                <td>
                                    {
                                        user.qualities.map((qualitie)=><span key={qualitie._id} className={"badge text-bg-"+ qualitie.color}>{qualitie.name}</span>)
                                    }
                                </td>
                                <td>{user.profession.name}</td>
                                <td>{user.completedMeetings}</td>
                                <td>{user.rate}/5</td>
                                <td>
                                    <button 
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={()=>handleDelete(index)}
                                    >
                                        delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                } */}
                <User/>
            </tbody>
        </table>
        )
    
    
}

export default Users