import React from 'react'
import { render } from 'react-dom'
import { Router, Route,hashHistory } from 'react-router'
import NoteBookApplication from 'components/NoteBookApplication.jsx';
import {Provider} from 'react-redux';
import {store} from './models/StoreFactory.jsx';


render((
    <Provider store={store}>
    <Router history={hashHistory}>
        <Route path="/note/:pageNumber" component={NoteBookApplication}>
        </Route>
        <Route path="/" component={NoteBookApplication}/>
    </Router>
  </Provider>
), document.getElementById('root'))