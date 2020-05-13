import React from "react";
import "./Table.css";

function Table(props) {
    return (
        <table className="uk-table uk-table-striped uk-table-hover uk-table-middle uk-table-responsive employee-table">
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
            <tbody>
                <tr>
                    <td><img src="https://randomuser.me/api/portraits/thumb/men/75.jpg" alt="" className="uk-border-circle" /></td>
                    <td>0390511T</td>
                    <td>Brad Gibson</td>
                    <td>brad.gibson@example.com</td>
                    <td>011-962-7516</td>
                    <td>Male</td>
                    <td>kilcoole, waterford</td>
                </tr>
                <tr>
                    <td><img src="https://randomuser.me/api/portraits/thumb/men/75.jpg" alt="" className="uk-border-circle" /></td>
                    <td>0390511T</td>
                    <td>Brad Gibson</td>
                    <td>brad.gibson@example.com</td>
                    <td>011-962-7516</td>
                    <td>Male</td>
                    <td>kilcoole, waterford</td>
                </tr>
                <tr>
                    <td><img src="https://randomuser.me/api/portraits/thumb/men/75.jpg" alt="" className="uk-border-circle" /></td>
                    <td>0390511T</td>
                    <td>Brad Gibson</td>
                    <td>brad.gibson@example.com</td>
                    <td>011-962-7516</td>
                    <td>Male</td>
                    <td>kilcoole, waterford</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Table;
