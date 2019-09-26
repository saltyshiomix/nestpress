import {
  Theme,
  makeStyles,
  createStyles,
} from '@material-ui/core/styles';
import {
  Typography,
  Paper,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(4),
      backgroundColor: 'rgba(255,255,255, 0.1)',
      backgroundImage: 'linear-gradient(357.5deg, rgba(255,255,255, 0) 8%, rgba(255,255,255, 0.15) 100%)',
    },
  }),
);

export const ArticlePaper = (props) => {
  const classes = useStyles({});

  const { article } = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h5" component="h2">
          This is a sheet of paper.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography>
      </Paper>
    </div>
  );
};
