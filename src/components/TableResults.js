import React from "react";

function TableResults(props) {
    console.log(props.results);
    return (
        <tbody>
            {props.results.map(employee => (
                <tr>
                    <td><img src={employee.image} alt={employee.name} className="uk-border-circle" /></td>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.gender}</td>
                    <td>{employee.location}</td>
                </tr>
            ))}
        </tbody>
    );
}

export default TableResults;
