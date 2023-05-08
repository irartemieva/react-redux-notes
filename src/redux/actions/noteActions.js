import { ADD_NOTE, EDIT_NOTE, REMOVE_NOTE, SET_NOTE_INPUT } from './actionTypes';

export const addNotes = content => ({
    type: ADD_NOTE,
    payload: content
});

export const editNote = (note, noteId) => ({
    type: EDIT_NOTE,
    payload: {
        id: noteId,
        note
    }
});

export const removeNote = noteId => ({
    type: REMOVE_NOTE,
    payload: noteId
});

export const setNoteInput = note => ({
    type: SET_NOTE_INPUT,
    payload: note
})