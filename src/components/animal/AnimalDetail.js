import React, { Component } from 'react';
import DataManager from '../../modules/DataManager';
import './AnimalDetail.css'

class AnimalDetail extends Component {

    state = {
        name: "",
        breed: "",
        employeeName: "",
        ownerName: "",
        loadingStatus: true
    }

    componentDidMount() {
        console.log("AnimalDetail: ComponentDidMount");
        //get(id) from AnimalManager and hang on to the data; put it into state
        DataManager.get("animals", `${this.props.animalId}?_expand=employee`)
            .then((animal) => {
                this.setState({
                    name: animal.name,
                    breed: animal.breed,
                    employeeName: animal.employee.name,
                    loadingStatus: false
                });
                fetch(`http://localhost:5002/ownership?animalId=${this.props.animalId}&_expand=owner`).then(result => result.json()).then((ownerData) => {
                    this.setState({
                        ownerName: ownerData[0].owner.name
                    })

                })
            })
    }

    handleDelete = () => {
        //invoke the delete function in AnimalManger and re-direct to the animal list.
        this.setState({ loadingStatus: true })
        DataManager.delete("animals", this.props.animalId)
            .then(() => this.props.history.push("/animals"))
    }

    render() {
        console.log(this.props)
        return (
            <div className="card">
                <div className="card-content">
                    <picture>
                        <img src={require('./dog.svg')} alt="My Dog" />
                    </picture>
                    <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
                    <p>Breed: {this.state.breed}</p>
                    <p>Employee Caretaker: {this.state.employeeName}</p>
                    <p>Owner: {this.state.ownerName}</p>
                    <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Discharge</button>
                </div>
            </div>
        );
    }
}

export default AnimalDetail;