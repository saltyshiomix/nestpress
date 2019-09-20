import {
  Layout,
  Home,
} from '../components';

const HomePage = (props) => {
  return (
    <Layout>
      <Home {...props} />
    </Layout>
  );
};

HomePage.getInitialProps = async ({ req }) => {
  const { user } = req;
  return {
    user,
  };
};

export default HomePage;
