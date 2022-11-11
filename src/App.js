import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
export default class App extends Component {
  pageSize = 10;
  render() {
    return (
      <div> 
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<News country="in" pageSize={this.pageSize} category="general"/>} />
            <Route path="/general" element={<News country="in" pageSize={this.pageSize} category="general"/>} />
            <Route path="/science" element={<News country="in" pageSize={this.pageSize} category="science"/>}/>
            <Route path="/technology" element={<News country="in" pageSize={this.pageSize} category="technology"/>}/>
            <Route path="/health" element={<News country="in" pageSize={this.pageSize} category="health"/>}/>
            <Route path="/business" element={<News country="in" pageSize={this.pageSize} category="business"/>}/>
            <Route path="/entertainment" element={<News country="in" pageSize={this.pageSize} category="entertainment"/>}/>
            <Route path="/sports" element={<News country="in" pageSize={this.pageSize} category="sports"/>}/>
          </Routes>
        </Router>
      </div>
    )
  }
}

// business entertainment general health science sports technology