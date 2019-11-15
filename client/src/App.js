import React, { Component } from 'react';
import './App.css';

class App extends Component{

  constructor(props) {
    super(props)

    this.state = {
      posts: []
    }

  }

  componentDidMount(){
    fetch('/api/posts')
    .then(response => response.json())
    .then(json => this.setState({posts: json}))
  }

  renderPosts() {
    // var i =1;
  return this.state.posts.map(post => <h1> {post.message} </h1>)
  }

  render() {
    return(
      <div className="App">
        {this.renderPosts()}
      </div>
    );
  }
}

export default App;
