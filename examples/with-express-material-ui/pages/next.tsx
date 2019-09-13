import React from 'react';
import {
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '../components/Link';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
      paddingTop: theme.spacing(12),
    },
  })
);

const Next = () => {
  const classes = useStyles({});

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Typography variant="h4" gutterBottom>
          Material-UI
        </Typography>
        <Typography gutterBottom>
          <Link href="/">Go to the home page</Link>
        </Typography>
        <Button variant="contained" color="primary">
          Do nothing button
        </Button>
      </div>
    </React.Fragment>
  );
};

export default Next;
