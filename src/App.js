import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddBlock from './containers/AddBlock'
import BlockList from './components/BlockList'
import './App.css';

class App extends Component {

  simpleAction = (val) => {
    this.props.simpleAction(val);
  }
  
  render() {
   return (
    <div className="App">
      <AddBlock></AddBlock>
      <BlockList></BlockList>
    </div>
   );
  }
}


const mapStateToProps = state => ({
  
})
const mapDispatchToProps = dispatch => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(App);