import React from 'react';

const Bookmark = ({bookmarkActive,id,active}) => {

    if(active){
        return (
            <span className='bookmark'>
                <i className="bi bi-bookmark-plus-fill" onClick={()=>bookmarkActive(id)}></i>
            </span>
        )
    } else {
          return (
            <span className='bookmark'>
                <i className="bi bi-bookmark-dash" onClick={()=>bookmarkActive(id)}></i>
            </span>
          )  
    }
    
}

export default Bookmark
