import React from "react"
import PropTypes from "prop-types"

const TableHeader = ({ columns, onSort, selectedSort }) => {
    console.log("selected sort", selectedSort)

    const handleSort = (item) => {
        if (selectedSort.path === item) {
            onSort({
                ...selectedSort,
                order: selectedSort.order === "asc" ? "desc" : "asc",
                arrow:
                    selectedSort.order === "asc" ? (
                        <i className="bi bi-caret-down-fill"></i>
                    ) : (
                        <i className="bi bi-caret-up-fill"></i>
                    )
            })
        } else {
            onSort({
                path: item,
                order: "asc",
                arrow: <i className="bi bi-caret-up-fill"></i>
            })
        }
    }
    return (
        <thead>
            <tr>
                {Object.keys(columns).map((column) => {
                    return (
                        <th
                            key={column}
                            onClick={
                                columns[column].path
                                    ? () => handleSort(columns[column].path)
                                    : null
                            }
                            scope="col"
                            role={columns[column].path ? "button" : null}
                        >
                            {
                                <>
                                    {columns[column].name}
                                    {columns[column].path === selectedSort.path
                                        ? selectedSort.arrow
                                        : null}
                                </>
                            }
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
