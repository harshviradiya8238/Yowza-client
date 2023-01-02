import styled from '@emotion/styled';
import { Box } from '@mui/system';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import React from 'react';
import './addlender.css';
import { Button, TextField } from '@mui/material';

const Container = styled('div')(({ theme }) => ({
  paddingTop: '1rem',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));

const Heading = styled('div')(() => ({
  width: '100%',
  background: '#D9D9D9',
  height: '70px',
  display: 'flex',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '25px',
}));

function AddLender() {
  return (
    <Container>
      <Box>
        <Heading>Add Lender</Heading>
      </Box>
      <Box className="main">
        <Box className="form">
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
            <span>Business Registered Type</span>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              className="textField"
            />
          </Box>
          <Box className="input">
            <span>Authority Designation</span>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              className="textField"
            />
          </Box>
          <Box className="input">
            <span>Phone</span>
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
          <Box className="buttonlast">
            <Button variant="contained" style={{ background: '#B97983' }}>
              Submit
            </Button>
            <Button
              variant="contained"
              style={{ color: 'black', border: '1px solid', background: 'none' }}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default AddLender;
