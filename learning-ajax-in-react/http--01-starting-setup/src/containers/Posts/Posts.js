import React, { Component } from "react";
import axios from 'axios';
/* Needed if we are routing using the 'Link' as normal route. The Link component is changed to <a> tag in HTML by REACT */
// import { Link } from "react-router-dom";

import Post from '../../components/Post/Post';

class Posts extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false
  };

  componentDidMount() {
    console.log(this.props);
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        const posts = res.data.slice(0, 12);
        const updatedPosts = posts.map((post) => {
          return {
            ...post,
            author: 'Kanishka Madhuni'
          };
        });
        // console.log(res);
        this.setState({
          ...this.state,
          posts: updatedPosts
        });
      })
      .catch((error) => {
        this.setState({
          ...this.state,
          error: true
        });
      });
  }

  onPostSelected = (id) => {
    /* Here we are routing using the JS and using the advantage of 'history' object in props */
    this.props.history.push('/' + id);
  };

  render() {
    let posts = <p style={{ textAlign: 'center' }}>Loading Posts...!!!</p>
    if (this.state.error) {
      posts = <p style={{ textAlign: 'center' }}>Something Went Wrong...!!!</p>
    } else {
      if (this.state.posts.length) {
        posts = this.state.posts.map((post) => {
          return (
            /* If We don't need to convert the Post component to the <a> tag in our HTML, we can still navigate programatically */
            // <Link to={'/' + post.id} key={post.id}>
              <Post title={post.title} author={post.author} clicked={() => this.onPostSelected(post.id)} key={post.id}/>
            // </Link>
          );
        });
      }
    }

    return (
      <section className="Posts">
        {posts}
      </section>
    );
  }
}

export default Posts;