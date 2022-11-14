import React, {Component} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import Newscard from './Newscard'
import Spinner from './Spinner';

export default class News extends Component {
    static defaultProps={
        country: "in",
        pageSize: 6,
        category: "general",
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
            totalResults: 0,
            loading: false 
        };
        document.title= this.props.heading+ (this.props.heading===''?"NewsDog - Hompage":"- NewsDog")
        
    }
    updateNews = async (page)=>{
        this.props.progress(0);
        this.setState({loading:true});
        let url = `https://newsapi.org/v2/top-headlines?apiKey=e03e9a9714a04551bcfd8c30d11db515&category=${this.props.category}&country=${this.props.country}&pageSize=${this.props.pageSize}&page=${page}`;
        this.props.progress(20);
        let data = await fetch(url);
        this.props.progress(50);
        let parsedData = await data.json();
        this.props.progress(70);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
        this.props.progress(100);
    }
    componentDidMount(){
        this.updateNews(this.state.pageNumber);  // baad main check krna
    }
    fetchMoreData =async ()=>{
        this.setState({loading:true});
        let page = this.state.pageNumber+1; 
        const url = `https://newsapi.org/v2/top-headlines?apiKey=e03e9a9714a04551bcfd8c30d11db515&category=${this.props.category}&country=${this.props.country}&pageSize=${this.props.pageSize}&page=${page}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false,
            pageNumber: page
        })
    }
    render() {
        return (
           
            <>
                <div className="d-flex justify-content-center" style={{marginTop: '70px'}}><h2>NewsDog - Top{this.props.heading} headlines</h2></div>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner/>}
                    style={{ overflow: 'hidden'}}>
                        <div className='container'>
                        <div className='row my-3'>

                            {this.state.articles.map(e => {
                            return  <div className='col-md-4' key={e.url}>
                                <Newscard title={e.title} imgUrl={(e.urlToImage)?e.urlToImage:'https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg'} description={e.description} newsUrl={e.url} author={e.author} source={e.source.name} date={e.publishedAt}/>
                            </div>})} 
                        </div> 
                        </div>
                    </InfiniteScroll> 
                   
            </>
        )
  }
}
