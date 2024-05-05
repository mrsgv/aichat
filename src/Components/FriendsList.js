import React from 'react';
import { Grid, Typography, List, ListItem, ListItemText } from '@mui/material';

const FriendsList = ({ friends, handleFriendClick }) => {
  return (
    <Grid item xs={3} style={{ backgroundColor: '#000', color: '#fff', height: '100vh' }}>
      <Typography variant="h6" gutterBottom style={{ padding: '10px' }}>
        Friends
      </Typography>
      <List component="nav">
        {friends.map((friend) => (
          <ListItem key={friend.id} button onClick={() => handleFriendClick(friend)}>
            <ListItemText primary={friend.name} />
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};

export default FriendsList;
