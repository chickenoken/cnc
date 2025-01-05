import { Box, Container } from '@mui/material';
import { SideBar } from '../components/task/SideBar';

export default function TaskLayout({ children }) {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, backgroundColor: 'orange' }}>
        <Container maxWidth={false}>{children}</Container>
      </Box>
    </Box>
  );
}
