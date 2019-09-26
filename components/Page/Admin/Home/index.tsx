import {
  Theme,
  makeStyles,
  createStyles,
} from '@material-ui/core/styles';
import {
  Typography,
} from '@material-ui/core';
import { AdminLayout } from '../../../Layout';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
  }),
);

export const AdminHomePageComponent = (props) => {
  const classes = useStyles({});

  return (
    <AdminLayout>
      <div className={classes.root}>
        <Typography variant="body1">
          You are now logged in as {props.user.email} :)
        </Typography>
      </div>
    </AdminLayout>
  );
};
