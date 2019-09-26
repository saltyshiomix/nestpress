import { HomePageComponent } from '../components';
import { Http } from '../lib';

const http = new Http();

const HomePage = (props) => {
  return <HomePageComponent {...props} />;
};

HomePage.getInitialProps = async ({ req, query }) => {
  const isServer = !!req;

  let articles;
  if (isServer) {
    articles = query.articles;
  } else {
    articles = await http.get('api/articles');
  }

  return {
    articles,
  };
};

export default HomePage;
