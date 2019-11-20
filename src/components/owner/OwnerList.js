import React, { Component } from 'react'
//import the components we will need
import OwnerCard from './OwnerCard'
import DataManager from '../../modules/DataManager'

class OwnerList extends Component {
    //define what this component needs to render
    state = {
        Owners: [],
    }

componentDidMount(){
    console.log("Owner LIST: ComponentDidMount");
    //getAll from OwnerManager and hang on to that data; put it in state
    DataManager.getAll("owners")
    .then((Owners) => {
        this.setState({
            Owners: Owners
        })
    })
}

deleteOwner = id => {
    DataManager.delete("owners", id)
    .then(() => {
      DataManager.getAll("owners")
      .then((newOwners) => {
        this.setState({
            Owners: newOwners
        })
      })
    })
  }

render(){
    console.log("Owner LIST: Render");

    return(
        <div className="container-cards">
            {this.state.Owners.map(Owner => <OwnerCard key={Owner.id} Owner={Owner} deleteOwner={this.deleteOwner}/>)}
        </div>
    )
}
}

export default OwnerList