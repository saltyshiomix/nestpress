import { useState } from 'react';
import {
  Theme,
  makeStyles,
  createStyles,
} from '@material-ui/core/styles';
import {
  Box,
  FormControl,
  TextField,
} from '@material-ui/core';
import { Http } from '../../../../lib';
import { User } from '../../../../interfaces';

const http = new Http();

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
      paddingTop: theme.spacing(28),
    },
    container: {
      maxWidth: 480,
      margin: `0 auto`,
    },
    box: {
      padding: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
      borderLeft: '2px solid lime',
    },
    formControl: {
      minWidth: 300,
      marginBottom: theme.spacing(2),
    },
  }),
);

export const LoginWithDesktop = () => {
  const classes = useStyles({});

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    }

    try {
      const user: User = await http.post('api/auth/login', data);
      if (user) {
        location.href = '/';
      } else {
        alert('Failed to login!');
      }
    } catch (err) {
      alert('Failed to login!');
    }
  }

  return (
    <div className={classes.root}>
      <form
        onSubmit={handleSubmit}
        className={classes.container}
        autoComplete="off"
        noValidate
      >
        <Box className={classes.box}>
          <FormControl className={classes.formControl} variant="outlined">
            <TextField
              id="email"
              name="email"
              type="email"
              label="EMAIL"
              value={email}
              onChange={handleEmail}
            />
          </FormControl>
          <FormControl className={classes.formControl} variant="outlined">
            <TextField
              id="password"
              name="password"
              type="password"
              label="PASSWORD"
              value={password}
              onChange={handlePassword}
            />
          </FormControl>
          <input type="submit" style={{ display: 'none' }} />
        </Box>
      </form>
    </div>
  );
};
