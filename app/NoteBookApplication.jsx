import React from 'react';
import ReactDOM from "react-dom";
import NotePageContainer from './NotePageContainer.jsx';
import {reducers} from './models/reducers.jsx';
import {Provider} from 'react-redux';
import {createStore} from 'redux'


let store =createStore(reducers);

class NoteBookApplication extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <NotePageContainer/>
            </Provider>
        );
    }

}


ReactDOM.render(<NoteBookApplication/>, document.getElementById('root'))