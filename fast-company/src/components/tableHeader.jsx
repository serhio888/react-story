import React from "react"
import PropTypes from "prop-types"

const TableHeader = ({ columns, onSort, selectedSort }) => {
    console.log(Object.keys(columns))
    const handleSort = (item) => {
        if (selectedSort.path === item) {
            onSort({
                ...selectedSort,
                order: selectedSort.order === "asc" ? "desc" : "asc"
            })
        } else {
            onSort({ path: item, order: "asc" })
        }
    }
    return (
        <thead>
            <tr>
                {Object.keys(columns).map((column, index) => {
                    return (
                        <th
                            key={column}
                            onClick={
                                columns[column].iter
                                    ? () => handleSort(columns[column].iter)
                                    : null
                            }
                            scope="col"
                            role={columns[column].iter ? "button" : null}
                        >
                            {columns[column].name}
                        </th>
                    )
                })}
            </tr>
        </thead>
    )
}
TableHeader.propTypes = {
    columns: PropTypes.object.isRequired,
    selectedSort: PropTypes.object.isRequired,
    onSort: PropTypes.func.isRequired
}
export default TableHeader
