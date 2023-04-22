import React from 'react';

const Bookmark = ({active,setActive}) => {

    if(active){
        return (
            <span className='bookmark'>
                <i className="bi bi-bookmark-plus-fill" onClick={setActive}></i>
            </span>
        )
    } else {
          return (
            <span className='bookmark'>
                <i className="bi bi-bookmark-dash" onClick={setActive}></i>
            </span>
          )  
    }
    
}

export default Bookmark
