import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

 function Buttons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" color="success">
        Success
      </Button>
    </Stack>
  );
}
export default Buttons