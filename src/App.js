import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div> 
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<News country="in" pageSize={6} category="general"/>} />
            <Route path="/science" element={<News country="in" pageSize={6} category="science"/>}/>
            <Route path="/technology" element={<News country="in" pageSize={6} category="technology"/>}/>
            <Route path="/health" element={<News country="in" pageSize={6} category="health"/>}/>
            <Route path="/business" element={<News country="in" pageSize={6} category="business"/>}/>
            <Route path="/entertainment" element={<News country="in" pageSize={6} category="entertainment"/>}/>
            <Route path="/sports" element={<News country="in" pageSize={6} category="sports"/>}/>
          </Routes>
        </Router>
      </div>
    )
  }
}

// business entertainment general health science sports technology