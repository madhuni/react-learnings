import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

import { connect } from "react-redux";
import * as actions from '../store/actions';

class Persons extends Component {
    // state = {
    //     persons: []
    // }

    // personAddedHandler = () => {
    //     const newPerson = {
    //         id: Math.random(), // not really unique but good enough here!
    //         name: 'Max',
    //         age: Math.floor( Math.random() * 40 )
    //     }
    //     this.setState( ( prevState ) => {
    //         return { persons: prevState.persons.concat(newPerson)}
    //     } );
    // }

    // personDeletedHandler = (personId) => {
    //     this.setState( ( prevState ) => {
    //         return { persons: prevState.persons.filter(person => person.id !== personId)}
    //     } );
    // }

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.personAddedHandler} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.personDeletedHandler(person.id)}/>
                ))}
            </div>
        );
    }
}

// Here we mapped the state from Redux to props of this Component
const mapStateToProps = (state) => {
    return {
        persons: state.persons
    };
};

// Here we mapped the Dispatcher function for Reducer to the props of this Component
const mapDispatchToProps = (dispatch) => {
    return {
        personAddedHandler: (name, age) => dispatch({type: actions.ADD_PERSON, personData: {name: name, age: age}}),
        personDeletedHandler: (id) => dispatch({type: actions.DELETE_PERSON, personID: id})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);