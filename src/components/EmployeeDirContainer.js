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
// import API from "../utils/API";
import employees from "../employees.json";

class EmployeeDirContainer extends React.Component {
    state = {
        results: employees,
        sortOption: "id",
        filterOption: "all"
    };

    componentDidMount() {
        // for (let i = 0; i < 10; i++) {
        //     this.searchEmployee();
        // }
        this.setState({
            results: employees,
            sortOption: "id",
            filterOption: "all"
        })
    };

    // searchEmployee = () => {
    //     API.search()
    //         .then(res => {
    //             const newResult = this.state.results.concat(res.data.results[0]);
    //             this.setState({ results: newResult })
    //         })
    //         .catch(err => console.log(err));
    // };

    handleSortChange = (event) => {
        const sortOption = event.target.value;
        this.setState({ 
            sortOption: sortOption
        });
        if (sortOption === "name") {
            this.setState({
                results: this.state.results.sort((a, b) => a.name > b.name ? 1 : -1)
            })
        }
        if (sortOption === "id") {
            this.setState({
                results: this.state.results.sort((a, b) => a.id > b.id ? 1 : -1)
            })
        }
    };

    handleFilterChange = (event) => {
        const filterOption = event.target.value;
        this.setState({
            filterOption: filterOption
        });
        if (filterOption === "all") {
            this.setState({
                results: employees
            })
            return;
        } else if (filterOption === "male") {
            const maleFilter = employees.filter(employee => employee.gender === "male");
            this.setState({
                results: maleFilter
            })
            return;
        } else if (filterOption === "female") {
            const femaleFilter = employees.filter(employee => employee.gender === "female");
            this.setState({
                results: femaleFilter
            })
            return;
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