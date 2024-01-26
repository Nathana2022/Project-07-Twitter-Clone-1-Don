import React, {createContext, useState} from 'react'


const UserContext = createContext()
function NewTweetForm({children,fed}) {
const data = {fed}
    const [tweetText, setTweetText] = useState('');
    const [tweetData, setTweetData] = useState(data);
    

  
   
    return (
      <UserContext.Provider value={""}>

      </UserContext.Provider>
    );
  }
  
  export default NewTweetForm;