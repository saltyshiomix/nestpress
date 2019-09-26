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
import { Http } from '../../../../lib';

const http = new Http();

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000',
      backgroundImage: 'linear-gradient(30deg, #111 12%, transparent 12.5%, transparent 87%, #111 87.5%, #111), linear-gradient(150deg, #111 12%, transparent 12.5%, transparent 87%, #111 87.5%, #111), linear-gradient(30deg, #111 12%, transparent 12.5%, transparent 87%, #111 87.5%, #111), linear-gradient(150deg, #111 12%, transparent 12.5%, transparent 87%, #111 87.5%, #111), linear-gradient(60deg, #333 25%, transparent 25.5%, transparent 75%, #333 75%, #333), linear-gradient(60deg, #222 25%, transparent 25.5%, transparent 75%, #222 75%, #222)',
      backgroundPosition: `0 0, 0 0, ${theme.spacing(21)}px ${theme.spacing(36.8)}px, ${theme.spacing(21)}px ${theme.spacing(36.8)}px, 0 0, ${theme.spacing(21)}px ${theme.spacing(36.8)}px`,
      backgroundSize: theme.spacing(21, 36.8),
    },
    container: {
      width: '100vw',
      maxWidth: 480,
    },
    box: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      paddingLeft: '16%',
      borderLeft: '2px solid lime',
    },
    formControl: {
      width: 'calc(100% - (100% * (100 / 84) * .16))',
      marginTop: theme.spacing(1.2),
      marginBottom: theme.spacing(2.4),
    },
  }),
);

export const AdminLoginPageComponent = () => {
  const classes = useStyles({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
