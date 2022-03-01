import { Divider, Typography } from '@mui/material';

const CustomDivider = ({ label }) => (
  <Divider sx={{ marginBottom: 3, marginTop: 3 }} textAlign="left">
    <Typography variant="h6" component="h3">{label}</Typography>
  </Divider>
);

export default CustomDivider;
