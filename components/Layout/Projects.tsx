import Link from 'next/link';
import Image from 'next/image';
import { Stack, Box } from '@mui/material';

const Projects = () => (
  <Stack spacing={3}>
    <Link href="https://github.com/lukszy-dev/kangaroo" passHref={true}>
      <Box
        sx={{
          minHeight: '220px',
          width: '100%',
          position: 'relative',
          borderRadius: '5px',
          overflow: 'hidden',
          cursor: 'pointer'
        }}
      >
        <Image src="/kangaroo.png" layout='fill' objectFit='none' objectPosition='-45px -31px' />
      </Box>
    </Link>

    <Link href="https://github.com/lukszy-dev/platformer" passHref={true}>
      <Box
        sx={{
          minHeight: '220px',
          width: '100%',
          position: 'relative',
          borderRadius: '5px',
          overflow: 'hidden',
          cursor: 'pointer'
        }}
      >
        <Image src="/platformer.png" layout='fill' objectFit='cover' />
      </Box>
    </Link>
  </Stack>
);

export default Projects;
