import './App.css';
import React, { Component } from 'react'
import tableData from './user_data.json'


class App extends Component {

  constructor(props){
    super(props)
    this.state = tableData
  }

  render() {
    return(


      
        <h1>hi friends</h1>
      


    )
  }


}

export default App;
