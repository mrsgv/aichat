// ChatWindow.js
import React, { useRef, useEffect } from 'react';
import { Paper, Typography } from '@mui/material';
import MessageInput from './MessageInput';

const ChatWindow = ({ selectedFriend, messages, messageInput, setMessageInput, handleMessageSend }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <Paper elevation={3} style={{ padding: '0px 100px 0px 100px', height: '100vh', overflowY: 'auto', overflowX: 'hidden', maxWidth: '100%', display: 'flex', flexDirection: 'column' }}>
      {selectedFriend ? (
        <div style={{ flexGrow: 1, maxHeight: '85vh', overflowY: 'auto', paddingTop: '20px' }}>
          <Typography variant="h6" gutterBottom>
            Chat with {selectedFriend.name}
          </Typography>
          {/* Display messages */}
          <div style={{ maxHeight: '100%', overflowY: 'auto' }}>
            {messages.map((message) => (
              <div key={message.id} style={{ marginBottom: '10px' }}>
                <Typography variant="body1" style={{ fontWeight: message.sender === 'You' ? 'bold' : 'normal' }}>
                  {message.sender}: {message.text}
                </Typography>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>
      ) : (
        <Typography variant="body1">
          Select a friend to start chatting
        </Typography>
      )}
      {/* Message input */}
      <MessageInput
        messageInput={messageInput}
        setMessageInput={setMessageInput}
        handleMessageSend={handleMessageSend}
      />
    </Paper>
  );
};

export default ChatWindow;
