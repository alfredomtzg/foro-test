//import react
import React, { useContext } from 'react';
// import MakeStyle to make ours styles
// import textField to form
// import formaControl an other componen from core
import {
  Button,
  Divider,
  TextField,
  makeStyles,
} from '@material-ui/core';
// value de context
import { Context } from '../../utils/Contex';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    rootp: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
function CustomizedSnackbars(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  useEffect(()=>{

    console.log('Se cargo use Efecct de customized');




  },[]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    </div>
  );
}




export default function Form() {
  const {
    values,
    handleChange,
    handleSubmit,
  } = useContext(Context);


  const classes = useStyles();

  return (
    <div className={classes.rootp}>

      <form
        className={classes.root}
        onSubmit={handleSubmit}
      >
      <Divider variant='fullWidth' />
        <TextField
          required
          fullWidth
          label="Name"
          variant="outlined"
          color="primary"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="User Name"
          variant="outlined"
          color="primary"
          name="username"
          autoComplete="current-username"
          value={values.username}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          required
          id="email"
          label="Email"
          variant="outlined"
          color="primary"
          name="email"
          autoComplete="current-email"
          value={values.email}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          required
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          autoComplete="current-password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        <Button variant="contained" color="secondary" type="submit" onClick={handleClick}>
          Send
        </Button>
      </form>

    </div>
  );
}
