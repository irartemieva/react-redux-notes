import { ADD_NOTE, EDIT_NOTE, REMOVE_NOTE, SET_NOTE_INPUT } from '../actions/actionTypes';

const initialState = {
    items: [],
    itemId: {},
    onDelete: false,
    onEdit: false,
    note: ''
}

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_NOTE:
            return {
                ...state,
                items: [...state.items, action.payload],
                onEdit: false,
                onDelete: false
            };
        case EDIT_NOTE:
            return {
                ...state,
                item: action.payload.note,
                itemId: action.payload.id,
                onEdit: true,
                onDelete: false
            };
        case REMOVE_NOTE:
            return {
                ...state,
                itemId: action.payload,
                onDelete: true,
                onEdit: false,
            }
        case SET_NOTE_INPUT:
            return {
                ...state,
                note: action.payload
            }
        default:
            return state;
    }
}