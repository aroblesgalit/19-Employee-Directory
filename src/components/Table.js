import React from "react";
import "./Table.css";

function Table(props) {
    return (
        <table className="uk-table uk-table-striped uk-table-hover uk-table-middle uk-table-responsive employee-table">
            {props.children}
        </table>
    );
}

export default Table;
