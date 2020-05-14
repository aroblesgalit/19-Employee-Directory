import React from "react";
import "./Table.css";

function TableHead(props) {
    return (
        <thead>
            <tr>
                <th className="uk-table-shrink">Picture</th>
                <th><div class="sort-btn" onClick={props.sortById}>ID<span uk-icon="icon:  triangle-down"></span></div></th>
                <th className="uk-table-expand"><div class="sort-btn" onClick={props.sortByName}>Name<span uk-icon="icon:  triangle-down"></span></div></th>
                <th>Email</th>
                <th>Phone</th>
                <th>Gender</th>
                <th>Location</th>
            </tr>
        </thead>
    );
}

export default TableHead;
