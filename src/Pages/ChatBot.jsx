import React, { useState, useEffect, useRef } from 'react';
import './Styles/ChatBot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm AuraBot. How can I assist you with Alex's progress today?", sender: 'ai' }
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { id: Date.now(), text: input, sender: 'user' };
    setMessages([...messages, userMsg]);
    setInput('');

    // Simulate AI Response
    setTimeout(() => {
      const aiMsg = { 
        id: Date.now() + 1, 
        text: "I'm analyzing that data now. Based on recent screenings, Alex is showing positive trends in gaze duration.", 
        sender: 'ai' 
      };
      setMessages(prev => [...prev, aiMsg]);
    }, 1000);
  };

  return (
    <div className="chatbot-wrapper">
      <nav className="home-nav">
        <div className="brand-group">
          <div className="brand-logo-small">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3366FF" strokeWidth="2.5">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-12.7 8.19 8.19 0 0 1 3.4 1.2L21 3z"></path>
            </svg>
          </div>
          <span className="brand-text">AuraBot <span className="ai-badge">AI</span></span>
        </div>
      </nav>

      <main className="chat-container">
        <div className="message-list">
          {messages.map((msg) => (
            <div key={msg.id} className={`chat-bubble-wrapper ${msg.sender}`}>
              <div className="chat-bubble">
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        <div className="chat-footer">
          <div className="quick-suggestions">
            <button onClick={() => setInput("What is the latest score?")}>Latest Score</button>
            <button onClick={() => setInput("Next therapy session?")}>Next Session</button>
          </div>
          {/* Replace the existing form in Chatbot.jsx with this */}
<form className="chat-input-form" onSubmit={handleSend}>
  <input 
    type="text" 
    placeholder="Ask AuraBot anything..." 
    value={input}
    onChange={(e) => setInput(e.target.value)}
  />
  {/* Replace your send-btn block with this version */}
<button type="submit" className="send-btn" aria-label="Send Message">
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9L22 2" 
      stroke="white" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      fill="white"
    />
  </svg>
</button>
</form>
        </div>
      </main>
    </div>
  );
};

export default Chatbot;