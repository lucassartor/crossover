import MuiBox from '@mui/material/Box';

const Box = (props) =>
  <MuiBox
    p={2}
    border={1}
    display='inline-block'
    {...props}
  />;

export default Box;
