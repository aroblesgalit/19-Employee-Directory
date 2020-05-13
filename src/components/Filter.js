import React from "react";

function Sort() {
    return (
        <div className="uk-flex uk-flex-middle">
            <div className="uk-margin-small-right">Filter: </div>
            <select className="uk-select" id="filter">
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
        </div>
    );
}

export default Sort;
