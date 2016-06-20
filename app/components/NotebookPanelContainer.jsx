import React from 'react';
import { connect } from 'react-redux'
import NoteBookPanel from './NotebookPanel.jsx';
import {PageNumber} from '../models/PageNumber.jsx'
import {Note} from '../models/Note.jsx';

const mapStateToProps = (state) => {
    return {
        pageNumber: state.pageActionReducer.pageNumber,
        notes:state.noteActionReducer.notes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNotes: (pageNumber,lines) => {
            console.log('dispatching add notes action for lines page %s,lines %s',pageNumber,lines.length);
            dispatch(Note.Actions.newNote(pageNumber,lines))
        },
        increment: () => {
            console.log('dispatching increment action');
            dispatch(PageNumber.Actions.incrementAction())
        },
        decrement:()=>{
            dispatch(PageNumber.Actions.decrementAction())
        }

    }
}

export default  connect(
    mapStateToProps,
    mapDispatchToProps
)(NoteBookPanel)
