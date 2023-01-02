import {
  Avatar,
  Hidden,
  Icon,
  IconButton,
  MenuItem,
  TextField,
  useMediaQuery,
} from '@mui/material';
import { Box, styled, useTheme } from '@mui/system';
import { makeStyles } from '@mui/styles';
import CancelIcon from '@mui/icons-material/Cancel';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { MatxMenu, MatxSearchBox } from 'app/components';
import { themeShadows } from 'app/components/MatxTheme/themeColors';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { NotificationProvider } from 'app/contexts/NotificationContext';
import useAuth from 'app/hooks/useAuth';
import useSettings from 'app/hooks/useSettings';
import { topBarHeight } from 'app/utils/constant';
import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link, useNavigate } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { Span } from '../../../components/Typography';
import NotificationBar from '../../NotificationBar/NotificationBar';
import ShoppingCart from '../../ShoppingCart';

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

const TopbarRoot = styled('div')(({ theme }) => ({
  top: 0,
  zIndex: 96,
  transition: 'all 0.3s ease',
  boxShadow: themeShadows[8],
  height: topBarHeight,
}));

const TopbarContainer = styled(Box)(({ theme }) => ({
  padding: '8px',
  paddingLeft: 18,
  paddingRight: 20,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: theme.palette.primary.main,
  [theme.breakpoints.down('sm')]: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  [theme.breakpoints.down('xs')]: {
    paddingLeft: 14,
    paddingRight: 16,
  },
}));

const UserMenu = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  borderRadius: 24,
  padding: 4,
  '& span': { margin: '0 8px' },
}));

const StyledItem = styled(MenuItem)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  minWidth: 185,
  '& a': {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  '& span': { marginRight: '10px', color: theme.palette.text.primary },
}));
const useStyles = makeStyles({
  model: {
    '& .css-1wnsr1i': {
      border: 'none',
      borderRadius: '15px',
      width: '300px',
    },
  },
});
const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const IconBox = styled('div')(({ theme }) => ({
  display: 'inherit',
  [theme.breakpoints.down('md')]: { display: 'none !important' },
}));

const Layout1Topbar = () => {
  const theme = useTheme();
  const classes = useStyles();

  const { settings, updateSettings } = useSettings();
  const { logout, user } = useAuth();
  const isMdScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [open, setOpen] = React.useState(false);
  const [openLogout, setopenLogout] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleOpenLogout = () => setopenLogout(true);
  const handleClose = () => {
    setOpen(false);
    setopenLogout(false);
  };
  const updateSidebarMode = (sidebarSettings) => {
    updateSettings({
      layout1Settings: { leftSidebar: { ...sidebarSettings } },
    });
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/');
  };
  const handleSidebarToggle = () => {
    let { layout1Settings } = settings;
    let mode;
    if (isMdScreen) {
      mode = layout1Settings.leftSidebar.mode === 'close' ? 'mobile' : 'close';
    } else {
      mode = layout1Settings.leftSidebar.mode === 'full' ? 'close' : 'full';
    }
    updateSidebarMode({ mode });
  };

  return (
    <TopbarRoot>
      <TopbarContainer>
        <Box display="flex">
          <StyledIconButton onClick={handleSidebarToggle}>
            <Icon>menu</Icon>
          </StyledIconButton>
        </Box>

        <Box display="flex" alignItems="center">
          <ShoppingCart />

          <MatxMenu
            menuButton={
              <UserMenu>
                <Avatar src={user?.avatar} sx={{ cursor: 'pointer' }} />
              </UserMenu>
            }
          >
            <StyledItem onClick={handleOpen}>
              <AccountCircleIcon style={{ marginRight: '10px' }} />
              <Span> Profile </Span>
            </StyledItem>

            <StyledItem>
              <Link to="/material/PasswordChange">
                <Icon> password </Icon>
                <Span> Change Password </Span>
              </Link>
            </StyledItem>
            <StyledItem onClick={handleOpenLogout}>
              <Icon> power_settings_new </Icon>
              <Span> Logout </Span>
            </StyledItem>
          </MatxMenu>
        </Box>
      </TopbarContainer>
      <Modal open={open} className={classes.model} onClose={handleClose}>
        <Box sx={style}>
          <CancelIcon
            style={{ position: 'absolute', right: '10px', top: '10px', cursor: 'pointer' }}
            onClick={handleClose}
          />
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Profile
          </Typography>
          <Typography id="modal-modal-title" variant="h9" component="h4">
            Super-Admin
          </Typography>
          <Box sx={{ mt: 2 }}>
            <ul style={{ padding: '0px' }}>
              <li
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  marginBottom: '10px',
                }}
              >
                <EmailIcon style={{ marginRight: '10px' }} />
                <span className="status-text">email@example.com</span>
              </li>

              <li
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  marginBottom: '10px',
                }}
              >
                <PhoneIcon style={{ marginRight: '10px' }} />
                <span className="status-text">777777777</span>
              </li>
            </ul>
          </Box>
        </Box>
      </Modal>

      <Modal open={openLogout} className={classes.model} onClose={handleClose}>
        <Box sx={style}>
          <CancelIcon
            style={{ position: 'absolute', right: '10px', top: '10px', cursor: 'pointer' }}
            onClick={handleClose}
          />
          <Box
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <ErrorOutlineIcon style={{ fontSize: '100px' }} />
            <Typography fontSize={15}>Are you sure to log out?</Typography>
            <Box>
              <div className={classes.button}>
                <StyledButton
                  variant="contained"
                  style={{ background: '#b97983', color: 'white' }}
                  onClick={handleLogout}
                >
                  Yes
                </StyledButton>
                <StyledButton
                  variant="outlined"
                  style={{ color: 'black', border: '1px solid' }}
                  onClick={handleClose}
                >
                  No
                </StyledButton>
              </div>
            </Box>
          </Box>
        </Box>
        {/* <Box>
          <ErrorOutlineIcon />
        </Box> */}
      </Modal>
    </TopbarRoot>
  );
};

export default React.memo(Layout1Topbar);
