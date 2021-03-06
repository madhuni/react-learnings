import React, { Component } from 'react';
import axios from "axios";

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null,
    };

    componentDidMount() {
        console.log(this.props);

        const postId = this.props.match.params.postId;

        if (postId) { // checking if the id is a valid ID and not NULL
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== postId)) {
                axios.get('https://jsonplaceholder.typicode.com/posts/' + postId)
                    .then(res => {
                        console.log(res);
                        this.setState({
                            ...this.state,
                            loadedPost: res.data
                        });
                    });
            }
        }
    }

    onDeletePostHandler = () => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/' + this.props.postId)
            .then(res => {
                console.log(res);
            });
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if (this.props.postId) {
            post = <p style={{textAlign: 'center'}}>Loading...!</p>;
        }
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.onDeletePostHandler}>Delete</button>
                    </div>
                </div>
    
            );
        }
        return post;
    }
}

export default FullPost;