import React from "react";

function SortSelect(props) {
    return (
        <select
            className="uk-select uk-margin-right"
            id="sort"
            onChange={props.handleSortChange}
            name="sortOption"
            value={props.sortOption}
        >
            <option value="id">ID</option>
            <option value="name">Name</option>
        </select>
    );
}

export default SortSelect;
