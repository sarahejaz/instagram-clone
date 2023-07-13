import './Upload.css';
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function Upload() {
  return (
    <div>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '78%',
          maxWidth: 400,
          height: 300,
          backgroundColor: 'white',
          borderRadius: '12px',
          border: '2px solid lightgray',
          boxShadow: 20,
        }}
      >
        <p>Upload</p>
        <form action="/upload" encType="multipart/form-data">
          <label class="upload__image">
            <p style={{ textAlign: 'center' }}>+</p>
            <input
              type="file"
              name="file"
              onChange={() => console.log('changed')}
            />
          </label>
          <br />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </Box>
    </div>
  );
}
