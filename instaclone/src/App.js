import React, {Component} from 'react';
import './App.css';
import dummyData from './dummy-data';
import PropTypes from 'prop-types';
import Post from '../src/components/PostContainer/Post'

class App extends Component{
  constructor(){
    super();
      this.state = {
      data: []
  }
};
componentDidMount(){
  this.setState({data: dummyData})
}
render(){
  return (
    <div className="container">
      <Post 
        data= {this.state.data}
      />
    </div>
    )
  }
}

export default App;
