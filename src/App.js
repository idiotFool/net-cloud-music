import React from 'react';
import './App.sass';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import LeftNav from './components/leftNav';
import FooterPlayer from './components/footerPlayer';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from  'react-router-dom';

// 发现栏对应的组件
import Findout from './components/mainContent/findout';

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
          <Router>
            <div className="app_container">
                <div className="content_container">
                    <LeftNav />
                    <div className="main_content">
                        <Switch>
                            <Route exact path="/">
                                <Findout />
                            </Route>
                            <Route path="/findout">
                                <Findout />
                            </Route>
                            <Route path="/mv">
                                <MusicVideo />
                            </Route>
                            <Route path="/mine">
                                <Mine />
                            </Route>
                            <Route path="/friends">
                                <Friends />
                            </Route>
                            <Route path="/account">
                                <Account />
                            </Route>
                            <Route path="/personalFM">
                                <PersonalFM />
                            </Route>
                        </Switch>
                    </div>
                </div>

                <FooterPlayer />
            </div>
          </Router>
    </Provider>
  );
}

export default App;
