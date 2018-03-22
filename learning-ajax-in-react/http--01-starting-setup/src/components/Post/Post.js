import React from 'react';
import { withRouter } from "react-router-dom";

import './Post.css';

const post = (props) => {
    // console.log(props);
    return (
        <article className="Post" onClick={props.clicked}>
            <h1>{props.title.substr(0, 6)}</h1>
            <div className="Info">
                <div className="Author">{props.author}</div>
            </div>
        </article>
    );
};

/** 
 * Using 'withRouter' HOC in order to pass the Routing releated properties into the 'props' of this component 
 * Using this we have made this component 'Route' aware
 * We can use the Route related props in order to navigate here and there
 */
export default withRouter(post);