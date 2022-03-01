import { Avatar, Box, Typography } from '@mui/material';

const Hero = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'row',
      marginTop: 3,
      marginBottom: 5
    }}
  >
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '60%'
      }}
    >
      <Typography gutterBottom fontWeight={900} marginBottom={2}>
        Hi, my name is
      </Typography>

      <Typography variant='h3' component='h1' gutterBottom fontWeight={900} lineHeight={1} marginBottom={4}>
        Lukasz Szyplinski.
      </Typography>

      <Typography variant='body1' component='p' gutterBottom>
        I'm a Software Engineer from Warsaw, Poland.
      </Typography>
    </Box>
    <Avatar src='/avatar/AvatarMaker-3.svg' sx={{ width: '40%', height: '100%' }} />
  </Box>
);

export default Hero;
