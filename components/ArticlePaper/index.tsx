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
      backgroundColor: 'rgba(255,255,255,.12)',
      backgroundImage: 'linear-gradient(357.5deg, rgba(255,255,255,0) 36%, rgba(255,255,255,.12) 100%)',
    },
    title: {
      marginBottom: theme.spacing(.8),
      color: '#d8d8d8',
      textShadow: '1px 1.5px 0 #111',
    },
    description: {
      color: theme.palette.text.primary,
    },
  }),
);

export const ArticlePaper = (props) => {
  const classes = useStyles({});

  const { article } = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography
          className={classes.title}
          variant="h5"
          component="h2"
        >
          {article.title}
        </Typography>
        <Typography
          className={classes.description}
          component="p"
        >
          {article.description}
        </Typography>
      </Paper>
    </div>
  );
};
