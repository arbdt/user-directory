import React from "react";
import ColumnHeader from "./ColumnHeader";
import EmployeeRow from "./EmployeeRow";
import API from "../API";

// this class component is for the <table> of employee data
class EmployeeTable extends Component {
    // component functions
    handleSort(){

    }

    // obtain users
    componentDidMount(){
        API.generateUser().then(function (result) {
            
        });
    }

    // render component
    render(){
        return (
            <table>
                <thead>
                    <tr>
                        <ColumnHeader/>
                    </tr>
                </thead>
                <tbody>
                    <EmployeeRow/>
                </tbody>
            </table>
        )
    }
}

// export component
export default EmployeeTable;