import React, { Component} from 'react'
import Newscard from './Newscard'

export default class News extends Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         articles: this.props.articles,
    //     }
    // }
    render() {
        return (
            <div className="container my-3">
                <h2>NewsDog - Top headlines</h2>
                <div className='row my-3'>
                    {this.props.articles.map(e => {
                      return  <div className='col-md-4' key={e.url}>
                        <Newscard title={e.title} imgUrl={e.urlToImage} description={e.description} newsUrl={e.url}/>
                    </div>})}  
                </div>    
            </div>
        )
  }
}
