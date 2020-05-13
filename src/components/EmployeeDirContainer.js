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
import API from "../utils/API";

class EmployeeDirContainer extends React.Component {
    state = {
        results: [],
        sortOption: "name"
    };

    componentDidMount() {
        for (let i = 0; i < 10; i++) {
            this.searchEmployee();
        }
    };

    searchEmployee = () => {
        API.search()
            .then(res => {
                const newResult = this.state.results.concat(res.data.results[0]);
                this.setState({ results: newResult })
            })
            .catch(err => console.log(err));
    };

    handleInputChange = (event) => {
        this.setState({ 
            sortOption: event.target.value
        });
        if (this.state.sortOption === "name") {
            this.setState({
                results: this.state.results.sort((a, b) => b.name.first - a.name.first ? 1 : -1)
            })
        }
        if (this.state.sortOption === "id") {
            this.setState({
                results: this.state.results.sort((a, b) => a.id.value > b.id.value ? 1 : -1)
            })
        }
    };

    render() {
        return (
            <Container>
                <Navbar>
                    <Logo />
                    <NavbarRight>
                        <Sort
                            sortOption={this.state.sortOption}
                            handleInputChange={this.handleInputChange}
                        />
                        <Filter />
                    </NavbarRight>
                </Navbar>
                <Table>
                    <TableHead />
                    <TableResults results={this.state.results} />
                </Table>
            </Container>
        );
    }
}

export default EmployeeDirContainer;