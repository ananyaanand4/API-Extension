import React, { useState } from 'react';
import './App.css';

function App() {
  const [displayChatGPTInfo, setDisplayChatGPTInfo] = useState(true);

  const handleButtonClick = () => {
    setDisplayChatGPTInfo(prevState => !prevState);
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>All-In-One</h1>
      </header>

      <div className="content">
      {displayChatGPTInfo ? (
          <>
        <h2>Chat GPT API Ins and Outs:</h2>
        <p>For more information about the API, check the <a href="https://platform.openai.com/docs/api-reference">API Reference</a>.</p>
        <p> This documentation contains more information about requesting using the api key. We can also find more about specific functions for text translation or image manipulation, etc. </p>
        <h2>Common Issues and Conversations:</h2>
        <span className="highlight"> <p>Some of the most common issues and conversations as seen in these Reddit posts:</p> </span>
        <p>
          <a href="https://www.reddit.com/r/ChatGPTPro/comments/14os83m/how_do_you_use_chatgpt_api_is_it_comparable_to/">How do you use ChatGPT API / is it comparable to GPT-4?</a>
        </p>
        <p> This reddit post contains conversations between the devs that have used ChatGPT API before and tips for first-time users. </p>
        <p>
          <a href="https://www.reddit.com/r/ChatGPT/comments/13lsbm3/chat_gpt_api_billing_issues/">ChatGPT Billing Issues</a>
        </p>
        <p> This reddit post contains information regarding some billing issues that users have faced with ChatGPT. This is to give you a heads-up! </p>

        <h2>Pricing Plans:</h2>
        <p>
        <span className="highlight"> Model: </span> gpt-4-0125-preview <br />
        <span className="highlight"> Input: </span> $0.01 / 1K token <br />
        <span className="highlight"> Output: </span> $0.03 / 1K tokens
        </p>
        <p>
        <span className="highlight"> Model: </span> gpt-4 <br />
        <span className="highlight"> Input: </span> $0.03 / 1K token <br />
        <span className="highlight"> Output: </span> $0.06 / 1K tokens
        </p>
        <p>
        <span className="highlight"> Model: </span> gpt-3.5-turbo-0125 <br />
        <span className="highlight"> Input: </span> $0.0005 / 1K token <br />
        <span className="highlight"> Output: </span> $0.0015 / 1K tokens
        </p>

        <h2> Got an error? Check out this link for the most common error codes and what they mean. </h2>
        <p> <a href = "https://platform.openai.com/docs/guides/error-codes/api-errors"> Error-Codes</a> </p>

        <h2> Need an easier way to debug or communicate with other devs? </h2>
        <p> <a href = "https://community.openai.com/c/api/7"> "Forum Page" </a></p>
        <p> This forum page has a list of different errors that prior users have run into or even just tips for users. </p>
        </>
        ) : (
          <>
            <h2>Spotify API Ins and Outs:</h2>
            <p>For more information about the API, check the <a href="https://developer.spotify.com/documentation/web-api">API Reference</a>.</p>
            <h2>Common Issues and Conversations:</h2>
            <span className="highlight"> <p>Some of the most common issues and conversations as seen in these Reddit posts:</p> </span>
            <p>
              <a href="https://www.reddit.com/r/truespotify/comments/13kaeoi/banned_from_spotify_api/">Spotify API Ban</a>
            </p>
            <p> This reddit post contains more information about Spotify API bans. If you run into this issue, then this can be beneficial for you. </p>
            <h2>Pricing Plans:</h2>
            <p> <span className="highlight"> Basic: </span> Free 1000 requests per hour</p>
            <p> <span className="highlight"> Pro: </span> $10/month 5 requests per sec </p>
            <h2> Got an error? Check out this link for the most common error codes and what they mean. </h2>
            <p> <a href = "https://developer.spotify.com/documentation/web-api/concepts/api-calls"> Error-Codes</a> </p>
            <h2> Need an easier way to debug or communicate with other devs? </h2>
            <p> <a href = "https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer"> "Forum Page" </a></p>
            <p> This forum page has a list of different errors that prior users have run into or even just tips for users. </p>
          </>
        )}
        {/* <button onClick={handleButtonClick}>Switch</button> */}
      </div>
    </div>
  );
}

export default App;
