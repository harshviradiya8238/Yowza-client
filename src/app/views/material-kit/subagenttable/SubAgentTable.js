import { Logout, PersonAdd, Settings } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Card,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Icon,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Select,
  styled,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { H1, H3, Paragraph } from 'app/components/Typography';
import WorkIcon from '@mui/icons-material/Work';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import CancelIcon from '@mui/icons-material/Cancel';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import React from 'react';
import './subagent.css';

const CardHeader = styled(Box)(() => ({
  display: 'flex',
  paddingLeft: '24px',
  paddingRight: '24px',
  marginBottom: '12px',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
  textTransform: 'capitalize',
}));

const ProductTable = styled(Table)(() => ({
  minWidth: 400,
  whiteSpace: 'pre',
  '& small': {
    width: 50,
    height: 15,
    borderRadius: 500,
    boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
  },
  '& td': { borderBottom: 'none', textAlign: 'center' },
  '& td:first-of-type': { paddingLeft: '16px !important' },
  '& th': { textAlign: 'center' },
}));

const Small = styled('small')(({ bgcolor }) => ({
  width: 50,
  height: 15,
  color: '#fff',
  padding: '2px 8px',
  borderRadius: '4px',
  overflow: 'hidden',
  background: bgcolor,
  boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
}));

const SubAgentTable = () => {
  const { palette } = useTheme();
  const bgError = palette.error.main;
  const bgPrimary = palette.primary.main;
  const bgSecondary = palette.secondary.main;

  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [openDialog, setopenDialog] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setopenDialog(true);
  };
  const handleCloseDialog = () => {
    setopenDialog(false);
  };

  return (
    <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
      <CardHeader>
        <Title>Sub-Agents</Title>
        {/* <Select size="small" defaultValue="this_month">
          <MenuItem value="this_month">This Month</MenuItem>
          <MenuItem value="last_month">Last Month</MenuItem>
        </Select> */}
      </CardHeader>

      <Box overflow="auto">
        <ProductTable>
          <TableHead>
            <TableRow>
              <TableCell sx={{ px: 4 }} colSpan={2}>
                ID
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={2}>
                Name
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={2}>
                Total Loan
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={2}>
                TOTAL AMOUNT($)
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={2}>
                ACTIVE/INACTIVE
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={2}>
                ACTIONS
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {productList.map((product, index) => (
              <TableRow key={index} hover>
                <TableCell colSpan={2} align="left" sx={{ px: 0, textTransform: 'capitalize' }}>
                  <Box display="flex" alignItems="center">
                    <Paragraph sx={{ m: 0, ml: 4 }}>SA0638952</Paragraph>
                  </Box>
                </TableCell>

                <TableCell align="left" colSpan={2} sx={{ px: 0, textTransform: 'capitalize' }}>
                  Harsh Patel
                </TableCell>
                <TableCell sx={{ px: 0 }} colSpan={2}>
                  23
                </TableCell>

                <TableCell sx={{ px: 0 }} colSpan={2}>
                  51200
                </TableCell>
                <TableCell sx={{ px: 0 }} align="left" colSpan={2}>
                  {product.available < 20 ? (
                    <Small bgcolor={bgSecondary}>{product.available} Active</Small>
                  ) : (
                    <Small bgcolor={bgError}>INACTIVE</Small>
                  )}
                </TableCell>

                <TableCell sx={{ px: 0 }} colSpan={2}>
                  <Tooltip title="Account settings">
                    {/* <IconButton
                      onClick={handleClick}
                      size="small"
                      sx={{ ml: 2 }}
                      aria-controls={open ? 'account-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                    > */}
                    <MoreVertIcon
                      onClick={handleClick}
                      size="small"
                      sx={{ ml: 2, cursor: 'pointer' }}
                      // aria-controls={open ? 'account-menu' : undefined}
                      // aria-haspopup="true"
                      // aria-expanded={open ? 'true' : undefined}
                    />
                    {/* </IconButton> */}
                  </Tooltip>

                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: 'visible',
                        boxShadow:
                          '0px 16px 16px rgba(50, 50, 71, 0.08), 0px 24px 32px rgba(50, 50, 71, 0.08)',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        '&:before': {
                          content: '""',
                          display: 'block',
                          position: 'absolute',
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: 'background.paper',
                          transform: 'translateY(-50%) rotate(45deg)',
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                  >
                    <MenuItem onClick={handleClickOpen}>
                      <PersonIcon style={{ marginRight: '6px' }} /> Personal Details
                    </MenuItem>
                    <MenuItem>
                      <WorkIcon style={{ marginRight: '6px' }} /> My account
                    </MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </ProductTable>

        <Dialog
          //   fullScreen={fullScreen}
          open={openDialog}
          onClose={handleCloseDialog}
          aria-labelledby="responsive-dialog-title"
        >
          <Box
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              padding: '15px',
            }}
          >
            <H3>Personal Details</H3>
            <CancelIcon style={{ cursor: 'pointer' }} onClick={handleCloseDialog} />
          </Box>

          <Divider />
          <DialogContent>
            <div class="card">
              <div className="top">
                <div>
                  <img
                    class="img-avatar"
                    src="https://yt3.ggpht.com/ytc/AKedOLSB-oR-xmvVSZXJ3gbK12uvv0AJUvajwxMie_R_uw=s900-c-k-c0x00ffffff-no-rj"
                  ></img>
                </div>
                <div className="right">
                  <div>
                    <ul class="status">
                      <li>
                        <span class="status-text">
                          <h3 style={{ margin: 0 }}>Tiana Rosser</h3>
                        </span>
                        {/* <span class="status-text">email@example.com</span> */}
                      </li>

                      <li>
                        <span class="status-text">Agent ID:</span>

                        <span class="status-text">777777777</span>
                      </li>
                    </ul>
                  </div>

                  <div>
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

              <div className="bottom">
                <div className="box">
                  <div className="ticket">Total Loan : 2</div>
                  <div className="ticket">Total Amount : 4,56,789 ₹</div>
                  <div className="ticket">
                    Active / Inactive : <Small className="button">Active</Small>
                  </div>
                  <div className="ticket">
                    Unblock/Block :<Switch {...label} defaultChecked />
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </Box>
    </Card>
  );
};

const productList = [
  {
    imgUrl: '/assets/images/products/headphone-2.jpg',
    name: 'earphone',
    price: 100,
    available: 15,
  },
  {
    imgUrl: '/assets/images/products/headphone-3.jpg',
    name: 'earphone',
    price: 1500,
    available: 30,
  },
  {
    imgUrl: '/assets/images/products/iphone-2.jpg',
    name: 'iPhone x',
    price: 1900,
    available: 35,
  },
  {
    imgUrl: '/assets/images/products/iphone-1.jpg',
    name: 'iPhone x',
    price: 100,
    available: 0,
  },
  {
    imgUrl: '/assets/images/products/headphone-3.jpg',
    name: 'Head phone',
    price: 1190,
    available: 5,
  },
];

export default SubAgentTable;
