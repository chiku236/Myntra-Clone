import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const Breadcrumb=()=> {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb"  sx={{p:4}}>
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/"
        >
          Clothing
        </Link>

        <Link
          underline="hover"
          color="inherit"
          href="/"
        >
          Men Clothing
        </Link>

        <Link
          underline="hover"
          color="inherit"
          href="/"
        >
          Shirts for men
        </Link>

        <Typography color="text.primary"> Shirt</Typography>
      </Breadcrumbs>
    </div>
  );
}

export default Breadcrumb;
