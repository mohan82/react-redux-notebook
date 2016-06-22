import  React from 'react';
import  NoteContainer from './NoteContainer.jsx';
export  default class NotePage extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <NoteContainer  updatePage ={this.props.updatePage}
                                nextPage={this.props.nextPage}/>
            </div>
        );
    }
}

