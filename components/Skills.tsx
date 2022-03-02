import { FC, ReactElement, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import CustomDivider from './CustomDivider';
import Java from './Tech/Java';
import JavaScript from './Tech/JavaScript';
import React from './Tech/React';
import Spring from './Tech/Spring';

const TECHS = [
  {
    id: 'java',
    label: 'Java',
    icon: Java
  },
  {
    id: 'spring',
    label: 'Spring',
    icon: Spring
  },
  {
    id: 'javascript',
    label: 'JavaScript',
    icon: JavaScript
  },
  {
    id: 'react',
    label: 'React',
    icon: React
  }
];

interface TechProps {
  children: ({ hovered }) => ReactElement;
}

const Tech: FC<TechProps> = (props) => {
  const [hovered, setHovered] = useState(false);

  const handleOnMouseEnter = () => {
    setHovered(true);
  }

  const handleOnMouseLeave = () => {
    setHovered(false);
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '10rem',
        alignItems: 'center',
        'svg': {
          marginBottom: '20px'
        }
      }}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      {props.children({ hovered })}
    </Box>
  );
};

const Skills = () => (
  <>
    <CustomDivider label='skills' />

    <Stack
      direction='row'
      justifyContent={'center'}
      alignItems={'center'}
      spacing={1}
      sx={{
        paddingTop: '1rem',
        paddingBottom: '1rem'
      }}
    >
      {TECHS.map((element) => (
        <Tech key={element.id}>
          {({ hovered }) => (
            <>
              <element.icon width='40px' height='40px' fill={hovered ? null : 'black'} />
              <Typography fontWeight={500}>{element.label}</Typography>
            </>
          )}
        </Tech>
      ))}
    </Stack>
  </>
);

export default Skills;
