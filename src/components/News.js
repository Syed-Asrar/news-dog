import React, {Component} from 'react'
import Newscard from './Newscard'

export default class News extends Component {
    static defaultProps={
        country: "in",
        pageSize: 6,
        category: "general"
    }
    // static propTypes={  //still not working???
    //     country: PropTypes.string,
    //     pageSize: PropTypes.number
    // }
    constructor(props) {
        super(props);
        this.state = { 
            articles: [],
            pageNumber: 1,
            loading: false 
        };
        
    }
    updateNews = async (page)=>{
        this.setState({loading:true});
        let url = `https://newsapi.org/v2/top-headlines?apiKey=e03e9a9714a04551bcfd8c30d11db515&category=${this.props.category}&country=${this.props.country}&pageSize=${this.props.pageSize}&page=${page}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }
    componentDidMount(){
        this.updateNews(this.state.pageNumber);  // baad main check krna
    }
    previousClick = async ()=>{
        this.updateNews(this.state.pageNumber-1);
        this.setState({
            pageNumber : this.state.pageNumber-1
        })
        
    }
    nextClick =async ()=>{
        
        if(Math.ceil(this.state.totalResults/this.props.pageSize)<this.state.pageNumber+1){
        }else{
            this.updateNews(this.state.pageNumber+1);
            this.setState({
                pageNumber : (this.state.pageNumber+1)
            })
            
        }
    }
    render() {
        return (
           
            <div className="container my-3">
                 {this.state.loading && <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    </div>}
                <h2>NewsDog - Top headlines</h2>
                <div className='row my-3'>
                    {this.state.articles.map(e => {
                      return  <div className='col-md-4' key={e.url}>
                        <Newscard title={e.title} imgUrl={(e.urlToImage)?e.urlToImage:'https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmV3c3BhcGVyJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&w=1000&q=80'} description={e.description} newsUrl={e.url} author={e.author} source={e.source.name} date={e.publishedAt}/>
                    </div>})} 
                    <div className="d-flex justify-content-between">
                        <button disabled={this.state.pageNumber<=1} type="button" className="btn btn-dark" onClick={this.previousClick}>&larr; Previous</button>
                        <button disabled={Math.ceil(this.state.totalResults/this.props.pageSize)<this.state.pageNumber+1} type="button" className="btn btn-dark" onClick={this.nextClick}>Next &rarr;</button>
                    </div> 
                </div>    
            </div>
        )
  }
}
