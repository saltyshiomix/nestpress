import {
  Layout,
  Admin,
} from '../../components';

const HomePage = (props) => {
  return (
    <Layout>
      <Admin {...props} />
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
