import React from 'react';

const Pagination = ({itemsCount,pageSize}) => {

    const pageCount = Math.ceil(itemsCount/pageSize)
    if(pageCount === 1) return null
    const arr = []
    //можно через lodash, но здесь лишние 4 строчки, думаю не кретично
    for(let i=0;i<pageCount;i++){
        arr.push(i+1)
    }
    return (
        <nav>
            <ul className="pagination">
                {
                    arr.map(page=><li key ={"page_" + page} className="page-item"><a className="page-link">{page}</a></li>)
                }
            </ul>
        </nav>
    )
}
 
export default Pagination;