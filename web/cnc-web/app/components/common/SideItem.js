'use client';
import React, { useState, useEffect, useCallback, memo } from 'react';
import { Collapse, Box, List, ListItemText, ListItemButton, ListItemIcon } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useReactiveVar } from '@apollo/client';
import { sideOpen } from './SideCollapseIcon';

export const SideItem = memo(({ label, icon, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const drawerOpen = useReactiveVar(sideOpen);

  const toggleExpand = useCallback(() => {
    setIsExpanded(prev => !prev);
  }, []);

  useEffect(() => {
    if (!drawerOpen) {
      setIsExpanded(false);
    }
  }, [drawerOpen]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(!drawerOpen && true);
  }, [drawerOpen]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(!drawerOpen && false);
  }, [drawerOpen]);

  return (
    <List 
      sx={{ width: '100%', maxWidth: 240 }} 
      component="nav" 
      disablePadding
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Menu item */}
      <ListItemButton onClick={toggleExpand}>
        <ListItemIcon sx={{ minWidth: 35 }}>{icon}</ListItemIcon>
        <ListItemText primary={label} sx={{ whiteSpace: 'nowrap', overflow: 'hidden' }} />
        {drawerOpen && isExpanded ? <ExpandMoreIcon /> : <KeyboardArrowRightIcon />}
      </ListItemButton>

      {/* Collapsible content */}
      <Collapse in={isExpanded || isHovered}>
        <Box sx={{ ml: 1, borderLeft: '3px solid #1111111A' }}>
          {children}
        </Box>
      </Collapse>
    </List>
  );
});
