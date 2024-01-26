import './App.css';
import gptLogo from "./assets/chatgptLogo.svg";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import homeIcon from "./assets/home.svg";
import savedIcon from "./assets/bookmark.svg";
import rocketIcon from "./assets/rocket.svg";
import sendBtn from "./assets/send.svg"
import Musa from "./assets/Musa.png"
import gptImgLogo from "./assets/chatgptLogo.svg"
import { sendMsgToOpenAi } from './openai';
import { useState } from "react";


function App() {
const[input,setInput]=useState('');
const  [messages,setMessages]=useState([{
           text:"Hi, I am ChatGPT created by Syed Musa Azam  ;-)" ,
            isBot: true,
}]);



const handleSend=async ()=>{
  const text=input;
  setInput("");
  setMessages([
    ...messages,
    {text,isBot:false}
  ])
  const res=await sendMsgToOpenAi(input);
  setMessages([...messages,
    {text,isBot:false},
    {text:res,isBot:true},

  ]);
}

  return (
    <div className="App">
    <div className='sideBar'>
          <div className='upperSide'>
                <div className="upperSideTop">
                <img src={gptLogo} className="logo" alt=""  /><span className="brand">ChatGPT</span>
                </div>
                <button className="midBtn"><img src={addBtn} alt='' className="addBtn" /> New Chat</button>               
                <div className="upperSideBottom">
                  <button className="query"><img src={msgIcon} alt="Query" />What is Programming?</button>
                  <button className="query"><img src={msgIcon} alt="Query" />How to use an API?</button>
                </div>
          </div>
          <div className='lowerSide'>
                <div className="listItems">
                  <img  className="listItemsImg" alt='' src={homeIcon} />Home
                </div>
                <div className="listItems">
                  <img className="listItemsImg" alt='' src={savedIcon} />Saved
                </div>
                <div className="listItems">
                  <img className="listItemsImg" alt='' src={rocketIcon} />Upgrade
                </div>
          </div>
    </div>
    <div className='main'>
          <div className="chats">
              {messages.map((message,i)=>
                          <div key={{i}} className={message.isBot?"chat bot":"chat"}>
                          <img className="chatImg" src={message.isBot?gptImgLogo:Musa} alt="" />
                            <p>
                              {message.text}
                            </p>
              </div>
              )}
          </div>
          <div className="chatFooter">
            <div className="inp">
              <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} name=""  id=""  placeholder="Send a message.." /> 
              <button onClick={handleSend}  className="send"><img src={sendBtn}  /></button>
            </div>
            <p>ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT August 20 Version.</p>
          </div>
    </div>
    
    </div>
  );
}

export default App;



