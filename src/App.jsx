import { useEffect, useState } from "react";
import "./App.css";
import quotes from "./data";
import randomizer from "./randomizer";

function App() {
  const [currentQuote, setCurrentQuote] = useState({});
  const [quoteToShare, setQuoteToShare] = useState("");

  const twitterIntentLink = `https://twitter.com/intent/tweet?hashtags=quotes&related=samikalammallah&text=%22${quoteToShare}%22%20-${currentQuote.author}`;
  const randomNumber = randomizer(quotes);

  const handleOnClick = () => {
    const randomResult = quotes[randomNumber];

    setCurrentQuote({
      text: randomResult.text,
      author: randomResult.author,
    });
  };

  useEffect(() => setCurrentQuote(quotes[randomNumber]), []);

  useEffect(
    () => setQuoteToShare(currentQuote.text?.replaceAll(" ", "%20")),
    [currentQuote]
  );

  return (
    <>
      <div id="quote-box">
        <div className="quote-text">
          <h1 id="text">
            <span className="quote-indicator">"</span>
            {currentQuote.text}
            <span className="quote-indicator">"</span>
          </h1>
          <h2 id="author">-{currentQuote.author}</h2>
        </div>

        <div className="quote-btn">
          <a href={twitterIntentLink} target="_blank" id="tweet-quote">
            SHARE
          </a>

          <button id="new-quote" onClick={handleOnClick}>
            New Quote
          </button>
        </div>
      </div>
      <h3 className="footer">
        Create on late night by{" "}
        <a href="https://kalammallah.vercel.app">Sami Kalammallah</a>{" "}
      </h3>
    </>
  );
}

export default App;
