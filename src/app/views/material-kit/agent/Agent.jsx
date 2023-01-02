import { Box, styled } from '@mui/material';
import { Breadcrumb, SimpleCard } from 'app/components';
import { H2 } from 'app/components/Typography';
import { alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import './agent.css';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from 'react-router-dom';

const Container = styled('div')(({ theme }) => ({
  paddingTop: '1rem',
  paddingTop: '1rem',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
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

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const Heading = styled('div')(() => ({
  width: '100%',
  background: '#D9D9D9',
  height: '100px',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
}));
const Agent = () => {
  const navigate = useNavigate();
  const HandleClick = () => {
    navigate('/material/agent/getagent');
  };

  return (
    <Container>
      <Box>
        <Heading>
          <H2 style={{ color: 'black' }}>Agent</H2>
          <Search style={{ color: 'balck', background: 'white' }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
          </Search>
        </Heading>
        <Box className="main">
          <div className="profile-card" onClick={HandleClick}>
            <div className="profile-card-header">
              <img
                className="profile-image"
                src="https://yt3.ggpht.com/ytc/AKedOLSB-oR-xmvVSZXJ3gbK12uvv0AJUvajwxMie_R_uw=s900-c-k-c0x00ffffff-no-rj"
              ></img>

              <div className="profile-info">
                <div className="card-controls">
                  <span>Business Owner</span>
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
      </Box>
    </Container>
  );
};

export default Agent;
