import * as React from 'react';

import { AccountCircle, ExpandLess, Visibility, VisibilityOff } from '@mui/icons-material';
import LockIcon from '@mui/icons-material/Lock';
import CallIcon from '@mui/icons-material/Call';
import { LoadingButton } from '@mui/lab';
import {
  Button,
  Card,
  Checkbox,
  Grid,
  IconButton,
  InputAdornment,
  Modal,
  TextField,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box, styled, useTheme } from '@mui/system';
import { H1, Paragraph } from 'app/components/Typography';
import useAuth from 'app/hooks/useAuth';
import { Formik } from 'formik';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { login } from '../../redux/actions/LoginAction';
import CancelIcon from '@mui/icons-material/Cancel';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import Otp from './Otp';

const FlexBox = styled(Box)(() => ({ display: 'flex', alignItems: 'center' }));

const JustifyBox = styled(FlexBox)(() => ({ justifyContent: 'center' }));

const ContentBox = styled(Box)(() => ({
  height: '100%',
  padding: '32px',
  position: 'relative',
  background: 'rgba(0, 0, 0, 0.01)',
  // marginTop: '65px',
}));

const JWTRoot = styled(JustifyBox)(() => ({
  background: '#1A2038',
  minHeight: '100% !important',
  '& .card': {
    maxWidth: 800,
    background: '##ffe4e1',

    minHeight: 450,
    margin: '1rem',
    display: 'flex',
    borderRadius: 12,
    alignItems: 'center',
  },
}));

// inital login credentials
const initialValues = {
  mobile: '9999999999',
  password: '',
  remember: true,
};
const CHARACTER_LIMIT = 10;
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

const useStyles = makeStyles({
  model: {
    '& .css-1wnsr1i': {
      border: 'none',
      borderRadius: '15px',
      width: '300px',
    },
  },
});
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

const JwtLogin = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [openLogout, setopenLogout] = React.useState(false);

  const dispatch = useDispatch();
  const classes = useStyles();

  const handleClose = () => {
    setopenLogout(false);
  };
  const adminLogin = useSelector((state) => state?.payload?.data);
  console.log(adminLogin);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // const { error, userInfo } = userLogin;

  // const redirect = location.search ? location.search.split('=')[1] : '/';

  // useEffect(() => {
  //   if (userInfo) {
  //     history.push(redirect);
  //   }
  // }, [history, userInfo, redirect]);

  // const { login } = useAuth();

  const handleFormSubmit = async (values) => {
    try {
      // e.preventDefault();
      // await login(values.mobile, values.password);
      if (values.mobile === '9999999999' && values.password === 'Sumo@123') {
        await dispatch(login(values.mobile, values.password));
        navigate('/session/otp');
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
                  <H1>Login</H1>
                  <Formik
                    onSubmit={handleFormSubmit}
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                  >
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                      <form onSubmit={handleSubmit} style={{ marginTop: '15px' }}>
                        {values ? (
                          <>
                            <TextField
                              fullWidth
                              size="small"
                              type="mobile"
                              name="mobile"
                              label="Mobile"
                              variant="outlined"
                              onBlur={handleBlur}
                              value={values.mobile}
                              onChange={handleChange}
                              helperText={touched.mobile && errors.mobile}
                              error={Boolean(errors.mobile && touched.mobile)}
                              sx={{ mb: 3 }}
                              inputProps={{
                                maxLength: CHARACTER_LIMIT,
                              }}
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <CallIcon />
                                  </InputAdornment>
                                ),
                              }}
                            />

                            <TextField
                              fullWidth
                              size="small"
                              name="password"
                              type={showPassword ? 'text' : 'password'}
                              label="Password"
                              variant="outlined"
                              onBlur={handleBlur}
                              value={values.password}
                              onChange={handleChange}
                              helperText={touched.password && errors.password}
                              error={Boolean(errors.password && touched.password)}
                              sx={{ mb: 1.5 }}
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <LockIcon />
                                  </InputAdornment>
                                ),
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton
                                      aria-label="toggle password visibility"
                                      onClick={handleClickShowPassword}
                                      onMouseDown={handleMouseDownPassword}
                                      edge="end"
                                    >
                                      {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                  </InputAdornment>
                                ),
                              }}
                            />
                          </>
                        ) : (
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
                          />
                        )}

                        <LoadingButton
                          type="submit"
                          color="primary"
                          loading={loading}
                          variant="contained"
                          sx={{ my: 2 }}
                          style={{ background: '#b17b83', width: '100%' }}
                        >
                          Login
                        </LoadingButton>

                        <Box sx={{ textAlign: 'center', fontSize: '12px' }}>
                          Powerd by, Yowza International
                        </Box>
                        {/* <Paragraph>
                      Don't have an account?
                      <NavLink
                        to="/session/signup"
                        style={{ color: theme.palette.primary.main, marginLeft: 5 }}
                      >
                        Register
                      </NavLink>
                    </Paragraph> */}
                      </form>
                    )}
                  </Formik>
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
            <Typography fontSize={15}>Enter valid Password</Typography>
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

export default JwtLogin;
