import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.sass';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons';
import {faTwitter, faTumblr} from "@fortawesome/free-brands-svg-icons";
import randomQuote from "./RandomQuoteGenerator"
import setColors from "./SetColors"

function App() {

  const [currentQuote, setQuote] = useState(randomQuote());

  const handleClick = () => {
    setColors();
    setQuote(randomQuote());
  }

  useEffect(()=>setColors());

  return (
    <div id="quote-box" className="App container">
      <div id="inner-quote-box">
        <FontAwesomeIcon icon={faQuoteLeft} id="quote-icon" className="icon" />
        <span id="text">{currentQuote.quote}</span>
        <p id="author">- {currentQuote.author}</p>
      </div>
      <div id="lower-menu">
        <a id='tweet-quote' href={`https://twitter.com/intent/tweet?text=${currentQuote.quote}&hashtags=Quotes`} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="social-media-icon" />
        </a>
        <a id='tumblr-icon' href='https://www.tumblr.com/new/text'>
          <FontAwesomeIcon icon={faTumblr} className="social-media-icon" />
        </a>
        <button id="new-quote" className='btn' onClick={handleClick}>New quote</button>
      </div>
    </div>
  );
}

export default App;
