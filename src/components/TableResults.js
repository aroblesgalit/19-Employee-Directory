import React from "react";

function TableResults(props) {
    console.log(props.results);
    return (
        <tbody>
            {props.results.map(employee => (
                <tr className="uk-text-center uk-text-left@m" key={employee.id}>
                    <td><img src={employee.image} alt={employee.name} className="uk-border-circle" /></td>
                    <td><span className="uk-hidden@m" uk-icon="icon: hashtag; ratio: 0.75"></span> {employee.id}</td>
                    <td><span className="uk-hidden@m" uk-icon="icon: user; ratio: 0.75"></span> {employee.name}</td>
                    <td><span className="uk-hidden@m" uk-icon="icon: mail; ratio: 0.75"></span> {employee.email}</td>
                    <td><span className="uk-hidden@m" uk-icon="icon: receiver; ratio: 0.75"></span> {employee.phone}</td>
                    <td><span className="uk-hidden@m" uk-icon="icon: heart; ratio: 0.75"></span> {employee.gender}</td>
                    <td><span className="uk-hidden@m" uk-icon="icon: location; ratio: 0.75"></span> {employee.location}</td>
                </tr>
            ))}
        </tbody>
    );
}

export default TableResults;
