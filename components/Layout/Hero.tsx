import Image from 'next/image';
import { Box, Typography } from '@mui/material';

const Hero = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'row',
      marginBottom: 10
    }}
  >
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: '60%'
      }}
    >
      <Typography gutterBottom fontWeight={900} marginBottom={2}>
        Hi, my name is
      </Typography>

      <Typography variant="h3" component="h1" gutterBottom fontWeight={900} lineHeight={1} mb={4}>
        Lukasz Szyplinski.
      </Typography>

      <Typography variant="body1" component="p" gutterBottom>
        I'm a Software Engineer from Warsaw, Poland.
      </Typography>
    </Box>
    <Box
      sx={{
        maxWidth: '40%',
        minHeight: '260px',
        width: '100%',
        position: 'relative',
        borderRadius: '50%',
        overflow: 'hidden'
      }}
    >
      <Image src="/AvatarMaker-3.svg" layout='fill' objectFit='contain' />
    </Box>
  </Box>
);

export default Hero;
