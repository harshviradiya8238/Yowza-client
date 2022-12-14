import { LoadingButton } from '@mui/lab';
import { Card, Checkbox, Grid, TextField, Typography } from '@mui/material';
import { Box, styled, useTheme } from '@mui/system';
import { H1, Paragraph } from 'app/components/Typography';
import useAuth from 'app/hooks/useAuth';
import { Formik } from 'formik';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const FlexBox = styled(Box)(() => ({ display: 'flex', alignItems: 'center' }));

const JustifyBox = styled(FlexBox)(() => ({ justifyContent: 'center' }));
const Rdius = styled(Box)(() => ({ borderRadius: '50%' }));

const ContentBox = styled(Box)(() => ({
  //   height: '100%',
  padding: '32px',
  position: 'relative',
  background: 'rgba(0, 0, 0, 0.01)',
  marginTop: '20px',
}));

const JWTRoot = styled(JustifyBox)(() => ({
  background: '#1A2038',
  minHeight: '100% !important',
  '& .card': {
    maxWidth: 800,
    minHeight: 400,
    margin: '1rem',
    display: 'flex',
    borderRadius: 12,
    alignItems: 'center',
  },
}));

// inital login credentials
const initialValues = {
  mobile: '9999999999',
  password: 'Admin@123',
  remember: true,
};

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

const Otp = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  const handleFormSubmit = async (values) => {
    console.log(values);
    navigate('/');
    //   navigate('/session/otp');
    //   console.log(values);
    //   setLoading(true);
    //   try {
    //     await login(values.mobile, values.password);
    //     navigate('/session/otp');
    //   } catch (e) {
    //     setLoading(false);
    //   }
  };

  return (
    <JWTRoot>
      <Card className="card">
        <Grid container>
          <Grid item sm={6} xs={12}>
            <JustifyBox p={4} height="100%" sx={{ minWidth: 320 }}>
              <img
                src="/assets/images/nLogo.png"
                width="100%"
                style={{ borderRadius: '50%' }}
                alt=""
              />
            </JustifyBox>
          </Grid>

          <Grid item sm={6} xs={12}>
            <ContentBox>
              <Box>
                <H1>Otp Verification</H1>
                We have sent an OTP via SMS on:
                <Typography sx={{ fontWeight: 'bold' }}> 9999999999</Typography>
              </Box>
            </ContentBox>
            <ContentBox>
              <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                // validationSchema={validationSchema}
              >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
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

                    <LoadingButton
                      type="submit"
                      color="primary"
                      loading={loading}
                      variant="contained"
                      sx={{ my: 2 }}
                    >
                      Verify Otp
                    </LoadingButton>
                  </form>
                )}
              </Formik>
            </ContentBox>
          </Grid>
        </Grid>
      </Card>
    </JWTRoot>
  );
};

export default Otp;
