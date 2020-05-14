import React, { useState, useEffect } from "react";
import Container from "./Container";
import Navbar from "./Navbar";
import Logo from "./Logo";
import NavbarRight from "./NavbarRight";
import Sort from "./Sort";
import SortSelect from "./SortSelect";
import Filter from "./Filter";
import Table from "./Table";
import TableHead from "./TableHead";
import TableResults from "./TableResults";
import API from "../utils/API";
// import employees from "../employees.json";

function EmployeeDirContainer() {
    const [employees, setEmployees] = useState([]);
    const [sortOption, setSortOption] = useState("");
    const [filterOption, setFilterOption] = useState("");
    const [allEmployees, setAllEmployees] = useState([]);
    const [maleEmployees, setMaleEmployees] = useState([]);
    const [femaleEmployees, setFemaleEmployees] = useState([]);

    // state = {
    //     results: employees,
    //     sortOption: "id",
    //     filterOption: "all"
    // };

    useEffect(() => {
        API.search()
            .then(res => {
                const initEmployees = res.data.results.sort((a, b) => a.id.value > b.id.value ? 1 : -1);
                setEmployees(initEmployees);
                setSortOption("id");
                setFilterOption("all");
                setAllEmployees(initEmployees);
                setMaleEmployees(initEmployees.filter(employee => employee.gender === "male"));
                setFemaleEmployees(initEmployees.filter(employee => employee.gender === "female"));
            })
            .catch(err => console.log(err));
    }, []);

    // componentDidMount() {
    //     // Run searchEmployee 10x to get 10 random users
    //     // for (let i = 0; i < 10; i++) {
    //     //     this.searchEmployee();
    //     // }
    //     this.setState({
    //         results: employees,
    //         sortOption: "id",
    //         filterOption: "all"
    //     })
    // };

    // Using the API.js to get random users
    // getEmployees = () => {
    //     API.search()
    //         .then(res => {
    //             const newResult = this.state.results.concat(res.data.results[0]);
    //             this.setState({ results: newResult })
    //         })
    //         .catch(err => console.log(err));
    // };

    useEffect(() => {
        console.log(sortOption);
        if (sortOption === "id") {
            // setSortOption("id");
            setEmployees(employees.sort((a, b) => a.id.value > b.id.value ? 1 : -1))
        } else if (sortOption === "name") {
            // setSortOption("name");
            setEmployees(employees.sort((a, b) => a.name.first > b.name.first ? 1 : -1))
        }
    }, [employees, sortOption]);

    // handleSortChange = (event) => {
    //     const sortOption = event.target.value;
    //     this.setState({
    //         sortOption: sortOption
    //     });
    //     if (sortOption === "id") {
    //         this.setState({
    //             results: this.state.results.sort((a, b) => a.id - b.id)
    //         })
    //     } else if (sortOption === "name") {
    //         this.setState({
    //             results: this.state.results.sort((a, b) => a.name > b.name ? 1 : -1)
    //         })
    //     }
    // };

    useEffect(() => {
        if (filterOption === "male") {
            // const maleFilter = employees.filter(employee => employee.gender === "male");
            setEmployees(maleEmployees);
        } else if (filterOption === "female") {
            // const femaleFilter = employees.filter(employee => employee.gender === "female");
            setEmployees(femaleEmployees);
        } else {
            setEmployees(allEmployees);
        }
    }, [maleEmployees, femaleEmployees, employees, filterOption, allEmployees]);

    // handleFilterChange = (event) => {
    //     const filterOption = event.target.value;
    //     this.setState({
    //         filterOption: filterOption
    //     });
    //     if (filterOption === "male") {
    //         const maleFilter = employees.filter(employee => employee.gender === "male");
    //         this.setState({
    //             results: maleFilter
    //         })
    //     } else if (filterOption === "female") {
    //         const femaleFilter = employees.filter(employee => employee.gender === "female");
    //         this.setState({
    //             results: femaleFilter
    //         })
    //     } else if (filterOption === "all") {
    //         this.setState({
    //             results: employees
    //         })
    //     }
    // }


    return (
        <Container>
            <Navbar>
                <Logo />
                <NavbarRight>
                    <Sort>
                        <SortSelect
                            handleSortChange={(e) => setSortOption(e.target.value)}
                            sortOption={sortOption}
                        />
                    </Sort>

                    <Filter
                        filterOption={filterOption}
                        handleFilterChange={(e) => setFilterOption(e.target.value)}
                    />
                </NavbarRight>
            </Navbar>
            <Table>
                <TableHead sortById={() => setSortOption("id")} sortByName={() => setSortOption("name")}/>
                <TableResults results={employees} />
            </Table>
        </Container>
    );
}

export default EmployeeDirContainer;