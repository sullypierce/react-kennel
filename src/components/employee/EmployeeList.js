import React, { Component } from 'react'
//import the components we will need
import EmployeeCard from './EmployeeCard'
import DataManager from '../../modules/DataManager'

class EmployeeList extends Component {
    //define what this component needs to render
    state = {
        Employees: [],
    }
    deleteEmployee = id => {
        DataManager.delete("employees", id)
        .then(() => {
          DataManager.getAll("employees")
          .then((newEmployees) => {
            this.setState({
                Employees: newEmployees
            })
          })
        })
      }

componentDidMount(){
    console.log("Employee LIST: ComponentDidMount");
    //getAll from EmployeeManager and hang on to that data; put it in state
    DataManager.getAll("employees")
    .then((Employees) => {
        this.setState({
            Employees: Employees
        })
    })
}

render(){
    console.log("Employee LIST: Render");

    return(
        <div className="container-cards">
            {this.state.Employees.map(Employee => <EmployeeCard key={Employee.id} Employee={Employee} deleteEmployee={this.deleteEmployee}/>)}
        </div>
    )
}
}

export default EmployeeList