import React from 'react';

const Qualities = ({qualities}) =>{
    return (
        qualities.map((qualitie)=><span key={qualitie._id} className={"badge p-1 m-1 text-bg-"+ qualitie.color}>{qualitie.name}</span>)
    )
}

export default Qualities