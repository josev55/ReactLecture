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
    this.state = { videos: [] };                       // ES6: ESTO ES IGUAL A this.setState({ videos: videos }) en ES5
    YTSearch({key: API_KEY, term: 'surfboarding'}, videos => this.setState({ videos }));
  }

  render() {
    return (
      <div>
        <SearchBar />
      <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'));
