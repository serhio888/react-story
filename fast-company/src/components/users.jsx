import React,{useState} from "react";
import api from '../api'
import 'bootstrap/dist/css/bootstrap.css'

const Users = ()=>{
    
    const [users,setUsers] = useState(api.users.fetchAll())
    const handleDelete = (userId)=>{
         setUsers((pS)=>pS.filter((elem,index)=>index !== userId))
    }
    const renderPhrase = () => {
            const l = users.length
            if(l === 4 || l === 3 || l === 2 ){
                return <span className="badge bg-primary">{users.length} человека тусонет с тобой сегодня</span>
            }else {
                return <span className="badge bg-primary">{users.length} человек тусонет с тобой сегодня</span>
            }
    }
    if(users.length === 0){
        return <span className="badge bg-warning text-dark">Никто не тусонет с тобой сегодня</span>
    }else {
        return (
            <>          
            {renderPhrase()}
            <table className="table">
            <thead>
                <tr>
                <th scope="col">Имя</th>
                <th scope="col">Качества</th>
                <th scope="col">Профессия</th>
                <th scope="col">Встретился, раз</th>
                <th scope="col">Оценка</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {
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
                }
            </tbody>
        </table>
            </>
        )
    }
    
}

export default Users