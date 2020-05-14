import React from "react";

function TableHead(props) {
    return (
        <thead>
            <tr>
                <th className="uk-table-shrink">Picture</th>
                <th className="uk-table-shrink"><button onClick={props.sortById}>ID</button></th>
                <th className="uk-table-expand"><button onClick={props.sortByName}>Name</button></th>
                <th>Email</th>
                <th>Phone</th>
                <th>Gender</th>
                <th>Location</th>
            </tr>
        </thead>
    );
}

export default TableHead;
