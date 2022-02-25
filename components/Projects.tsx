import Link from 'next/link';
import Image from 'next/image';
import { Stack, styled } from '@mui/material';

const Project = styled('span')({
  minHeight: '220px',
  width: '100%',
  position: 'relative',
  borderRadius: '5px',
  overflow: 'hidden',
  cursor: 'pointer',
  ':hover': {
    filter: 'brightness(75%)'
  }
});

const Projects = () => (
  <Stack spacing={3}>
    <Project>
      <Link href="https://github.com/lukszy-dev/kangaroo" passHref={true}>
        <a><Image src="/kangaroo.png" layout='fill' objectFit='none' objectPosition='-45px -31px' /></a>
      </Link>
    </Project>

    <Project>
      <Link href="https://github.com/lukszy-dev/platformer" passHref={true}>
        <a><Image src="/platformer.png" layout='fill' objectFit='cover' /></a>
      </Link>
    </Project>
  </Stack>
);

export default Projects;
