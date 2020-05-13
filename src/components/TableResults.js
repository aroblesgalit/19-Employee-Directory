import React from "react";

function TableResults(props) {
    return (
        <tbody>
            {
                props.results.map(employee => (
                    <tr>
                        <td><img src={employee.picture.thumbnail} alt={employee.name.first} className="uk-border-circle" /></td>
                        <td>{employee.id.value}</td>
                        <td>{employee.name.first} {employee.name.last}</td>
                        <td>{employee.email}</td>
                        <td>{employee.phone}</td>
                        <td>{employee.gender}</td>
                        <td>{employee.location.city}, {employee.location.state}</td>
                    </tr>
                ))
            }
        </tbody>
    );
}

export default TableResults;
