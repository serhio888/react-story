import React from "react"
import PropTypes from "prop-types"

const TableHeader = ({ colums, onSort, selectedSort }) => {
    const handleSort = (item) => {
        if (selectedSort.iter === item) {
            onSort({
                ...selectedSort,
                order: selectedSort.order === "asc" ? "desc" : "asc"
            })
        } else {
            onSort({ iter: item, order: "asc" })
        }
    }
    return (
        <thead>
            <tr>
                {Object.keys(colums).map((column, index) => {
                    return (
                        <th
                            key={index}
                            onClick={
                                column.iter
                                    ? () => handleSort(column.iter)
                                    : null
                            }
                            scope="col"
                            role={column.iter ? "button" : null}
                        >
                            {column.name}
                        </th>
                    )
                })}
            </tr>
        </thead>
    )
}
TableHeader.propTypes = {
    colums: PropTypes.object.isRequired,
    selectedSort: PropTypes.object.isRequired,
    onSort: PropTypes.func.isRequired
}
export default TableHeader
