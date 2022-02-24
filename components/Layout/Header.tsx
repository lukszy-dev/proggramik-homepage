import Link from 'next/link';
import Image from 'next/image';
import { Box, Container, Stack, Link as MuiLink } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Header = () => (
  <Box
    component='nav'
    sx={{
      paddingTop: 3,
      paddingBottom: 3
    }}
  >
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <Link href='/' passHref>
        <a><Image src="/logo.svg" height={36} width={36} /></a>
      </Link>

      <Stack direction="row" spacing={3} alignItems={'center'}>
        <Box>
          <Link href='/works' passHref>
            <MuiLink fontWeight={700} underline='none' color='common.black'>works</MuiLink>
          </Link>
        </Box>
        <Box>
          <Link href='/resume' passHref>
            <MuiLink fontWeight={700} underline='none' color='common.black'>resume</MuiLink>
          </Link>
        </Box>
        <Stack direction="row" spacing={1} alignItems={'center'}>
          <Link href='https://github.com/lukszy-dev' passHref>
            <MuiLink underline='none' color='common.black'><GitHubIcon/></MuiLink>
          </Link>
          <Link href='https://www.linkedin.com/in/łukasz-szypliński/' passHref>
            <MuiLink underline='none' color='common.black'><LinkedInIcon /></MuiLink>
          </Link>
        </Stack>
      </Stack>
    </Container>
  </Box>
);

export default Header;
