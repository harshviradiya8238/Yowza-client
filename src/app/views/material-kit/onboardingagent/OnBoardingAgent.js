import { H1, H2, H3 } from 'app/components/Typography';
import { Box, Button, Divider, InputAdornment, styled, TextField } from '@mui/material';
import Modal from '@mui/material/Modal';
import { makeStyles } from '@mui/styles';
import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './onboardingagent.css';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { TextareaAutosize } from '@mui/base';
import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@emotion/react';
const Container = styled('div')(({ theme }) => ({
  paddingTop: '1rem',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));

const useStyles = makeStyles((theme) => ({
  Model: {
    '& div': {
      borderRadius: '10px !important',
      // border: 'none',
    },
  },
}));

const Profile = styled('div')(() => ({
  width: '100%',
  // background: '#b17b83',
  height: '150px',
  display: 'flex',
  textAlign: 'center',
  borderRadius: '15px',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxShadow: '0px 16px 16px rgba(50, 50, 71, 0.08), 0px 24px 32px rgba(50, 50, 71, 0.08)',
  padding: '0px 10px 0px 10px',
}));

const Heading = styled('div')(() => ({
  width: '100%',
  background: '#D9D9D9',
  height: '70px',
  display: 'flex',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
}));
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  padding: '12px',
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  padding: 10,
  borderRadius: 7,
  p: 2,
};
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function OnBoardingAgent() {
  const theme = useTheme();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Container>
      <Box>
        <Heading></Heading>
      </Box>

      <Box className="section">
        <Box>
          <Profile>
            <Box className="fistDiv">
              <img
                src="https://yt3.ggpht.com/ytc/AKedOLSB-oR-xmvVSZXJ3gbK12uvv0AJUvajwxMie_R_uw=s900-c-k-c0x00ffffff-no-rj"
                className="image"
              ></img>
              <Box className="name">
                <ul>
                  <li className="individual">
                    <span>Individual</span>
                  </li>
                  <li>
                    <b>Heli Shah</b>
                  </li>
                  <li>Agent ID: AG00001</li>
                </ul>
              </Box>
            </Box>
            <Box>
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
            </Box>
          </Profile>
        </Box>

        <Box sx={{ width: '100%', marginTop: '15px' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Basic Details" {...a11yProps(0)} />
              <Tab label="Verifications Details" {...a11yProps(1)} />
              <Tab label="Business Details" {...a11yProps(2)} />
              <Tab label="Bank Details" {...a11yProps(3)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0} className="tabpanel">
            <H2>
              <b> Basic Details</b>
            </H2>
            <Box className="maintab">
              <Box className="lefttab">
                <Box className="input">
                  <span>Name</span>
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    className="textField"
                  />
                </Box>
                <Box className="input">
                  <span>Role</span>
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    className="textField"
                  />
                </Box>
                <Box className="input">
                  <span>Gender</span>
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    className="textField"
                  />
                </Box>
                <Box className="input">
                  <span>Mobile</span>
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    className="textField"
                  />
                </Box>

                <Box className="input">
                  <span>Permanent Address</span>
                  <TextareaAutosize
                    style={{
                      height: '70px',
                      width: '60%',
                      background: 'none',
                      border: '1px solid #b3b3b3',
                      borderRadius: '3px',
                    }}
                  />
                </Box>
              </Box>
              <Box className="righttab">
                <Box className="input">
                  <span>Date Of Birth </span>
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    className="textField"
                  />
                </Box>
                <Box className="input">
                  <span>Marital Status</span>
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    className="textField"
                  />
                </Box>
                <Box className="input">
                  <span>Email</span>
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    className="textField"
                  />
                </Box>

                <Box className="input">
                  <span>Current Address </span>
                  <TextareaAutosize
                    style={{
                      height: '70px',
                      width: '60%',
                      background: 'none',
                      border: '1px solid #b3b3b3',
                      borderRadius: '3px',
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1} className="tabpanel">
            <H2>
              <b> Verifications Details</b>
            </H2>

            <Box className="maintab">
              <Box className="lefttab">
                <Box>
                  <img
                    src="https://yt3.ggpht.com/ytc/AKedOLSB-oR-xmvVSZXJ3gbK12uvv0AJUvajwxMie_R_uw=s900-c-k-c0x00ffffff-no-rj"
                    className="image"
                  ></img>
                </Box>
                <Box>
                  <Box className="input">
                    <span style={{ width: '40%' }}>PAN Number</span>
                    <div
                      style={{
                        background: '#e0e0e0',
                        width: '60%',
                        height: '35px',
                        display: 'flex',
                        justifyContent: 'start',
                        alignItems: 'center',
                        padding: '15px',
                        border: '1px solid gray',
                        borderRadius: '3px',
                        borderRight: '1px solid',
                      }}
                    >
                      BIFB41835
                    </div>
                  </Box>
                  <Box className="input">
                    <span style={{ width: '40%' }}>Aadhaar</span>
                    <div
                      style={{
                        width: '60%',
                        display: 'flex',
                        border: '1px solid gray',
                        borderRadius: '3px',
                      }}
                    >
                      <div
                        style={{
                          background: '#e0e0e0',
                          width: '85%',
                          height: '35px',
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'center',
                          padding: '15px',
                          borderRight: '1px solid',
                        }}
                      >
                        Verified
                      </div>
                      <div style={{ margin: '0 auto', paddingTop: '5px' }}>
                        <CheckBoxIcon style={{ color: 'green' }} />
                      </div>
                    </div>
                  </Box>
                </Box>
              </Box>
              <Box className="righttab ">
                <Box className="firstdiv">
                  <H3 className="h3">Residence proof</H3>
                  <div className="towimage">
                    <div onClick={handleOpen}>
                      <span>Front</span>
                      <div className="boximage">
                        <img src="https://picsum.photos/200/300" className="proofimage"></img>
                      </div>
                    </div>

                    <div onClick={handleOpen}>
                      <span>Back</span>
                      <div className="boximage">
                        <img src="https://picsum.photos/200/300" className="proofimage"></img>
                      </div>
                    </div>
                  </div>
                </Box>
                <Box className="seconddiv">
                  <H3 className="h3">Education Proof</H3>

                  <div onClick={handleOpen}>
                    <span>Front</span>
                    <div className="boximage3">
                      <img src="https://picsum.photos/200/300" className="proofimage"></img>
                    </div>
                  </div>
                </Box>
              </Box>
            </Box>
          </TabPanel>

          <TabPanel value={value} index={2} className="tabpanel">
            <H2>
              <b> Business Details</b>
            </H2>
            <Box className="maintab">
              <Box className="lefttab">
                <Box className="input">
                  <span>Company Name</span>
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    className="textField"
                  />
                </Box>
                <Box className="input">
                  <span style={{ width: '33%' }}>Business Registered Type</span>
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    className="textField"
                  />
                </Box>
              </Box>
              <Box className="righttab">
                <Box className="input">
                  <span>Date of Establishment </span>
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    className="textField"
                  />
                </Box>
                <Box className="input">
                  <span>Nature of Business</span>
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    className="textField"
                  />
                </Box>
              </Box>
            </Box>
            <Box className="BusinessInput">
              <span style={{ width: '17%' }}>Describe Your Business</span>
              <TextareaAutosize
                style={{
                  height: '70px',
                  width: '81%',
                  background: 'none',
                  border: '1px solid #b3b3b3',
                  borderRadius: '3px',
                }}
              />
            </Box>
            <Box className="maintab">
              <Box className="lefttab">
                <Box className="input">
                  <span>Company PAN Number</span>
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    className="textField"
                  />
                </Box>
              </Box>
              <Box className="righttab">
                <Box className="input">
                  <span>Company GST Number</span>
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    className="textField"
                  />
                </Box>
              </Box>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={3} className="tabpanel">
            <H2>
              <b>Bank Details</b>
            </H2>
            <Box className="maintab">
              <Box className="lefttab">
                <Box className="input">
                  <span>Bank Name</span>
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    className="textField"
                  />
                </Box>
                <Box className="input">
                  <span>Account Number</span>
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    className="textField"
                  />
                </Box>
                <Box className="input">
                  <span>Penny Drop</span>
                  <div
                    style={{
                      width: '60%',
                      display: 'flex',
                      border: '1px solid gray',
                      borderRadius: '3px',
                    }}
                  >
                    <div
                      style={{
                        background: '#e0e0e0',
                        width: '85%',
                        height: '35px',
                        display: 'flex',
                        justifyContent: 'start',
                        alignItems: 'center',
                        padding: '15px',
                        borderRight: '1px solid',
                      }}
                    >
                      Verified
                    </div>
                    <div style={{ margin: '0 auto', paddingTop: '5px' }}>
                      <CheckBoxIcon style={{ color: 'green' }} />
                    </div>
                  </div>
                </Box>
              </Box>
              <Box className="righttab">
                <Box className="input">
                  <span>Account Holder Name </span>
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    className="textField"
                  />
                </Box>
                <Box className="input">
                  <span>IFSC Code</span>
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    className="textField"
                  />
                </Box>
              </Box>
            </Box>
          </TabPanel>
        </Box>
        <Box className="buttonlast">
          <Button variant="contained" style={{ background: '#38B967' }}>
            Approve
          </Button>
          <Button
            variant="contained"
            style={{ color: 'white', border: '1px solid', background: '#E94A51' }}
          >
            Reject
          </Button>
        </Box>
        <Modal
          open={open}
          onClose={handleClose}
          // aria-labelledby="modal-modal-title"
          // aria-describedby="modal-modal-description"
          className={classes.Model}
        >
          <Box sx={style}>
            <Box
              style={{
                display: 'flex',
                justifyContent: 'end',
                width: '100%',
                padding: '5',
              }}
            >
              <CloseIcon style={{ cursor: 'pointer', marginBottom: '5px' }} onClick={handleClose} />
            </Box>
            <Box className="dialogimgdiv">
              <img className="dialogimg" src="https://picsum.photos/200/300"></img>
            </Box>
            <Divider style={{ marginTop: '5px', marginBottom: '5px' }} />
            {/* <Box>
              <Button variant="contained" onClick={handleClose}>
                ok
              </Button>
            </Box> */}
          </Box>
        </Modal>
      </Box>
    </Container>
  );
}
