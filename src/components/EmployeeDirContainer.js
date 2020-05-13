import React from "react";
import Container from "./Container";
import Navbar from "./Navbar";
import Logo from "./Logo";
import NavbarRight from "./NavbarRight";
import Sort from "./Sort";
import Filter from "./Filter";
import Table from "./Table";
import TableHead from "./TableHead";
import TableResults from "./TableResults";

class EmployeeDirContainer extends React.Component {
    state = {
        results: []
    }

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
                <Table>
                    <TableHead />
                    <TableResults results={this.state.results} />
                </Table>
            </Container>
        )
    }
}

export default EmployeeDirContainer;