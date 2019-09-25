import {
  Layout,
  Admin,
} from '../../components';

const AdminPage = (props) => {
  return (
    <Layout>
      <Admin {...props} />
    </Layout>
  );
};

AdminPage.getInitialProps = async ({ req }) => {
  const { user } = req;
  return {
    user,
  };
};

export default AdminPage;
