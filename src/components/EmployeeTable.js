import React, { Component } from "react";
import ColumnHeader from "./ColumnHeader";
import EmployeeRow from "./EmployeeRow";
import API from "../API";

// this class component is for the <table> of employee data
class EmployeeTable extends Component {
    // component state
    state = {
        userList: [{}], // user list
        order: "ascending" // sort order
    }

    // names of columns for column header
    columnNames = [{name: "Image"}, {name: "Name"}, {name: "Phone"}, {name: "Email"}, {name: "DOB"}];

    // component functions
    // handler function for sorting up or down
    handleSort(columnName){
        if (this.state.order === "ascending"){
            this.setState({...this.state, order: "descending"});
        }
        else if (this.state.order === "descending"){
            this.setState({...this.state, order: "ascending"});
        }
    }

    // obtain users from API
    componentDidMount(){
        // call API
        API.generateUser().then( result => {
            // save what gets returned
            let generatedData = result.data;
            // set state with retrieved users
            this.setState({userList: generatedData.results});
            console.log(this.state.userList);
        });
    }

    // render components
    render(){
        return (
            <table>
                <thead>
                    <ColumnHeader columns = {this.columnNames} >
                    </ColumnHeader>
                </thead>
                <EmployeeRow users = {this.state.userList}></EmployeeRow>
            </table>
        );
    }
}

// export component
export default EmployeeTable;