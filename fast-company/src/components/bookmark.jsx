import React from 'react';

const Bookmark = ({bookmarkActive,id,active}) => {

    return (
        <span className='bookmark'>
                <i className={active ? "bi bi-bookmark-plus-fill" : "bi bi-bookmark-dash"} onClick={()=>bookmarkActive(id)}></i>
        </span>
    )
    
}

export default Bookmark
