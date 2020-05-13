import React from "react";

function Sort(props) {
    return (
        <div className="uk-flex uk-flex-middle">
            <div className="uk-margin-small-right">Sort: </div>
            <select 
                className="uk-select uk-margin-right" 
                id="sort"
                onChange={props.handleInputChange}
                name="sortOption"
                value={props.sortOption}
            >
                <option value="name">Name</option>
                <option value="id">ID</option>
            </select>
        </div>
    );
}

export default Sort;
