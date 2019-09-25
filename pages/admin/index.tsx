import {
  Layout,
  Admin,
} from '../../components';

const AdminIndexPage = (props) => {
  return (
    <Layout>
      <Admin {...props} />
    </Layout>
  );
};

AdminIndexPage.getInitialProps = async ({ req }) => {
  const { user } = req;
  return {
    user,
  };
};

export default AdminIndexPage;
