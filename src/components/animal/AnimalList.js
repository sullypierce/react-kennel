import React, { Component } from 'react'
//import the components we will need
import AnimalCard from './AnimalCard'
import DataManager from '../../modules/DataManager'

class AnimalList extends Component {
    //define what this component needs to render
    state = {
        animals: [],
    }

    deleteAnimal = id => {
        DataManager.delete("animals", id)
            .then(() => {
                DataManager.getAll("animals")
                    .then((newAnimals) => {
                        this.setState({
                            animals: newAnimals
                        })
                    })
            })
    }

    componentDidMount() {
        console.log("ANIMAL LIST: ComponentDidMount");
        //getAll from AnimalManager and hang on to that data; put it in state
        DataManager.getAll("animals")
            .then((animals) => {
                this.setState({
                    animals: animals
                })
            })
    }

    render() {
        console.log("ANIMAL LIST: Render");

        return (
            <div className="container-cards">
                {this.state.animals.map(animal => <AnimalCard key={animal.id} animal={animal} deleteAnimal={this.deleteAnimal}/>)}
            </div>
        )
    }
}

export default AnimalList