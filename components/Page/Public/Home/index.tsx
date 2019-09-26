import {
  PublicLayout,
  ArticlePaper,
} from '../../..';

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
  ];

  return (
    <PublicLayout>
      {articles.map((article, i) => (
        <ArticlePaper
          key={i}
          {...{ article }}
        />
      ))}
    </PublicLayout>
  );
};
