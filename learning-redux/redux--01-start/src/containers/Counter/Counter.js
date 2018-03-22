import React, { Component } from 'react';

/**
 * In order to get the updates from Store, we need to subscribe for updates
 * Here in React we don't use the 'original' version of subscribing, instead
 * we use a special component 'connect' provided by 'react-redux' package.
 * 
 * This 'connect' component is a higher order component, not exactly btw,
 * it is a function which when is called, returns a Higher Order Function.
 * 
 * In this function call we can set our configuration. Because in larger apps,
 * we would be having lots of data in our State, lots of Actions will be
 * defined.
 * But for a particular Container component we would need some specific
 * data/reducer/action from the State/Reducers/Actions. So we can share all
 * those config in the function call of 'connect' component.
 */
import { connect } from "react-redux";

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

/* Importing our outsourced action types */
import * as actionTypes from '../../store/actions';

class Counter extends Component {

    /* We no longer need the internal state and the methods
    to deal with the state */

    // state = {
    //     counter: 0
    // }

    // counterChangedHandler = ( action, value ) => {
    //     switch ( action ) {
    //         case 'inc':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
    //             break;
    //         case 'dec':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
    //             break;
    //         case 'add':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
    //             break;
    //         case 'sub':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
    //             break;
    //     }
    // }

    render () {
        return (
            <div>
                {/* Now here we will use the custom 'props' which
            is available to this Component from the Redux Store */}
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add" clicked={this.props.onAdd}  />
                <CounterControl label="Subtract" clicked={this.props.onSubstract}  />
                <hr />
                <button onClick={() => this.props.storeResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storeResults.map((item) => {
                        return (
                            <li key={item.id} onClick={() => this.props.deleteResult(item.id)}>{item.value}</li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

/**
 * Here is the place, where we are going to map the State to the Props.
 * Here we are going to get the required items from the state, which is the 'slice' of our original State we need,
 * for this particular component.
 * This is basically a function which expects the 'State' of the application as
 * argument and return an object with the props we needed.
 */
const mapStateToProps = (state) => {
    return {
        /* Here we are going to define a custom 'props' for this component
        which will be available with the values of Original state coutner
        property */
        /* In case of using Single Reducer */
        // ctr: state.counter, // slice of the state
        // storeResults: state.storeResults

        /* In case of using Multiple Reducers */
        ctr: state.counter.counter,
        storeResults: state.result.storeResults
    }
};

/**
 * Here we will define our actions (dispatch) to our Store.
 * This will be our second configuration.
 */

const mapDispatchToProps = (dispatch) => {
    return {
        /**
         * In the actions, apart from the 'type' of actions,
         * we can also send 'payload' which can be any number of 
         * properties, or an object of bunch of properties.
         */
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAdd: () => dispatch({type: actionTypes.ADD, value: 10}),
        onSubstract: () => dispatch({type: actionTypes.SUBTRACT, value: 5}),
        storeResult: (counter) => dispatch({type: actionTypes.STORE_RESULT, counter: counter}),
        deleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, id: id})
    }
};

/* Through 'connect' we have subscribed to the Store now */
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

/* If we don't want the Slice of our State in the component, we can pass 'null'
as the first argument */
// export default connect(null, mapDispatchToProps)(Counter);

/* If we don't want to dispatch any action from this Component, we can leave
the second argument */
// export default connect(mapStateToProps)(Counter);