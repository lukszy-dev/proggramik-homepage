import { styled} from '@mui/system';
import { Link } from '@mui/material';

const NavItemLink = styled(Link)(({ theme, underline }) => ({
  fontWeight: 700,
  borderTopWidth: 3,
  borderTopStyle: 'solid',
  borderBottomWidth: 3,
  borderBottomStyle: 'solid',
  borderColor: 'transparent',
  textDecoration: 'none',
  ...(underline !== 'none' && { '&:hover': {
    borderBottomWidth: 3,
    borderColor: theme.palette.common.black,
    textDecoration: 'none'
  }})
}));

NavItemLink.defaultProps = {
  underline: 'none',
  color: 'common.black'
};

export default NavItemLink;
