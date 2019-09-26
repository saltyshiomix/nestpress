import React, { useState } from 'react';
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
import {
  Http,
  useMediaQueryTablet,
} from '../../../../../lib';

const http = new Http();

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: '100vh',
      textAlign: 'center',
      paddingTop: theme.spacing(30),
      backgroundColor: '#000',
      backgroundImage: 'linear-gradient(30deg, #111 12%, transparent 12.5%, transparent 87%, #111 87.5%, #111), linear-gradient(150deg, #111 12%, transparent 12.5%, transparent 87%, #111 87.5%, #111), linear-gradient(30deg, #111 12%, transparent 12.5%, transparent 87%, #111 87.5%, #111), linear-gradient(150deg, #111 12%, transparent 12.5%, transparent 87%, #111 87.5%, #111), linear-gradient(60deg, #333 25%, transparent 25.5%, transparent 75%, #333 75%, #333), linear-gradient(60deg, #222 25%, transparent 25.5%, transparent 75%, #222 75%, #222)',
      backgroundPosition: `0 0, 0 0, ${theme.spacing(21)}px ${theme.spacing(36.8)}px, ${theme.spacing(21)}px ${theme.spacing(36.8)}px, 0 0, ${theme.spacing(21)}px ${theme.spacing(36.8)}px`,
      backgroundSize: theme.spacing(21, 36.8),
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

export const WithTablet = () => {
  const tablet: boolean = useMediaQueryTablet();
  const classes = useStyles({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!tablet) {
    return null;
  }

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    }

    try {
      const { email } = await http.post('api/auth/login', data);
      if (email) {
        location.href = '/admin';
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
        onSubmit={onSubmit}
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
              onChange={onChangeEmail}
            />
          </FormControl>
          <FormControl className={classes.formControl} variant="outlined">
            <TextField
              id="password"
              name="password"
              type="password"
              label="PASSWORD"
              value={password}
              onChange={onChangePassword}
            />
          </FormControl>
          <input type="submit" value="SUBMIT" style={{ display: 'none' }} />
        </Box>
      </form>
    </div>
  );
};
