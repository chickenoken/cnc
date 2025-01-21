import { Box, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { SideItem } from '../common/SideItem';
import HomeIcon from '@mui/icons-material/Home';
import { SideHeader } from '../common/SideHeader';
import { SideCollapseIcon } from '../common/SideCollapseIcon';

export const SideBar = () => {
  return (
    <SideCollapseIcon>
      <SideHeader subheader="test header">
        <SideItem label="Menu parent" icon={<HomeIcon />}>
          <List disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: 35 }}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="menu 1" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon sx={{ minWidth: 35 }}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="menu 2" />
            </ListItemButton>
            
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: 35 }}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="menu 2" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon sx={{ minWidth: 35 }}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="menu 2" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon sx={{ minWidth: 35 }}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="menu 2" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon sx={{ minWidth: 35 }}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="menu 2" />
            </ListItemButton>
          </List>
        </SideItem>
      </SideHeader>

      <SideHeader subheader="test header 2">
        <SideItem label="Menu parent" icon={<HomeIcon />}>
          <List disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: 35 }}>
                <HomeIcon />{' '}
              </ListItemIcon>
              <ListItemText primary="menu 1" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon sx={{ minWidth: 35 }}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="menu 2" />
            </ListItemButton>
            
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: 35 }}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="menu 2" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon sx={{ minWidth: 35 }}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="menu 2" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon sx={{ minWidth: 35 }}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="menu 2" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon sx={{ minWidth: 35 }}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="menu 2" />
            </ListItemButton>
          </List>
        </SideItem>
      </SideHeader>
    </SideCollapseIcon>
  );
};
