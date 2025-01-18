import { Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { SideItem } from './SideItem';
import HomeIcon from '@mui/icons-material/Home';
import { SideHeader } from './SideHeader';

export const SideBar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: '240px',
        '& .MuiDrawer-paper': {
          width: '240px',
          boxSizing: 'border-box',
        },
      }}
    >
      <Box position="relative" sx={{ height: 50, padding: 2 }}>
        <Image
          alt="logo"
          src="/assets/images/logo.png"
          fill={true}
          placeholder="blur"
          blurDataURL="/assets/images/logo.png"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Box>
      <Box>
        <SideHeader subheader="sdsdsdsd">
          <SideItem label="Profile" icon={<HomeIcon />}>
            <List disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="test" />
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="test" />
              </ListItemButton>
            </List>
          </SideItem>

          <SideItem label="Profile" icon={<HomeIcon />}>
            <List disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="test" />
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="test" />
              </ListItemButton>
            </List>
          </SideItem>

          <SideItem label="Profile" icon={<HomeIcon />}>
            <List disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="test" />
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="test" />
              </ListItemButton>
            </List>
          </SideItem>

          <SideItem label="Profile" icon={<HomeIcon />}>
            <List disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="test" />
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="test" />
              </ListItemButton>
            </List>
          </SideItem>
        </SideHeader>
      </Box>
    </Drawer>
  );
};
