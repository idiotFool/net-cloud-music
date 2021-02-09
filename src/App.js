import React from 'react';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import LeftNav from './components/leftNav';
import FooterPlayer from './components/footerPlayer';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';

// 发现栏对应的组件
import Findout from './components/mainContent/findout';
import Recommend from './components/mainContent/findout/recommend';
import SongList from './components/mainContent/findout/songList';
import RadioStation from './components/mainContent/findout/radioStation';
import Ranks from './components/mainContent/findout/ranks';
import NewSong from './components/mainContent/findout/newSong';

// Mv栏对应的组件
import MusicVideo from './components/mainContent/mv';

// 我的对应的组件
import Mine from './components/mainContent/mine';

// 朋友对应的组件
import Friends from './components/mainContent/friends';

// 账号对应的组件
import Account from './components/mainContent/account';

//私人FM对应的组件
import PersonalFM from './components/mainContent/personalFM';

const store = createStore(reducers, applyMiddleware(thunk));

function App() {
  return (
      <Provider store={ store }>
          <div className="app_container">
              <Router history={browserHistory}>
                  <Route path="/" component={LeftNav}>
                      <IndexRoute component={Findout} />
                      <Route path="/findout" component={Findout}>
                          <IndexRoute component={Recommend} />
                          <Route path="recommend" component={Recommend} />
                          <Route path="songList" component={SongList} />
                          <Route path="radioStation" component={RadioStation} />
                          <Route path="ranks" component={Ranks} />
                          <Route path="newSong" component={NewSong} />
                      </Route>
                      <Route path="/mv" component={MusicVideo} />
                      <Route path="/mine" component={Mine} />
                      <Route path="/friends" component={Friends} />
                      <Route path="/account" component={Account} />
                      <Route path="/personalFM" component={PersonalFM} />
                  </Route>
              </Router>
              <FooterPlayer />
          </div>
    </Provider>
  );
}

export default App;
