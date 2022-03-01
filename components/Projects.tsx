import Link from 'next/link';
import Image from 'next/image';
import { Stack, styled, Typography, alpha } from '@mui/material';

import CustomDivider from './CustomDivider';

const Project = styled('div')({
  minHeight: '220px',
  width: '100%',
  position: 'relative',
  borderRadius: '5px',
  overflow: 'hidden',
  cursor: 'pointer'
});

const ProjectOverlay = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: 0,
  height: '100%',
  right: 0,
  backgroundColor: alpha(theme.palette.common.black, .8),
  padding: '20px',
  transition: 'width 0.2s ease-in, color 0.4s',
  ':before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-50px',
    backgroundImage: `linear-gradient(102deg, transparent 50%, ${alpha(theme.palette.common.black, .8)} 50%)`,
    width: '50px',
    height: '100%'
  },
  ':hover': {
    width: '30%',
    color: theme.palette.common.white,
  }
}));

const Projects = () => (
  <>
    <CustomDivider label='works' />

    <Stack spacing={3} padding={2}>
      <Project>
        <Link href="https://github.com/lukszy-dev/kangaroo" passHref={true}>
          <a><Image src="/projects/kangaroo.png" layout='fill' objectFit='cover' objectPosition='0 0' /></a>
        </Link>
        <ProjectOverlay>
          <Typography fontWeight={700}>
            Kangaroo
          </Typography>
          <ul>
            <li>React</li>
            <li>Electron</li>
          </ul>
        </ProjectOverlay>
      </Project>

      <Project>
        <Link href="https://github.com/lukszy-dev/platformer" passHref={true}>
          <a><Image src="/projects/platformer.png" layout='fill' objectFit='cover' objectPosition='0 0' /></a>
        </Link>
        <ProjectOverlay>
          <Typography fontWeight={700}>
            Platformer
          </Typography>
          <ul>
            <li>Lua</li>
            <li>LÖVE</li>
          </ul>
        </ProjectOverlay>
      </Project>
    </Stack>
  </>
);

export default Projects;
