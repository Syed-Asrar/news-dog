import React, { Component } from 'react'
export default class Newscard extends Component {
  render() {
    return (
        <div className="card">
        <img src={this.props.imgUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.description}</p>
          <a href={this.props.newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read more..</a>
          <div className="d-flex justify-content-between my-3">
            <p className="card-text"><small className="text-muted">Author: {this.props.author?this.props.author:"NA"}</small></p>
            <p className="card-text"><small className="text-muted">Published on: {this.props.date?(new Date(this.props.date).toLocaleDateString()):"NA"}</small></p>
          </div>
        </div>
      </div>
    )
  }
}
