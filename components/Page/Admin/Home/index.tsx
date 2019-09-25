import {
  Theme,
  makeStyles,
  createStyles,
} from '@material-ui/core/styles';
import {
  Button,
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';
import { AdminLayout } from '../../../Layout';
import { Http } from '../../../../lib';

const http = new Http();

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
      paddingTop: theme.spacing(8),
    },
    container: {
      width: 480,
      margin: `${theme.spacing(2)}px auto`,
    },
    card: {
      padding: theme.spacing(4),
    },
  }),
);

export const Admin = (props) => {
  const classes = useStyles({});

  const onClickLogout = async (e: React.MouseEvent) => {
    e.preventDefault();
    const isLoggedOut: boolean = await http.post('api/auth/logout');
    if (isLoggedOut) {
      location.href = '/admin/login';
    }
  };

  return (
    <AdminLayout>
      <div className={classes.root}>
        <div className={classes.container}>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="body1">
                You are now logged in as {props.user.email} :)
              </Typography>
              <br />
              <Button
                type="submit"
                variant="outlined"
                color="primary"
                size="large"
                onClick={onClickLogout}
              >
                LOGOUT
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};
