import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box textAlign='center' paddingTop={4}>
    <Typography variant='body2'>
      © {new Date().getFullYear()} Łukasz Szypliński. All Rights Reserved.
    </Typography>
  </Box>
);

export default Footer;
