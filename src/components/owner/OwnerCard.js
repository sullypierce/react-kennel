import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
      <div className="card-content">
        <h2>Name: <span className="card-petname">{this.props.Owner.name}</span></h2>
        <p>Breed: {this.props.Owner.phoneNumber}</p>
        <button type="button" onClick={() => this.props.deleteOwner(this.props.Owner.id)}>Discharge</button>
      </div>
  </div>
    );
  }
}

export default OwnerCard;