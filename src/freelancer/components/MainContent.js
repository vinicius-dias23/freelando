import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Logo from './logo.png';
// 0 40 80

export default function MainContent() {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Grid container spacing={2} columns={12}>
        <Grid height="auto" size={{ xs: 12, md: 8 }}>
          <Box
            sx={{
              width: '100%',
              height: 400,
              borderRadius: 1,
              bgcolor: 'primary.main',
              '&:hover': {
                bgcolor: 'primary.dark',
              },
            }}
          >
            {/* <img width="100%" height="100%" src={Logo} alt="logo" /> */}
          </Box>
          <Stack spacing={1}>
            <Typography variant="h3" gutterBottom>
              Garçom | Belo Horizonte | Vinícius Dias
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              R$ 15.50/Hr
            </Typography>
            <Typography variant="body1" gutterBottom>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </Typography>
          </Stack>
        </Grid>
        <Grid height="auto" size={{ xs: 12, md: 4 }}>
          <Box
            sx={{
              width: '100%',
              height: 400,
              borderRadius: 1,
              bgcolor: 'primary.main',
              '&:hover': {
                bgcolor: 'primary.dark',
              },
            }}
          >
            {/* <img width="100%" height="100%" src={Logo} alt="logo" /> */}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
