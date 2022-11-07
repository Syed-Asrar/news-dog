import React, { Component } from 'react'

export default class Newscard extends Component {
  render() {
    return (
        <div className="card" style={{width: '18rem'}}>
        <img src={this.props.imgUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.description}</p>
          <a href={this.props.newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read more..</a>
        </div>
      </div>
    )
  }
}
