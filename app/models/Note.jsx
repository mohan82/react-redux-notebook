import StatePersistence from  './StatePersistence.jsx'
import clone from 'lodash/clone';
import isUndefined from 'lodash/isUndefined';
import  isEmpty from 'lodash/isEmpty';
export const Note = {};

Note.ActionTypes = {
    NEW_NOTE: "newNote",
    UPDATE_NOTE: "updateNote",
    GET_NOTE: "getNote",
    DELETE_NOTE: "deleteNote"
};

Note.Actions = {}

Note.Actions.newNote = (id, lines)=> {
    console.log("Note Action " + lines.length);
    return {
        type: Note.ActionTypes.NEW_NOTE, note: {
            id: id,
            lines: lines
        }
    }
}

Note.Actions.updateNote = (id)=> {
    return {type: Note.ActionTypes.UPDATE_NOTE, id: id};
}
Note.Actions.getNote = (id)=> {
    return {type: Note.ActionTypes.GET_NOTE, id: id}
}
Note.Actions.deleteNote = (id)=> {
    return {type: Note.ActionTypes.DELETE_NOTE, id: id}
}

Note.Reducers = {};

Note.Reducers.getInitialState = function () {
    let persistedState = new StatePersistence().getState();
    if (!isUndefined(persistedState.noteActionReducer) && !isUndefined(persistedState.noteActionReducer.notes)
        && !isEmpty(persistedState.noteActionReducer.notes)
    ) {
        console.log("Persistence is not empty")
        return persistedState.noteActionReducer.notes;
    } else {
        return {
            notes: []
        }
    }
}


Note.Reducers.noteActionReducer = (state = Note.Reducers.getInitialState(), action)=> {
    switch (action.type) {
        case Note.ActionTypes.NEW_NOTE:
            console.log(action.note.lines);
            console.log("Adding new note for given id %s", action.note.id);
            let newNotes = clone(state.notes);
            newNotes[action.note.id] = action.note.lines;
            console.log('successfully created notes...')
            return Object.assign({}, state, {
                notes: newNotes
            });
        default:
            return state;
    }
};

