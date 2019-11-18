import React, { Component } from 'react'
import './Kennel.css'
import AnimalCard from './animal/AnimalCard'
import LocationCard from './LocationCard'
import EmployeeCard from './EmployeeCard'
import OwnerCard from './OwnerCard'

class Kennel extends Component {
    render() {
        return (
            <div>
                <div>
                    <h2>Student Kennels<br />
                        <small>Loving care when you're not there.</small>
                    </h2>
                    <address>
                        Visit Us at the Nashville North Location
                    <br />500 Puppy Way 
                </address>
                <LocationCard />
                </div>
                <div>
                    <AnimalCard />
                    <AnimalCard />
                    <AnimalCard />
                </div>
                <div>
                    <EmployeeCard />
                    <OwnerCard />
                </div>

            </div>
        );
    }
}

export default Kennel