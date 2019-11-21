import React, { Component } from 'react';
import DataManager from '../../modules/DataManager';
import './LocationDetail.css'

class LocationDetail extends Component {

  state = {
      Address: "",
      loadingStatus: true
  }

  componentDidMount(){
    console.log("LocationDetail: ComponentDidMount");
    //get(id) from LocationManager and hang on to the data; put it into state
    DataManager.get("locations", this.props.locationId)
    .then((location) => {
      this.setState({
        name: location.address,
        loadingStatus: false
      });
    });
  }

  handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    this.setState({loadingStatus: true})
    DataManager.delete("locations", this.props.locationId)
    .then(() => this.props.history.push("/locations"))
}

  render() {
    return (
      <div className="card">
        <div className="card-content">
            <h3>Address: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
        </div>
        <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Shut Down</button>
      </div>
    );
  }
}

export default LocationDetail;