import React from "react";
import Container from "./Container";
import Navbar from "./Navbar";
import Logo from "./Logo";
import NavbarRight from "./NavbarRight";
import Sort from "./Sort";
import Filter from "./Filter";
import Table from "./Table";

class EmployeeDirContainer extends React.Component {

    render() {
        return (
            <Container>
                <Navbar>
                    <Logo />
                    <NavbarRight>
                        <Sort />
                        <Filter />
                    </NavbarRight>
                </Navbar>
                <Table />
            </Container>
        )
    }
}

export default EmployeeDirContainer;