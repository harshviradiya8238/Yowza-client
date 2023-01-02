import styled from '@emotion/styled';
import { Box } from '@mui/system';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import React from 'react';
import './profile.css';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));

const Heading = styled('div')(() => ({
  width: '100%',
  background: '#b17b83',
  height: '100px',
  display: 'flex',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '25px',
}));

function Profile() {
  return (
    <Container>
      <Box>
        <Heading>Admin-Profile</Heading>
      </Box>
      <Box>
        <Box>
          <div class="profile-card">
            <div class="profile-card-header">
              {/* <div class="profile-image"></div> */}
              <div className="profile_card">
                <div class="profile-info">
                  <h3 class="profile-name">Super Admin</h3>
                </div>
                <ul class="status">
                  <li>
                    <EmailIcon />
                    <span class="status-text">email@example.com</span>
                  </li>

                  <li>
                    <PhoneIcon />
                    <span class="status-text">777777777</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </Container>
  );
}

export default Profile;
