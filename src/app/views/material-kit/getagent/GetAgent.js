import { H2 } from 'app/components/Typography';
import { Box, styled } from '@mui/material';
import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './getagent.css';
import LineChart from 'app/views/charts/echarts/LineChart';
import { useTheme } from '@emotion/react';
import { SimpleCard } from 'app/components';
import SubAgentTable from '../subagenttable/SubAgentTable';
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
}));
const Profile = styled('div')(() => ({
  width: '100%',
  // background: '#b17b83',
  height: '150px',
  borderRadius: '10px',

  display: 'flex',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxShadow: '0px 16px 16px rgba(50, 50, 71, 0.08), 0px 24px 32px rgba(50, 50, 71, 0.08)',
  padding: '0px 10px 0px 10px',
}));
const Details = styled('div')(() => ({
  width: '100%',
  // background: '#b17b83',
  height: 'maX-content',
  flexWrap: 'wrap',
  display: 'flex',
  textAlign: 'center',
  alignItems: 'center',
  // justifyContent: '',
  //   boxShadow: ' 0px 24px 32px rgb(50 50 71 / 26%) ',
  //   padding: '0px 10px 0px 10px',
  marginTop: '25px',
}));
const Table = styled('div')(() => ({
  marginTop: '25px',
}));

function GetAgent() {
  const theme = useTheme();

  return (
    <Container>
      <Box>
        <Heading></Heading>
      </Box>
      <Box className="main">
        <Box>
          <Profile>
            <Box className="fistDiv">
              <img
                src="https://yt3.ggpht.com/ytc/AKedOLSB-oR-xmvVSZXJ3gbK12uvv0AJUvajwxMie_R_uw=s900-c-k-c0x00ffffff-no-rj"
                className="image"
              ></img>
              <Box className="name">
                <ul>
                  <div className="card-controls">
                    <span>Business Owner</span>
                  </div>

                  <li>
                    <b>Khushi</b>
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

        <Box>
          <Details>
            <Box className="boxes">
              <Box className="left">
                <span style={{ color: '#8492a6', fontWeight: '500', fontSize: '0.9rem' }}>
                  Total
                </span>
                <br />
                <div>
                  <span style={{ marginTop: '5px', fontSize: '1.125rem' }}>$1505482.05</span>
                  <br />
                  <span>Loan Originated</span>
                </div>
              </Box>
              <Box className="imagediv">
                <img
                  src="/assets/images/logos/icons8-receive-cash-24.png"
                  className="imageright"
                ></img>
              </Box>
            </Box>
            <Box className="boxes">
              <Box className="left">
                <span style={{ color: '#8492a6', fontWeight: '500', fontSize: '0.9rem' }}>
                  Total
                </span>
                <br />
                <div>
                  <span style={{ marginTop: '5px', fontSize: '1.125rem' }}>$1505482.05</span>
                  <br />
                  <span>Loan Originated</span>
                </div>
              </Box>
              <Box className="imagediv">
                <img src="/assets/images/logos/icons8-calendar-24.png" className="imageright"></img>
              </Box>
            </Box>
            <Box className="boxes">
              <Box className="left">
                <span style={{ color: '#8492a6', fontWeight: '500', fontSize: '0.9rem' }}>
                  Total
                </span>
                <br />
                <div>
                  <span style={{ marginTop: '5px', fontSize: '1.125rem' }}>$1505482.05</span>
                  <br />
                  <span>Loan Originated</span>
                </div>
              </Box>
              <Box className="imagediv">
                <img
                  src="/assets/images/logos/icons8-receive-cash-24.png"
                  className="imageright"
                ></img>
              </Box>
            </Box>
            <Box className="boxes">
              <Box className="left">
                <span style={{ color: '#8492a6', fontWeight: '500', fontSize: '0.9rem' }}>
                  Total
                </span>
                <br />
                <div>
                  <span style={{ marginTop: '5px', fontSize: '1.125rem' }}>$1505482.05</span>
                  <br />
                  <span>Loan Originated</span>
                </div>
              </Box>
              <Box className="imagediv">
                <img src="/assets/images/logos/icons8-calendar-24.png" className="imageright"></img>
              </Box>
            </Box>
            <Box className="boxes">
              <Box className="left">
                <span style={{ color: '#8492a6', fontWeight: '500', fontSize: '0.9rem' }}>
                  Total
                </span>
                <br />
                <div>
                  <span style={{ marginTop: '5px', fontSize: '1.125rem' }}>$1505482.05</span>
                  <br />
                  <span>Loan Originated</span>
                </div>
              </Box>
              <Box className="imagediv">
                <img
                  src="/assets/images/logos/icons8-receive-cash-24.png"
                  className="imageright"
                ></img>
              </Box>
            </Box>
            <Box className="boxes">
              <Box className="left">
                <span style={{ color: '#8492a6', fontWeight: '500', fontSize: '0.9rem' }}>
                  Total
                </span>
                <br />
                <div>
                  <span style={{ marginTop: '5px', fontSize: '1.125rem' }}>$1505482.05</span>
                  <br />
                  <span>Loan Originated</span>
                </div>
              </Box>
              <Box className="imagediv">
                <img
                  src="/assets/images/logos/icons8-receive-cash-24.png"
                  className="imageright"
                ></img>
              </Box>
            </Box>
            <Box className="boxes">
              <Box className="left">
                <span style={{ color: '#8492a6', fontWeight: '500', fontSize: '0.9rem' }}>
                  Total
                </span>
                <br />
                <div>
                  <span style={{ marginTop: '5px', fontSize: '1.125rem' }}>$1505482.05</span>
                  <br />
                  <span>Loan Originated</span>
                </div>
              </Box>
              <Box className="imagediv">
                <img
                  src="/assets/images/logos/icons8-receive-cash-24.png"
                  className="imageright"
                ></img>
              </Box>
            </Box>
            <Box className="boxes">
              <Box className="left">
                <span style={{ color: '#8492a6', fontWeight: '500', fontSize: '0.9rem' }}>
                  Total
                </span>
                <br />
                <div>
                  <span style={{ marginTop: '5px', fontSize: '1.125rem' }}>$1505482.05</span>
                  <br />
                  <span>Loan Originated</span>
                </div>
              </Box>
              <Box className="imagediv">
                <img src="/assets/images/logos/icons8-staff-24.png" className="imageright"></img>
              </Box>
            </Box>
          </Details>
        </Box>

        <H2 style={{ margin: '10px 0px 10px 0px', color: '#8492a6', fontWeight: '500' }}>
          Analytics
        </H2>

        <Box>
          <SimpleCard title="overview">
            <LineChart
              height="350px"
              color={[theme.palette.primary.main, theme.palette.primary.light]}
            />
          </SimpleCard>
        </Box>

        <Table>
          <SubAgentTable />
        </Table>
      </Box>
    </Container>
  );
}

export default GetAgent;
