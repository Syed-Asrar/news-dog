import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
export default class App extends Component {
  pageSize = 10;
  state={
    progress: 0
  }
  setProgress=(progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <div> 
        <Router>
          <Navbar/>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            <Route path="/" element={<News heading='' progress={this.setProgress} country="in" pageSize={this.pageSize} category="general"/>} />
            <Route path="/general" element={<News heading=' General' progress={this.setProgress} country="in" pageSize={this.pageSize} category="general"/>} />
            <Route path="/science" element={<News heading=' Science' progress={this.setProgress} country="in" pageSize={this.pageSize} category="science"/>}/>
            <Route path="/technology" element={<News heading=' Technolgy' progress={this.setProgress} country="in" pageSize={this.pageSize} category="technology"/>}/>
            <Route path="/health" element={<News heading=' Health' progress={this.setProgress} country="in" pageSize={this.pageSize} category="health"/>}/>
            <Route path="/business" element={<News heading=' Business' progress={this.setProgress} country="in" pageSize={this.pageSize} category="business"/>}/>
            <Route path="/entertainment" element={<News heading=' Entertainment' progress={this.setProgress} country="in" pageSize={this.pageSize} category="entertainment"/>}/>
            <Route path="/sports" element={<News heading=' Sports' progress={this.setProgress} country="in" pageSize={this.pageSize} category="sports"/>}/>
          </Routes>
        </Router>
      </div>
    )
  }
}
