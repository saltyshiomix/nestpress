import {
  Theme,
  makeStyles,
  createStyles,
} from '@material-ui/core/styles';
import { GeneralLayout } from '../../../Layout';
import { ArticlePaper } from '../../../ArticlePaper';
import {
  useMediaQueryMobile,
  useMediaQueryTablet,
} from '../../../../lib';

const useStyles = (props) => {
  const mobile = useMediaQueryMobile();
  const tablet = useMediaQueryTablet();

  return makeStyles((theme: Theme) => {
    if (mobile) {
      return createStyles({
        root: {
          paddingTop: theme.spacing(2),
        },
      });
    }

    if (tablet) {
      return createStyles({
        root: {
          paddingTop: theme.spacing(3),
        },
      });
    }

    return createStyles({
      root: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(2),
      },
    });
  })(props);
};

export const HomePageComponent = (props) => {
  // const { articles } = props;
  const articles = [
    {
      id: 1,
      title: 'The Production Ready Personal Blogging System',
      description: 'On Top of NestJS, NEXT.js and Material UI',
    },
    {
      id: 2,
      title: 'Sophisticated Dark Theme',
      description: 'Soft Paper Style Articles that is Easy on the Eyes',
    },
    {
      id: 3,
      title: 'The Production Ready Personal Blogging System',
      description: 'On Top of NestJS, NEXT.js and Material UI',
    },
    {
      id: 4,
      title: 'Sophisticated Dark Theme',
      description: 'Soft Paper Style Articles that is Easy on the Eyes',
    },
    {
      id: 5,
      title: 'The Production Ready Personal Blogging System',
      description: 'On Top of NestJS, NEXT.js and Material UI',
    },
    {
      id: 6,
      title: 'Sophisticated Dark Theme',
      description: 'Soft Paper Style Articles that is Easy on the Eyes',
    },
  ];

  const classes = useStyles({});

  return (
    <GeneralLayout>
      <div className={classes.root}>
        {articles.map((article, i) => (
          <ArticlePaper
            key={i}
            {...{ article }}
          />
        ))}
      </div>
    </GeneralLayout>
  );
};
