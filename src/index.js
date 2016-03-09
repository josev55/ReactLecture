import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

//COMPONENTS
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

//CONSTS
const API_KEY = 'AIzaSyCojoF3Jy0SdEX2GcIqCTy4I4NyyJqzQ3g';




class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };                       // ES6: ESTO ES IGUAL A this.setState({ videos: videos }) en ES5
    YTSearch({key: API_KEY, term: 'surfboarding'}, videos => this.setState({ videos: videos, selectedVideo: videos[0] }));
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList videos={this.state.videos} onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'));
