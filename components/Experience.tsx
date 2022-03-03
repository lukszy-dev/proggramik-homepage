import { useState } from 'react';
import { Box, Stack, Step, StepConnector, stepConnectorClasses, StepContent, StepIconProps, StepLabel, Stepper, Typography } from '@mui/material';
import { styled } from '@mui/system';

import CustomDivider from './CustomDivider';

const POSITIONS = [
  {
    id: 1,
    period: 'Jun. 2018 - present',
    role: 'Software Engineer',
    company: 'Emerge',
    technologies: ['JavaScript', 'React', 'Redux', 'Java', 'Spring Boot']
  },
  {
    id: 2,
    period: 'Nov. 2017 - May. 2018',
    role: 'Software Engineer',
    company: 'FILLTR',
    technologies: ['Java', 'Java EE', 'Hibernate', 'JavaScript', 'React']
  },
  {
    id: 3,
    period: 'Jul. 2017 - Oct. 2017',
    role: 'Java Developer',
    company: 'Connectis',
    technologies: ['Java', 'Java EE']
  },
  {
    id: 4,
    period: 'Dec. 2014 - Jun. 2017',
    role: 'Java Developer',
    company: 'Asseco Poland',
    technologies: ['Java', 'Java EE', 'Spring Framework', 'Hibernate', 'JSF', 'SQL', 'PL/SQL', 'SOAP']
  }
];

const CustomStepIcon = styled('div')<StepIconProps>(
  ({ theme, completed }) => {
    return {
    width: 20,
    height: 20,
    borderRadius: '50%',
    borderWidth: '3px',
    borderColor: theme.palette.common.black,
    ...(completed && {
      borderWidth: '10px'
    }),
    borderStyle: 'solid',
    marginRight: '3px',
    marginLeft: '3px',
    transition: 'border-width 0.2s ease-in'
  }}
);

const CustomStepConnector = styled(StepConnector)(({ theme }) => ({
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.common.black,
    borderWidth: '3px',
    minHeight: '16px'
  },
}));

const Experience = () => {
  const [step, setStep] = useState(1);

  return (
    <>
      <CustomDivider label='experience' />

      <Stack
        direction={'row'}
        sx={{
          padding: '1rem 2rem'
        }}
      >
        <Stepper
          orientation='vertical'
          connector={<CustomStepConnector />}
          sx={{ width: '100%' }}
        >
          {POSITIONS.map((element) => (
            <Step
              key={element.period}
              active={true}
              completed={element.id === step}
              onMouseEnter={() => setStep(element.id)}
            >
              <StepLabel StepIconComponent={CustomStepIcon}>
                <Typography fontWeight={700}>{element.period}</Typography>
              </StepLabel>
              <StepContent
                sx={{
                  borderColor: theme => theme.palette.common.black,
                  borderWidth: '3px'
                }}
              >
                <Typography>{element.role}</Typography>
                <Typography>{element.company}</Typography>
              </StepContent>
            </Step>
          ))}
        </Stepper>

        <Box
          sx={{
            display: {
              xs: 'none',
              sm: 'block'
            },
            width: '100%',
            paddingTop: '.5rem',
            paddingLeft: '1rem'
          }}
        >
          Technologies used:
          <ul>
            {(POSITIONS[step - 1].technologies).map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </Box>
      </Stack>
    </>
  );
};

export default Experience;
