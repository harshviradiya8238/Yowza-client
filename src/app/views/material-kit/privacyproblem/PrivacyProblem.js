import React from 'react';
import styled from '@emotion/styled';
import { makeStyles } from '@mui/styles';

import { Box } from '@mui/system';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Button } from '@mui/material';

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
const useStyles = makeStyles({
  main: {
    minHeight: '300px',
    // background: '',
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.6)',
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '0px 0px 10px 10px',
  },
  editor: {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '10px',
    '&>.ck.ck-editor': {
      marginTop: '10px',
    },
  },
  button: {
    textAlign: 'end',
  },
});
const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
}));
function TermsOfUse() {
  const classes = useStyles();
  return (
    <Container>
      <Box>
        <Heading>Privacy Problem</Heading>
      </Box>
      <Box>
        <Box className={classes.main}>
          <div className={classes.editor}>
            {/* <h2>Using CKEditor 5 build in React</h2> */}
            <CKEditor
              editor={ClassicEditor}
              data="<p>Hello welcome!</p>"
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                console.log('Editor is ready to use!', editor);
              }}
              placeholder="Type the content here!"
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log({ event, editor, data });
              }}
              onBlur={(event, editor) => {
                console.log('Blur.', editor);
              }}
              onFocus={(event, editor) => {
                console.log('Focus.', editor);
              }}
            />
          </div>
          <div className={classes.button}>
            <StyledButton variant="contained" color="primary">
              Submit
            </StyledButton>
            <StyledButton variant="contained" color="error">
              close
            </StyledButton>
          </div>
        </Box>
      </Box>
    </Container>
  );
}

export default TermsOfUse;
