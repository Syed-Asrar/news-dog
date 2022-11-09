import React, {Component} from 'react'
import Newscard from './Newscard'

export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            articles: [],
            page: 1,
            totalResults: 0,
            loading: false 
        };
      }
    async componentDidMount(){
        this.setState({loading:true});
        let url = `https://newsapi.org/v2/top-headlines?apiKey=e03e9a9714a04551bcfd8c30d11db515&country=in&pageSize=9&page=${this.state.page}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }
    previousClick = async ()=>{
        this.setState({
            page : this.state.page-1,
            loading: true
        })
        let url = `https://newsapi.org/v2/top-headlines?apiKey=e03e9a9714a04551bcfd8c30d11db515&country=in&pageSize=9&page=${this.state.page}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            loading: false
        })
    }
    nextClick =async ()=>{
        this.setState({
            loading: true,
            page : this.state.page+1
        })
        let url = `https://newsapi.org/v2/top-headlines?apiKey=e03e9a9714a04551bcfd8c30d11db515&country=in&pageSize=9&page=${this.state.page}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            loading: false
        })

    }
    render() {
        return (
           
            <div className="container my-3">
                 {this.state.loading && <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    </div>}
                <h2>NewsDog - Top headlines</h2>
                <div className='row my-3'>
                    {this.state.articles.map(e => {
                      return  <div className='col-md-4' key={e.url}>
                        <Newscard title={e.title} imgUrl={(e.urlToImage)?e.urlToImage:'https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmV3c3BhcGVyJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&w=1000&q=80'} description={e.description} newsUrl={e.url}/>
                    </div>})} 
                    <div className="d-flex justify-content-between">
                        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.previousClick}>&larr; Previous</button>
                        <button disabled={Math.ceil(this.state.totalResults/9)<this.state.page} type="button" className="btn btn-dark" onClick={this.nextClick}>Next &rarr;</button>
                    </div> 
                </div>    
            </div>
        )
  }
}
