import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import AddNote from './components/AddNote/AddNote';
import ListOfNotes from './components/ListOfNotes/ListOfNotes';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h4>Notes App</h4>
          </header>
          <Route 
            exact path="/"
            render={props => (
              <React.Fragment>
                <div className="add-class">
                  <Link to="/addNote">
                      <button className="btn-note">Add a new note</button>
                  </Link>
                </div>
                <ListOfNotes />
              </React.Fragment>
            )}
          />
          <Route path="/addNote"
          render={props => (
            <React.Fragment>
              <AddNote />
            </React.Fragment>
          )}
          />
          <Route path="/editNote"
          render={props => (
            <React.Fragment>
              <AddNote />
            </React.Fragment>
          )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
