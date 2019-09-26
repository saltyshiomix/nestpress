import { PublicLayout } from '../../../Layout';

export const HomePageComponent = (props) => {
  // const { articles } = props;
  const articles = [
    { id: 1, title: 'Title 1', body: '# Hello World' },
    { id: 2, title: 'Title 2', body: '`some code`' },
  ];

  return (
    <PublicLayout>
      <p>Hello World</p>
      {articles.map((article, i) => (
        <p key={i}>{article.title}</p>
      ))}
    </PublicLayout>
  );
};
