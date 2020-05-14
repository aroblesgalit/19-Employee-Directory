import React from "react";

function Navbar(props) {
    return (
        <header className="uk-width-expand uk-background-primary uk-light">
            <nav className="uk-navbar-container uk-margin uk-width-expand uk-navbar-transparent uk-margin-remove-bottom" uk-navbar="true">
                {props.children}
            </nav>
        </header>
    );
}

export default Navbar;
