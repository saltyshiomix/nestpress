import {
  FormEvent,
  ChangeEvent,
  useState,
} from 'react';
import {
  Theme,
  makeStyles,
  createStyles,
} from '@material-ui/core/styles';
import {
  Box,
  FormControl,
  TextField,
  useMediaQuery,
} from '@material-ui/core';
import { Http } from '../../../lib';

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

export const AdminLoginWithDesktop = () => {
  const desktop: boolean = useMediaQuery('(min-width:840px)');
  const classes = useStyles({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!desktop) {
    return null;
  }

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
