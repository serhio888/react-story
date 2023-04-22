import React from "react";


const SearchStatus = ({length})=> {

    if(length === 2 || length === 3 || length ===4){
        return (
            <span className="badge bg-primary">{length} человека тусонет с тобой сегодня</span>
        )
    }else if(length !== 0){
        return (
            <span className="badge bg-primary">{length} человек тусонет с тобой сегодня</span>
        )
    }

    return <span className="badge bg-warning text-dark">Никто не тусонет с тобой сегодня</span>
    
}

export default SearchStatus