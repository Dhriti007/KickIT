import React, { useState, useRef, useEffect } from 'react';
import io from 'socket.io-client';
const socket = io('http://127.0.0.1:8000/',{
  withCredentials: true,
  transports: ["websocket", "polling"]
});
const Chatbot = () => {

  const [messages, setMessages] = useState("")
  const [inputMessage, setInputMessage] = useState('');
  const [token,setToken]=useState('')
  const chatHistoryRef = useRef(null);

  // Initialize socket connection
  let x=0

  useEffect(()=>{
    const options = {
      method: "GET",
      credentials: 'include',
      
    
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        
      }
      
    };
      
    fetch(`http://127.0.0.1:8000/KickIt/chatApp`, options)
      .then((res) =>res.json())
      .then((data) =>{
        if(x==0){
        socket.emit('hi',data.token)
        x++
        }
       
        
      })
      .catch((error) => console.log('here we go'));
   },[])

 useEffect(()=>{
  socket.on('connect',()=>{    
  })

 },[])



  // Auto-scroll to bottom when new messages arrive
 

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      // Add user message to chat history
      setMessages(prev => [...prev, { text: inputMessage, sender: 'user' }]);
      
      // Emit message to server
      if (socket) {
        socket.emit('message', inputMessage);
      }

      // Simulate a bot response after a short delay
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: `You said: ${inputMessage}`, 
          sender: 'bot' 
        }]);
      }, 1000);
      
      // Clear input
      setInputMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="h-screen w-full max-w-2xl mx-auto p-4 flex flex-col">
      <div className="flex-1 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
        <div 
          ref={chatHistoryRef}
          className="flex-1 p-4 overflow-y-auto"
        >
          
        </div>
        
        <div className="border-t p-4 bg-white">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSendMessage}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;