'use client';
import { Box, Drawer, IconButton } from '@mui/material';
import React from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { makeVar, useReactiveVar } from '@apollo/client';

export const sideOpen = makeVar(true);

export const SideCollapseIcon = ({ children }) => {
  const drawerOpen = useReactiveVar(sideOpen);

  const handleToggle = () => {
    sideOpen(!drawerOpen);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerOpen ? 240 : 60,
        transition: 'width 0.3s ease',
        '& .MuiDrawer-paper': {
          width: drawerOpen ? 240 : 60,
          boxSizing: 'border-box',
          transition: 'width 0.3s ease',
        },
      }}
    >
      <Box display="flex" alignItems="center" position="relative" sx={{ height: 50, overflowY: 'hidden' }}>
        <IconButton onClick={handleToggle} sx={{ position: 'absolute', right: 0 }}>
          {drawerOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </Box>
      <Box sx={{ overflowY: 'auto', overflowX: 'hidden', height: 'calc(100% - 50px)' }}>
        {children}
      </Box>
    </Drawer>
  );
};
