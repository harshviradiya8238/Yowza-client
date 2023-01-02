import * as React from 'react';
import { DatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Icon,
  Radio,
  RadioGroup,
  styled,
  Typography,
} from '@mui/material';
import { H2, Span } from 'app/components/Typography';
import { useEffect, useState } from 'react';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { Box } from '@mui/system';

const TextField = styled(TextValidator)(() => ({
  width: '100%',
  marginBottom: '16px',
  display: 'flex',
  '& div>input': {
    height: '7px',
  },
}));
const Heading = styled('div')(() => ({
  width: '100%',
  background: '#D9D9D9',
  height: '60px',
  display: 'flex',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
}));
const Card = styled('div')(() => ({
  width: '70%',
  // marginBottom: '10px',
  margin: '0 auto',
  padding: '33px 45px 33px 45px',
  borderRadius: '18px',
  boxShadow: '0px 24px 32px rgb(50 50 71 / 26%)',
}));

const ChangePassword = () => {
  const [state, setState] = useState({});
  const [showPassword, setShowPassword] = React.useState({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const handleClickShowPassword = (data) => {
    // setShowPassword((show) => !show);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      if (value !== state.newPassword) return false;
      if (state.newPassword == '') {
        setShowPassword(true);
      }
      return true;
    });

    return () => ValidatorForm.removeValidationRule('isPasswordMatch');
  });
  const handleSubmit = (event) => {
    // console.log("submitted");
    // console.log(event);
  };

  const handleChange = (event) => {
    event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleDateChange = (date) => setState({ ...state, date });

  const {
    username,
    firstName,
    creditCard,
    mobile,
    password,
    confirmPassword,
    oldPassword,
    newPassword,
    gender,
    date,
    email,
  } = state;

  return (
    <div>
      <Heading>
        <H2 style={{ color: 'Black' }}>Change Password</H2>
      </Heading>
      <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
        <Grid
          container
          spacing={6}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <Card>
              <Typography component="span" style={{ fontWeight: '500' }}>
                Old Password
              </Typography>
              <TextField
                name="oldPassword"
                // label="Old Password"
                value={oldPassword || ''}
                onChange={handleChange}
                validators={['required']}
                errorMessages={['this field is required']}
                type={showPassword.oldPassword ? 'text' : 'password'}
                style={{ marginBottom: '25px' }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => {
                          setShowPassword({
                            ...showPassword,
                            oldPassword: !showPassword.oldPassword,
                          });
                        }}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword.oldPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Typography component="span" style={{ fontWeight: '500' }}>
                New Password
              </Typography>
              <TextField
                name="newPassword"
                onChange={handleChange}
                // label="New Password"
                style={{ marginBottom: '25px' }}
                value={newPassword || ''}
                validators={['required', 'isPasswordMatch']}
                errorMessages={['this field is required', "password didn't match"]}
                type={showPassword.newPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => {
                          setShowPassword({
                            ...showPassword,
                            newPassword: !showPassword.newPassword,
                          });
                        }}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword.newPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Typography component="span" style={{ fontWeight: '500' }}>
                Confirm Password
              </Typography>

              <TextField
                name="confirmPassword"
                onChange={handleChange}
                // label="Confirm Password"
                value={confirmPassword || ''}
                style={{ marginBottom: '25px' }}
                validators={['required', 'isPasswordMatch']}
                errorMessages={[
                  'this field is required',
                  "newpassword and confirmPassword didn't match",
                ]}
                type={showPassword.confirmPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => {
                          setShowPassword({
                            ...showPassword,
                            confirmPassword: !showPassword.confirmPassword,
                          });
                        }}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword.confirmPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                color="primary"
                variant="contained"
                type="submit"
                style={{
                  textAlign: 'center',
                  display: 'flex',
                  background: '#B97983',
                  width: '100%',
                }}
              >
                <Span sx={{ pl: 1, textTransform: 'capitalize' }}>Change Password</Span>
              </Button>
            </Card>
          </Grid>
        </Grid>
      </ValidatorForm>
    </div>
  );
};

export default ChangePassword;
