import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useHistory } from "react-router-dom"
import API from "../../../api"
import Qualities from "./../../ui/qualities/qualities"

const UserPage = ({ userId }) => {
    const [userInfo, setUserInfo] = useState()
    const history = useHistory()

    const changeUser = () => {
        history.push(`/users/${userId}/edit`)
    }
    useEffect(() => {
        API.users.getById(userId).then((data) => {
            setUserInfo(data)
        })
    }, [])

    if (userInfo) {
        return (
            <div className="userPage">
                <h1>{userInfo.name}</h1>
                <p>Профессия:{userInfo.profession.name}</p>
                <p>Качества:{<Qualities qualities={userInfo.qualities} />}</p>
                <p>Встретился раз:{userInfo.completedMeetings}</p>
                <p>Rate:{userInfo.rate}</p>
                <button
                    type="button"
                    className="btn btn-light"
                    onClick={() => changeUser()}
                >
                    Изменить юзера
                </button>
            </div>
        )
    } else {
        return "Loading"
    }
}

UserPage.propTypes = {
    userId: PropTypes.string
}

export default UserPage
