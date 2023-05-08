import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { editNote, removeNote } from '../../redux/actions/noteActions';

import './ListOfNotes.css';
import MarkdownIt from 'markdown-it';
import parse from 'html-react-parser';

export class ListOfNotes extends React.Component {

    editNote = (e) => {
        this.props.editNote('', e.target.value);
    }

    removeNote = (e) => {
        e.preventDefault();
        let getItems = localStorage.getItem("note").split(",");
        getItems = [...getItems.filter((item, i) => i !== parseInt(e.target.value))];

        this.props.removeNote(e.target.value);

        localStorage.removeItem("note");
        if (getItems.length !== 0) {
            localStorage.setItem("note", getItems);
        }
    }

    getMarkdownText() {
        let md = new MarkdownIt();

        let addedNotes = [], list = [];
        if (localStorage.getItem("note") !== null) {
            addedNotes = localStorage.getItem('note').split(",");
        }

        list = addedNotes.map((item, i) => (
            '<li>' + md.renderInline(item) + '</li>' 
        ));

        return list.map((item, index) => (
            <React.Fragment key={index}>
                <div className="list-item">
                    {parse(item)}
                        <div className="list-buttons">
                            <Link to="/editNote">
                                <button className="btn-note" value={index} onClick={this.editNote}>Edit</button>
                            </Link>
                                <button className="btn-close" value={index} onClick={this.removeNote}>x</button>
                        </div>
                </div>
            </React.Fragment>
        ))

    }

    render() {
        
        return (
            <div className="list">
                <ul>{this.getMarkdownText()}</ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    notes: state.notes.items,
    noteId: state.notes.itemId,
    onDelete: state.notes.onDelete
})

export default connect(mapStateToProps, { removeNote, editNote })(ListOfNotes);