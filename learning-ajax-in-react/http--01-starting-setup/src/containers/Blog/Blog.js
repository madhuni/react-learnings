import React, { Component } from 'react';
import { Route, NavLink, Switch } from "react-router-dom";

import NewPost from '../NewPost/NewPost';
import './Blog.css';
import Posts from '../Posts/Posts';
import FullPost from '../FullPost/FullPost';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    };

    componentDidMount() {
        console.log(this.props);
    }
 
    render () {
        return (
            <div>
                <header>
                    <ul className='nav-list'>
                        <li><NavLink exact to='/' activeClassName='active'>Home</NavLink></li>
                        <li><NavLink to={{
                            pathname: '/new-post',
                            hash: '#submit', // through this we can move to a particular # on the page
                            search: '?quick-submit=true' // through this we can extract the query params
                        }}>New Post</NavLink></li>
                    </ul>
                </header>
                
                {/* Setting up the routes for the application. This Blog page will be the Home page */}
                <Route path="/" exact component={Posts} /> {/* This will always be checked */}
                <Switch>
                    {/* The Routes defined under the "Switch" component will stop looking for other Routes once they found the exact path */}
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/:postId" exact component={FullPost} />
                </Switch>
            </div>
        );
    }
}

export default Blog;