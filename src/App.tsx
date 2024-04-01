import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.sass';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons';
import {faTwitter, faTumblr} from "@fortawesome/free-brands-svg-icons";


function App() {
  return (
    <div className="App container">
      <div id="quote-div">
        <FontAwesomeIcon icon={faQuoteLeft} id="quote-icon" className="icon" />
        <h4 id="quote">Happiness is not something readymade. It comes from your own actions.</h4>
      </div>
      <p id="quoter" className="border">- Aristod</p>
      <div id="lower-menu">
        <a>
          <FontAwesomeIcon icon={faTwitter} className="social-media-icon border" />
        </a>
        <a>
          <FontAwesomeIcon icon={faTumblr} className="social-media-icon border" />
        </a>
        <button id="btn">New quote</button>
      </div>
    </div>
  );
}

export default App;
