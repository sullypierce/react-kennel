import React, { Component } from 'react'
//import the components we will need
import LocationCard from './LocationCard'
import DataManager from '../../modules/DataManager'

class LocationList extends Component {
    //define what this component needs to render
    state = {
        Locations: [],
    }

    deleteLocation = id => {
        DataManager.delete("locations", id)
        .then(() => {
          DataManager.getAll("locations")
          .then((newLocations) => {
            this.setState({
                Locations: newLocations
            })
          })
        })
      }

componentDidMount(){
    console.log("Location LIST: ComponentDidMount");
    //getAll from LocationManager and hang on to that data; put it in state
    DataManager.getAll("locations")
    .then((Locations) => {
        this.setState({
            Locations: Locations
        })
    })
}

render(){
    console.log("Location LIST: Render");

    return(
        <div className="container-cards">
            {this.state.Locations.map(Location => <LocationCard key={Location.id} Location={Location} deleteLocation={this.deleteLocation}/>)}
        </div>
    )
}
}

export default LocationList