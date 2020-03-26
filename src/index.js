import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from 'containers/home';
import Page1 from 'containers/page1';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import combineReducers from 'reducers/reducers';
let store = createStore(combineReducers);

if (module.hot) {
    module.hot.accept();
}

render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/page1">Page1</Link></li>
                </ul>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/page1" component={Page1} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);