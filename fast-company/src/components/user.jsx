import React, { useReducer } from 'react';
import Bookmark from './bookmark';
import Qualities from './qualities';

const User = ({bookmarkActive,deleteUser,user,id}) =>{
    return (

                    <tr>
                        <th scope="row">{user.name}</th>
                        <td><Qualities qualities={user.qualities}/></td>                                
                        <td>{user.profession.name}</td>
                        <td>{user.completedMeetings}</td>
                        <td>{user.rate}/5</td>
                        <td>
                            <Bookmark
                                 bookmarkActive={bookmarkActive}
                                 id={id}
                                 active={user.bookmark}
                            />
                        </td>
                        <td>
                            <button 
                                type="button"
                                className="btn btn-danger"
                                onClick={()=>deleteUser(user._id)}
                            >
                                        delete
                            </button>
                        </td>                                
                     </tr>

    )
}

export default User