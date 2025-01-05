import { List, ListSubheader } from '@mui/material';
import React from 'react';

export const SideHeader = ({ subheader, children }) => {
  return (
    <List sx={{ width: '100%', maxWidth: 240 }} component="nav" disablePadding>
      {subheader && <ListSubheader>{subheader}</ListSubheader>}
      {children}
    </List>
  );
};
