'use client';
import React, { useState } from 'react';
import { Collapse, Box, List, ListItemText, ListItemButton, ListItemIcon, ListSubheader } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const SideItem = ({ label, icon, children, subheader }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {/* Menu item */}
      <List sx={{ width: '100%', maxWidth: 240 }} component="nav" disablePadding>
        {/* Optional subheader */}
        {subheader && <ListSubheader>{subheader}</ListSubheader>}

        {/* Menu item */}
        <ListItemButton onClick={toggleExpand}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={label} />
          {isExpanded ? <ExpandMoreIcon /> : <KeyboardArrowRightIcon />}
        </ListItemButton>

        {/* Collapsible content */}
        <Collapse in={isExpanded}>
          <Box sx={{ pl: 1, borderLeft: '2px solid #5f43b2' }}>{children}</Box>
        </Collapse>
      </List>
    </>
  );
};
