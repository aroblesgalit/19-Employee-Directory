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
// import API from "../utils/API";
import employeesList from "../employees.json";

function EmployeeDirContainer() {
    const [employees, setEmployees] = useState(employeesList);
    const [sortOption, setSortOption] = useState("id");
    const [filterOption, setFilterOption] = useState("all");
    // const [sortedById, setSortedById] = useState([]);
    // const [sortedByName, setSortedByName] = useState([]);
    const [allEmployees] = useState(employeesList);
    const [maleEmployees] = useState(employeesList.filter(employee => employee.gender === "male"));
    const [femaleEmployees] = useState(employeesList.filter(employee => employee.gender === "female"));

    // useEffect(() => {
    //     // Using json file for employees
    //     setFilterOption(filterOption);
    //     setEmployees(employees);
    //     setAllEmployees(allEmployees);
    //     setMaleEmployees(maleEmployees);
    //     setFemaleEmployees(femaleEmployees);
    //     // Making a call to the API to render 10 employees
    //     // API.search()
    //     //     .then(res => {
    //     //         const initEmployees = res.data.results.sort((a, b) => a.id.value > b.id.value ? 1 : -1);
    //     //         setEmployees(initEmployees);
    //     //         // setSortOption("id");
    //     //         setFilterOption("all");
    //     //         setAllEmployees(initEmployees);
    //     //         setMaleEmployees(initEmployees.filter(employee => employee.gender === "male"));
    //     //         setFemaleEmployees(initEmployees.filter(employee => employee.gender === "female"));
    //     //     })
    //     //     .catch(err => console.log(err));
    // }, [allEmployees, employees, femaleEmployees, filterOption, maleEmployees, sortOption]);


    useEffect(() => {
        if (sortOption === "id") {
            // setSortOption("id");
            const sorted = employees.sort((a, b) => a.id > b.id ? 1 : -1);
            // setSortedById(sorted);
            setEmployees(sorted);
        } else if (sortOption === "name") {
            // setSortOption("name");
            const sorted = employees.sort((a, b) => a.name > b.name ? 1 : -1);
            // setSortedByName(sorted);
            setEmployees(sorted);
        }
    }, [employees, sortOption]);

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