import clone from 'lodash/clone'


export const  Note = {};

Note.ActionTypes = {
    NEW_NOTE: "newNote",
    UPDATE_NOTE: "updateNote",
    GET_NOTE:"getNote",
    DELETE_NOTE: "deleteNote"
};

Note.Actions = {}

Note.Actions.newNote= (id)=> {
    return {type: Note.ActionTypes.NEW_NOTE,id:id}
}

Note.Actions.updateNote = (id)=> {
    return {type: Note.ActionTypes.UPDATE_NOTE,id:id};
}
Note.Actions.getNote =(id)=>{
    return {type:Note.ActionTypes.GET_NOTE,id:id}
}
Note.Actions.deleteNote = (id)=>{
    return {type:Note.ActionTypes.DELETE_NOTE,id:id}
}

Note.Reducers = {};

Note.Reducers.getInitialState = function () {
    return {
        notes: []
    }
}

Note._addNote = function () {
    return {
        lines: []
    }
};

Note.Reducers.noteReducer = (state = Note.Reducers.getInitialState(), action)=> {
    switch (action.type) {
        case Note.ActionTypes.NEW_NOTE:
            console.log("Adding new note for given id %s",action.id);
            let newNotes = clone(state.notes);
            newNotes[action.id] = Note._addNote();
            return Object.assign({}, state, {
                notes: newNotes});
        default:
            return state;
    }
};

