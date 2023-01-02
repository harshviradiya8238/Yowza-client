import { alpha, Box, Button, Fab, Icon, IconButton, InputBase, styled } from '@mui/material';
// import { Container } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Breadcrumb, SimpleCard } from 'app/components';
import './onboarding.css';
import { H2 } from 'app/components/Typography';
import { Navigate, useNavigate } from 'react-router-dom';

const Container = styled('div')(({ theme }) => ({
  paddingTop: '1rem',

  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
  '& .button': { margin: theme.spacing(1) },
  '& .input': { display: 'none' },
}));
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Heading = styled('div')(() => ({
  width: '100%',
  background: '#D9D9D9',
  height: '100px',
  display: 'flex',
  textAlign: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export default function OnBoarding() {
  const navigate = useNavigate();
  const HandleClick = () => {
    navigate('/material/onboarding/onboardingagent');
  };
  return (
    <Container>
      <Heading>
        <H2 style={{ color: 'black' }}>Onboarding</H2>
        <Search style={{ color: 'balck', background: 'white' }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
        </Search>
      </Heading>
      <Box className="profile">
        <div className="profile-card" onClick={HandleClick}>
          <div className="profile-card-header">
            <img
              className="profile-image"
              src="https://yt3.ggpht.com/ytc/AKedOLSB-oR-xmvVSZXJ3gbK12uvv0AJUvajwxMie_R_uw=s900-c-k-c0x00ffffff-no-rj"
            ></img>

            <div className="profile-info">
              <div className="individual">
                <span>individual</span>
              </div>
              <h3 className="profile-name">Khushi</h3>

              <p className="profile-desc">
                {' '}
                <b>Applied date:</b> Dec 19, 2022, 2:09:05 PM
              </p>
            </div>
          </div>

          <div className="profile-card-body">
            <ul className="status">
              <li>
                <EmailIcon />
                <span className="status-text">email@example.com</span>
              </li>

              <li>
                <PhoneIcon />
                <span className="status-text">777777777</span>
              </li>

              <li>
                <LocationOnIcon />
                <span className="status-text">Location</span>
              </li>
            </ul>
          </div>
        </div>
      </Box>
    </Container>
  );
}
