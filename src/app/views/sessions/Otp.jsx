import { LoadingButton } from '@mui/lab';
import { Card, Checkbox, Grid, InputAdornment, Modal, TextField, Typography } from '@mui/material';
import KeyIcon from '@mui/icons-material/Key';
import { Box, styled, useTheme } from '@mui/system';
import { H1, H2, Paragraph } from 'app/components/Typography';
import useAuth from 'app/hooks/useAuth';
import CancelIcon from '@mui/icons-material/Cancel';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Formik } from 'formik';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';

import React from 'react';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import axios from 'axios';

const FlexBox = styled(Box)(() => ({ display: 'flex', alignItems: 'center' }));

const JustifyBox = styled(FlexBox)(() => ({ justifyContent: 'center' }));
const Rdius = styled(Box)(() => ({ borderRadius: '50%' }));

const ContentBox = styled(Box)(() => ({
  //   height: '100%',
  padding: '32px',
  paddingRight: '75px',
  position: 'relative',
  background: 'rgba(0, 0, 0, 0.01)',
  marginTop: '20px',
}));

const JWTRoot = styled(JustifyBox)(() => ({
  background: '#1A2038',
  minHeight: '100% !important',
  '& .card': {
    maxWidth: 800,
    minHeight: 450,
    margin: '1rem',
    display: 'flex',
    borderRadius: 12,
    alignItems: 'center',
  },
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
const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
}));

// inital login credentials
const initialValues = {
  mobileNo: '9999999999',
  password: 'Sumo@123',
  remember: true,
};
const useStyles = makeStyles({
  model: {
    '& .css-1wnsr1i': {
      border: 'none',
      borderRadius: '15px',
      width: '300px',
    },
  },
});

// form field validation schema
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Password must be 6 character length')
    .required('Password is required!'),
  mobile: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('mobile is required!'),
});

const setSession = (accessToken) => {
  if (accessToken) {
    localStorage.setItem('accessToken', accessToken);
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    localStorage.removeItem('accessToken');
    delete axios.defaults.headers.common.Authorization;
  }
};

const Otp = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [openLogout, setopenLogout] = React.useState(false);
  const classes = useStyles();
  const { verifyOtp } = useAuth();

  const handleClose = () => {
    setopenLogout(false);
  };

  const handleFormSubmit = async (values) => {
    try {
      if (values && values.otp === '987654') {
        await verifyOtp(values.mobileNo, values.otp);
        navigate('/dashboard/default');
      } else {
        setopenLogout(true);
      }
    } catch (e) {
      setLoading(false);
    }
  };

  return (
    <JWTRoot>
      <Card className="card">
        <Grid container>
          <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Grid item sm={6} xs={12}>
              <JustifyBox p={4} height="100%" sx={{ minWidth: 320 }}>
                <img
                  src="/assets/images/login_svg.svg"
                  width="100%"
                  style={{
                    height: '336px',
                    width: '336px',
                  }}
                  borderRadius="50%"
                  alt=""
                />
              </JustifyBox>
            </Grid>

            <Grid item sm={6} xs={12}>
              <ContentBox>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <img
                    src="/assets/images/nLogo.png"
                    width="100%"
                    style={{
                      borderRadius: '50%',
                      height: '80px',
                      width: '80px',
                      border: '2px solid',
                    }}
                    borderRadius="50%"
                    alt=""
                  />
                  <Box style={{ marginTop: '15px' }}>
                    <H2>OTP Verification</H2>
                    <span style={{ marginTop: '10px' }}> We have sent an OTP via SMS on:</span>
                    <Typography sx={{ fontWeight: 'bold' }}> 9999999999</Typography>
                  </Box>
                  <Formik
                    onSubmit={handleFormSubmit}
                    initialValues={initialValues}
                    // validationSchema={validationSchema}
                  >
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                      <form onSubmit={handleSubmit} style={{ marginTop: '15px' }}>
                        <TextField
                          fullWidth
                          size="small"
                          name="otp"
                          type="otp"
                          label="otp"
                          variant="outlined"
                          onBlur={handleBlur}
                          value={values.otp}
                          onChange={handleChange}
                          helperText={touched.otp && errors.otp}
                          error={Boolean(errors.otp && touched.otp)}
                          sx={{ mb: 1.5 }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <KeyIcon />
                              </InputAdornment>
                            ),
                          }}
                        />
                        <LoadingButton
                          type="submit"
                          color="primary"
                          loading={loading}
                          variant="contained"
                          sx={{ my: 2 }}
                          style={{ background: '#b17b83', width: '100%' }}
                        >
                          Verify Otp
                        </LoadingButton>
                      </form>
                    )}
                  </Formik>
                  <Box style={{ fontSize: '12px', textAlign: 'center' }}>
                    <span>By,logging in, you agree to Yowza's</span>
                    <br />
                    <span>Privacy Policy</span>
                    <span> and</span>
                    <span>Terms of Use</span>
                  </Box>
                </div>
              </ContentBox>
            </Grid>
          </Box>
        </Grid>
      </Card>
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
            <Typography fontSize={15}>Enter valid OTP</Typography>
            <Box>
              <div className={classes.button}>
                <StyledButton
                  variant="outlined"
                  style={{ color: 'black', border: '1px solid' }}
                  onClick={handleClose}
                >
                  ok
                </StyledButton>
              </div>
            </Box>
          </Box>
        </Box>
        {/* <Box>
          <ErrorOutlineIcon />
        </Box> */}
      </Modal>
    </JWTRoot>
  );
};

export default Otp;
