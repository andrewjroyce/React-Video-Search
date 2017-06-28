import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'; //relative path
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';
const API_KEY = 'AIzaSyDydu2tenAL7w0WcXyIoIpAAQrra9NK11c';

// to put something on dom, react DOM to be rendered.  use reactDom library 
// Create new component
// Should produce some HTML
// class not instance of a component , like a factory , so class, not instance, is passed.  
// by putting < /> around class, in render method, it becomes an instance

class App extends Component {
    constructor(props){
    super(props);

    this.state = {videos:[],
    selectedVideo: null
    };
       this.videoSearch('surfboards')

 }
 
videoSearch(term){
    YTSearch({key: API_KEY, term: term},  (videos) => {
        this.setState({
            videos:videos,
            selectedVideo: videos[0]
        });
    });
}

onInputChange(term){
    this.setState({term})
    this.props.onSearchTermChange(term)}

    render(){
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)

        return (
        <div> 
            <SearchBar onSearchTermChange={videoSearch}/> 
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos}/>
        </div>// dont need () around return, but helps
        )
    }
}

ReactDOM.render(<App/>, document.querySelector(".container"));

