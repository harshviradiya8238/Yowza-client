import {
  Box,
  Icon,
  IconButton,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  ToggleButton,
} from '@mui/material';
import { useState } from 'react';
import Switch from '@mui/material/Switch';
const label = { inputProps: { 'aria-label': 'Switch demo' } };

const StyledTable = styled(Table)(() => ({
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
    designation: 'Lending Manager	',
    email: 'shahil@gmail.com',
    phone: '9867879867',
    company: 'ABC Fintech LTD.',
  },
  {
    name: 'kessy bryan',
    designation: 'Lending Manager	',
    email: 'shahil@gmail.com',
    phone: '9867879867',
    company: 'My Fintech LTD.',
  },
  {
    name: 'kessy bryan',
    designation: 'Lending Manager	',
    email: 'shahil@gmail.com',
    phone: '9867879867',
    company: 'My Fintech LTD.',
  },
  {
    name: 'james cassegne',
    designation: 'Lending Manager	',
    email: 'shahil@gmail.com',
    phone: '9867879867',
    company: 'Collboy Tech LTD.',
  },
  {
    name: 'lucy brown',
    designation: 'Lending Manager	',
    email: 'shahil@gmail.com',
    phone: '9867879867',
    company: 'ABC Fintech LTD.',
  },
  {
    name: 'lucy brown',
    designation: 'Lending Manager	',
    email: 'shahil@gmail.com',
    phone: '9867879867',
    company: 'ABC Fintech LTD.',
  },
  {
    name: 'lucy brown',
    designation: 'Lending Manager	',
    email: 'shahil@gmail.com',
    phone: '9867879867',
    company: 'ABC Fintech LTD.',
  },
  {
    name: 'lucy brown',
    designation: 'Lending Manager	',
    email: 'shahil@gmail.com',
    phone: '9867879867',
    company: 'ABC Fintech LTD.',
  },
  {
    name: 'lucy brown',
    designation: 'Lending Manager	',
    email: 'shahil@gmail.com',
    phone: '9867879867 ',
    company: 'ABC Fintech LTD.',
  },
];

const PaginationTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box width="100%" overflow="auto">
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="center">AUTHORITY NAME</TableCell>
            <TableCell align="center" width="200px">
              AUTHORITY DESIGNATION
            </TableCell>
            <TableCell align="center">PHONE</TableCell>
            <TableCell align="center" width="200px">
              EMAIL
            </TableCell>
            <TableCell align="right">BLOCK/UNBLOCK</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {subscribarList
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((subscriber, index) => (
              <TableRow key={index}>
                <TableCell align="left">{subscriber.name}</TableCell>
                <TableCell align="center">{subscriber.company}</TableCell>
                <TableCell align="center">{subscriber.designation}</TableCell>
                <TableCell align="center">{subscriber.phone}</TableCell>
                <TableCell align="center">{subscriber.email}</TableCell>
                <TableCell align="right">
                  <Switch {...label} defaultChecked />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </StyledTable>

      <TablePagination
        sx={{ px: 2 }}
        page={page}
        component="div"
        rowsPerPage={rowsPerPage}
        count={subscribarList.length}
        onPageChange={handleChangePage}
        rowsPerPageOptions={[5, 10, 25]}
        onRowsPerPageChange={handleChangeRowsPerPage}
        nextIconButtonProps={{ 'aria-label': 'Next Page' }}
        backIconButtonProps={{ 'aria-label': 'Previous Page' }}
      />
    </Box>
  );
};

export default PaginationTable;
