//import react
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { FormControl, InputAdornment } from '@material-ui/core';
import {AccountCircle} from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Form() {
  const classes = useStyles();
  const [name, setName] = React.useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  }
  return (
    <div>
      <FormControl>
        <form 
        className={classes.root} 
        noValidate autoComplete="off">
        <TextField
          required
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
          id="name"
          label="Name"
          variant="outlined"
          color="primary"
        />
        <TextField
          id="lastName"
          label="Last Name"
          variant="outlined"
          color="primary"
        />
        <TextField
          id="userName"
          label="User Name"
          variant="outlined"
          color="primary"
        />
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          color="primary"
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          autoComplete="current-password"
        />
        </form>
      </FormControl>
    </div>
  );
}