import Link from 'next/link';
import { Box, Container, Stack, alpha } from '@mui/material';
import { styled } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import NavItemLink from './NavItemLink';
import Logo from './Logo';

const StyledLogo = styled(Logo)(({ theme }) => ({
  fill: theme.palette.common.black
}));

const Header = () => (
  <Box
    component='nav'
    sx={{
      position: 'fixed',
      width: '100%',
      paddingTop: 3,
      paddingBottom: 3,
      backgroundColor: (theme) => alpha(theme.palette.common.white, .95),
      zIndex: 1
    }}
  >
    <Container
      maxWidth='md'
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <Link href='/' passHref>
        <a><StyledLogo height={36} width={36} /></a>
      </Link>

      <Stack direction="row" spacing={3} alignItems={'center'}>
        {/* <Link href='/works' passHref>
          <NavItemLink underline='hover'>works</NavItemLink>
        </Link> */}

        {/* <Link href='/resume' passHref>
          <NavItemLink underline='hover'>resume</NavItemLink>
        </Link> */}

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
