/* We will import the actions here */
import * as actions from './actions';
/* Adding Reducer for the application */
var initializeState = {
  persons: []
};

const reducer = (state = initializeState, action) => {
  switch (action.type) {
    case actions.ADD_PERSON:
      const newPerson = {
        id: Math.random(), // not really unique but good enough here!
        name: action.personData.name,
        age: action.personData.age
      }
      return ({
        ...state,
        persons: state.persons.concat(newPerson)
      });
    case actions.DELETE_PERSON:
      return {
        ...state,
        persons: state.persons.filter((person) => {
          return person.id !== action.personID
        })
      };
    default:
      // console.log('Inside default function');
      // console.log(actions);
      return state;
  }
  return state;
};

export default reducer;