import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
      <div className="card-content">
        <h2>Name: {this.props.Employee.name}</h2>
        <button type="button" onClick={() => this.props.deleteEmployee(this.props.Employee.id)}>Discharge</button>
      </div>
  </div>
    );
  }
}

export default EmployeeCard;