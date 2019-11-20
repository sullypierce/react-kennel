import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
      <div className="card-content">
        <h2>Name: <span className="card-petname">{this.props.Location.address}</span></h2>
        <button type="button" onClick={() => this.props.deleteLocation(this.props.Location.id)}>Discharge</button>
      </div>
  </div>
    );
  }
}

export default LocationCard;