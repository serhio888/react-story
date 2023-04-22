import React from 'react';
import Quality from './quality';

const Qualities = ({qualities}) =>{
    return (
        qualities.map(q=><Quality key={q._id} name={q.name} color={q.color}/>)
    )
}

export default Qualities