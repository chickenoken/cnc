"use client"
import { useReactiveVar } from '@apollo/client';
import { List, ListSubheader } from '@mui/material';
import React from 'react';
import { sideOpen } from './SideCollapseIcon';

export const SideHeader = ({ subheader, children }) => {
  const drawerOpen = useReactiveVar(sideOpen);

  return (
    <List sx={{ width: '100%', maxWidth: 240 }} component="nav" disablePadding>
      {subheader && drawerOpen && 
        <ListSubheader>
          {subheader}
        </ListSubheader>}
      {children}
    </List>
  );
};
