import React, { useState } from 'react';
import { Grid } from '@mui/material';
import FriendsList from './Components/FriendsList';
import ChatWindow from './Components/ChatWindow';

const ChatApp = () => {
    const [selectedFriend, setSelectedFriend] = useState(null);
    const [messageInput, setMessageInput] = useState('');
    const [messages, setMessages] = useState([]);
  
    const friends = [
      { id: 1, name: 'Friend 1' },
      { id: 2, name: 'Friend 2' },
      { id: 3, name: 'Friend 3' },
      // Add more friends as needed
    ];
  
    const handleFriendClick = (friend) => {
      setSelectedFriend(friend);
      // Simulate loading chat messages for the selected friend
      setMessages([
        { id: 1, sender: friend.name, text: 'Hey! What\'s up?' },
        { id: 2, sender: 'You', text: 'Not much, just chilling.' },
        // Add more messages as needed
      ]);
    };
  
    const handleMessageSend = () => {
      if (messageInput.trim() !== '') {
        setMessages([
          ...messages,
          { id: messages.length + 1, sender: 'You', text: messageInput.trim() }
        ]);
        setMessageInput('');
      }
    };
  
    return (
        <Grid container style={{ backgroundColor: '#000', height: '100vh' }}>
          <FriendsList friends={friends} handleFriendClick={handleFriendClick} />
          <Grid item xs={9}>
            <ChatWindow
              selectedFriend={selectedFriend}
              messages={messages}
              messageInput={messageInput}
              setMessageInput={setMessageInput}
              handleMessageSend={handleMessageSend}
            />
          </Grid>
        </Grid>
    );
  };
  
  export default ChatApp;