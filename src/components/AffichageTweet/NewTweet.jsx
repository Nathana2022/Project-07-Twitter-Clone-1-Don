import React, {useState} from 'react'

function NewTweetForm({ onTweetSubmit }) {
    const [tweetText, setTweetText] = useState('');
  
    const handleTextChange = (event) => {
      setTweetText(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onTweetSubmit(tweetText);
      setTweetText('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <textarea value={tweetText} onChange={handleTextChange} />
        <button type="submit">Tweet</button>
      </form>
    );
  }
  
  export default NewTweetForm;