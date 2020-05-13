import React from "react";

function NavbarRight(props) {
    return (
        <div className="uk-navbar-right">
            <div className="uk-flex uk-margin-right">
                {props.children}
            </div>
        </div>
    );
}

export default NavbarRight;
