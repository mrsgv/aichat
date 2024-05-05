// MessageInput.js
import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/material/styles';

const StyledTextField = styled(TextField)(({ theme, isFocused }) => ({
  '& .MuiInputLabel-root': {
    display: isFocused ? 'none' : 'block', // Hide label when focused
    color: isFocused ? '#fff' : 'rgba(255, 255, 255, 0.7)',
    opacity: isFocused ? 1 : 0.7, // Adjust opacity when focused or not
    paddingLeft: '12px', // Padding for consistency
  },
  '& .MuiOutlinedInput-root': {
    borderRadius: '20px', // Increased border radius
    paddingLeft: '12px', // Increased left padding
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: isFocused ? 'rgba(255, 255, 255, 0.7)' : 'rgba(255, 255, 255, 0.7)', // Adjusted color and opacity
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: isFocused ? 'rgba(255, 255, 255, 0.7)' : 'rgba(255, 255, 255, 0.7)', // Adjusted color and opacity
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#fff', // White border when focused
      opacity: 0.7 // Adjust opacity when focused
    }
  },
  '& .MuiInputBase-root': {
    color: '#fff',
    '&.Mui-focused': {
      color: '#fff'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#fff'
    }
  }
}));

const MessageInput = ({ messageInput, setMessageInput, handleMessageSend }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <StyledTextField
      label={isFocused ? '' : 'Type your message...'} // Conditionally render label based on focus state
      variant="outlined"
      fullWidth
      value={messageInput}
      onChange={(e) => setMessageInput(e.target.value)}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyPress={(event) => {
        if (event.key === 'Enter') {
          handleMessageSend();
        }
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="Send"
              onClick={handleMessageSend}
              edge="end"
              style={{ color: '#fff' }}
            >
              <SendIcon />
            </IconButton>
          </InputAdornment>
        )
      }}
      isFocused={isFocused}
    />
  );
};

export default MessageInput;
