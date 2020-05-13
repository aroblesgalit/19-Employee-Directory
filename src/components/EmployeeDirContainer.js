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
        sortOption: "name",
        filterOption: "all"
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

    handleSortChange = (event) => {
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

    handleFilterChange = (event) => {
        console.log(event.target.value);
        this.setState({
            filterOption: event.target.value
        });
        if (this.state.filterOption === "all") {
            this.setState({
                results: this.state.results
            })
        } else if (this.state.filterOption === "male") {
            const maleFilter = this.state.results.filter(employee => employee.gender === "male");
            this.setState({
                results: maleFilter
            })
        } else if (this.state.filterOption === "female") {
            const femaleFilter = this.state.results.filter(employee => employee.gender === "female");
            this.setState({
                results: femaleFilter
            })
        }
    }

    render() {
        return (
            <Container>
                <Navbar>
                    <Logo />
                    <NavbarRight>
                        <Sort
                            sortOption={this.state.sortOption}
                            handleSortChange={this.handleSortChange}
                        />
                        <Filter 
                            filterOption={this.state.filterOption}
                            handleFilterChange={this.handleFilterChange}
                        />
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