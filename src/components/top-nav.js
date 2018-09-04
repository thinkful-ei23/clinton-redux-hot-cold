import React from 'react';
import {connect} from 'react-redux';
import {restartGame, generateAuralUpdate} from '../actions';

import './top-nav.css';

export class TopNav extends React.Component {
  restartGame() {
    this.props.dispatch(restartGame());
  }

  generateAuralUpdate() {
    this.props.dispatch(generateAuralUpdate());
  }
  
  render() {
    return (
      <nav>
        <ul className="clearfix">
          <li>
            <a 
              href="#what" 
              className="what"
              aria-label="How to play"
            >
              What?
            </a>
          </li>
          <li>
            <a
              href="#header"
              className="new"
              aria-label="Start a new game"
              onClick={() => this.restartGame()}
            >
              + New Game
            </a>
          </li>
          <li>
            <a
              href="#get-status"
              /* the `visuallyhidden` class hides an element 
              while leaving it available to screen reader users  */
              className="visuallyhidden focusable status-link"
              onClick={() => this.generateAuralUpdate()}
            >
              Hear state of game
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default connect()(TopNav);
