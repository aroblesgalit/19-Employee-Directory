import React from "react";

function TableHead() {
    return (
        <thead>
            <tr>
                <th className="uk-table-shrink">Picture</th>
                <th className="uk-table-shrink">ID</th>
                <th className="uk-table-expand">Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Gender</th>
                <th>Location</th>
            </tr>
        </thead>
    );
}

export default TableHead;
