import React from "react"
import PropTypes from "prop-types"

const Pagination = ({ itemsCount, pageSize, onPageChange, active }) => {
    const pageCount = Math.ceil(itemsCount / pageSize)
    if (pageCount === 1) return null
    const arr = []
    //можно через lodash, но здесь лишние 4 строчки, думаю не кретично
    for (let i = 0; i < pageCount; i++) {
        arr.push(i + 1)
    }
    return (
        <nav className="d-flex justify-content-center">
            <ul className="pagination">
                {arr.map((page) => {
                    return (
                        <li
                            key={"page_" + page}
                            className={
                                "page-item" + (active === page ? " active" : "")
                            }
                        >
                            <button
                                className="page-link"
                                onClick={() => onPageChange(page)}
                            >
                                {page}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    active: PropTypes.number.isRequired
}
export default Pagination
