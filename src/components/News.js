import React, {Component} from 'react'
import Newscard from './Newscard'

export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            articles: this.props.articles,
            loading: false 
        };
      }
    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=e03e9a9714a04551bcfd8c30d11db515";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles})
    }
    render() {
        return (
            <div className="container my-3">
                <h2>NewsDog - Top headlines</h2>
                <div className='row my-3'>
                    {this.state.articles.map(e => {
                      return  <div className='col-md-4' key={e.url}>
                        <Newscard title={e.title} imgUrl={e.urlToImage} description={e.description} newsUrl={e.url}/>
                    </div>})}  
                </div>    
            </div>
        )
  }
}
