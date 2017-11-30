import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import weatherReducers from './reducers'
import { applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Weather from './components/Weather';
import Countries from './components/Countries';

let store = createStore(weatherReducers,composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Countries}></IndexRoute>
                <Route path="/weather/:country" component={Weather}></Route>
            </Route>
        </Router>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
