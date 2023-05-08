import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addNotes, setNoteInput, editNote } from '../../redux/actions/noteActions';
import './AddNote.css';

export class AddNote extends React.Component {

    componentDidMount() {
       if (this.props.onEdit) {
           let getNotes = localStorage.getItem("note").split(",");
           this.props.setNoteInput(getNotes[this.props.noteId]);
       }
    }

    onChange = (e) => {
        this.props.setNoteInput(e.target.value);
    }

    onSubmit = (e) => {
        let myNotes = [];
        e.preventDefault();
        this.props.onEdit ? this.props.editNote(this.props.note) : this.props.addNotes(this.props.note);

        if (localStorage.getItem("note") !== null) {
            const getItems = localStorage.getItem("note").split(",");
            localStorage.removeItem('note');
            if (!this.props.onEdit) {
                myNotes = [...getItems, this.props.note];
                localStorage.setItem('note', myNotes);
            } else {
                getItems.splice(this.props.noteId, 1, this.props.note);
                localStorage.setItem('note', getItems);
            }
        } else if (localStorage.getItem("note") === null) {
            localStorage.setItem('note', this.props.note);
        }
        this.props.setNoteInput('');
    }

    render() {
        return (
            <div className="Note">
                <Link to="/">
                    <button className="btn-note">Back to the List</button>
                </Link>
                <form onSubmit={this.onSubmit} className="form-add-note">
                    <h4>Add a New Note</h4>
                    <input 
                        name = "note"
                        className="text-note"
                        value={this.props.note}
                        onChange={this.onChange}
                    />
                    <div>
                        <button className="btn-note">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    note: state.notes.note,
    notes: state.notes.items,
    noteId: state.notes.itemId,
    onEdit: state.notes.onEdit
})

export default connect(mapStateToProps, { addNotes, setNoteInput, editNote })(AddNote);