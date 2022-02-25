import Link from 'next/link';
import Image from 'next/image';
import { Box, Container, Stack, Link as MuiLink } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import NavItemLink from './NavItemLink';

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
        <Link href='/works' passHref>
          <NavItemLink underline='hover'>works</NavItemLink>
        </Link>

        <Link href='/resume' passHref>
          <NavItemLink underline='hover'>resume</NavItemLink>
        </Link>

        <Stack direction="row" spacing={1} alignItems={'center'}>
          <Link href='https://github.com/lukszy-dev' passHref>
            <NavItemLink target='_blank'>
              <GitHubIcon sx={{ display: 'block' }} />
            </NavItemLink>
          </Link>
          <Link href='https://www.linkedin.com/in/łukasz-szypliński/' passHref>
            <NavItemLink target='_blank'>
              <LinkedInIcon sx={{ display: 'block' }} />
            </NavItemLink>
          </Link>
        </Stack>
      </Stack>
    </Container>
  </Box>
);

export default Header;
