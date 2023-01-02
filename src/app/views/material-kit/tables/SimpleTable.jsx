import {
  Box,
  Icon,
  IconButton,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';

const StyledTable = styled(Table)(({ theme }) => ({
  whiteSpace: 'pre',
  '& thead': {
    '& tr': { '& th': { paddingLeft: 0, paddingRight: 0 } },
  },
  '& tbody': {
    '& tr': { '& td': { paddingLeft: 0, textTransform: 'capitalize' } },
  },
}));

const subscribarList = [
  {
    name: 'john doe',
    designation: 'Lending Manager',
    amount: 1000,
    status: 'close',
    company: 'ABC Fintech LTD.',
  },
  {
    name: 'kessy bryan',
    designation: 'Lending Manager',
    amount: 9000,
    status: 'open',
    company: 'My Fintech LTD.',
  },
  {
    name: 'james cassegne',
    designation: 'Lending Manager',
    amount: 5000,
    status: 'close',
    company: 'Collboy Tech LTD.',
  },
  {
    name: 'lucy brown',
    designation: 'Lending Manager',
    amount: 89000,
    status: 'open',
    company: 'ABC Fintech LTD.',
  },
  {
    name: 'lucy brown',
    designation: 'Lending Manager',
    amount: 89000,
    status: 'open',
    company: 'ABC Fintech LTD.',
  },
  {
    name: 'lucy brown',
    designation: 'Lending Manager',
    amount: 89000,
    status: 'open',
    company: 'ABC Fintech LTD.',
  },
];

const SimpleTable = () => {
  return (
    <Box width="100%" overflow="auto">
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="center">Company</TableCell>
            <TableCell align="center">Start designation</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {subscribarList.map((subscriber, index) => (
            <TableRow key={index}>
              <TableCell align="left">{subscriber.name}</TableCell>
              <TableCell align="center">{subscriber.company}</TableCell>
              {/* <TableCell align="center">{subscriber.designation}</TableCell> */}
              <TableCell align="center">{subscriber.status}</TableCell>
              <TableCell align="center">${subscriber.amount}</TableCell>
              <TableCell align="right">
                <IconButton>
                  <Icon color="error">close</Icon>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </Box>
  );
};

export default SimpleTable;
