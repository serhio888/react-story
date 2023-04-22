import React from 'react';

const Quality = ({name,color}) => {
    return (
        <span className={"badge p-1 m-1 text-bg-" + color}>{name}</span>
    )
}

export default Quality