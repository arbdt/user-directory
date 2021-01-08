import React, { useState } from "react";
import ColumnHeader from "./ColumnHeader";
import EmployeeRow from "./EmployeeRow";
import API from "../API";

// this class component is for the <table> of employee data
class EmployeeTable extends Component {
    // component state
    state = {
        users: [{}], // user list
        order: "ascending" // sort order
    }

    // component functions
    handleSort(columnName){
        if (this.state.order === "ascending"){
            this.setState({...this.state, order: "descending"});
        }
        else if (this.state.order === "descending"){
            this.setState({...this.state, order: "ascending"});
        }
    }

    // obtain users
    componentDidMount(){
        API.generateUser().then(function (result) {
            this.setState({users: result});
        });
    }

    // render component
    render(){
        return (
            <table>
                <thead>
                    <tr>
                        <ColumnHeader
                        onClick={() => {this.handleSort}}
                        >
                            {columnName}
                        </ColumnHeader>
                    </tr>
                </thead>
                <tbody>
                    <EmployeeRow users={this.state.users}/>
                </tbody>
            </table>
        )
    }
}

// export component
export default EmployeeTable;