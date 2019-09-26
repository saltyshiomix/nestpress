import {
  PublicLayout,
  ArticlePaper,
} from '../../..';

export const HomePageComponent = (props) => {
  // const { articles } = props;
  const articles = [
    { id: 1, title: 'Title 1', body: '# Hello World' },
    { id: 2, title: 'Title 2', body: '`some code`' },
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
