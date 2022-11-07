import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import test from './test.json'

export default class App extends Component {
  render() {
    return (
      <div> 
        <Navbar/>
        <News articles={[]}/>
      </div>
    )
  }
}

