import React from "react";

function Sort(props) {
    return (
        <div className="uk-flex uk-flex-middle">
            <div className="uk-margin-small-right">Sort: </div>
            {props.children}
        </div>
    );
}

export default Sort;
