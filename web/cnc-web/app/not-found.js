import Link from 'next/link';
import { Container, Typography, Button, Box } from '@mui/material';

export default function NotFound() {
  return (
    <Container
      maxWidth="false"
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '90vh',
        textAlign: 'center',
      }}
    >
      <Typography variant="h1" component="h1" sx={{ fontWeight: 'bold', mb: 2 }} color="primary">
        404
      </Typography>
      <Typography
        variant="h5"
        component="h2"
        sx={{
          fontSize: { xs: '1.25rem', md: '1.75rem' },
          fontWeight: 500,
          color: 'text.secondary',
          mb: 3,
        }}
      >
        Oops! The page you’re looking for doesn’t exist.
      </Typography>
      <Box>
        <Link href="/" passHref>
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            sx={{
              textTransform: 'uppercase',
              borderRadius: 2,
              px: 4,
              py: 1.5,
              fontWeight: 'bold',
            }}
          >
            Return Home
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
