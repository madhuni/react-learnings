import React, {Component} from 'react';

import './AddPerson.css';

class AddPerson extends Component {
    state =  {
        name: '',
        age: ''
    };

    onNameChangeHandler = (event) => {
        const newName = event.target.value;
        this.setState({
            ...this.state,
            name: newName
        });
    };

    onAgeChangeHandler = (event) => {
        const newAge = event.target.value;
        this.setState({
            ...this.state,
            age: newAge
        });
    };

    render() {
        return (
            <div className="AddPerson">
                <input type='text' placeholder='enter your name..' onChange={this.onNameChangeHandler}/>
                <input type='text' placeholder='enter your age..' onChange={this.onAgeChangeHandler}/>
                <button onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
            </div>
        );
    }
}

export default AddPerson;