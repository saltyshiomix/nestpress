import { Admin } from '../../components';

const AdminIndexPage = (props) => {
  return <Admin {...props} />;
};

AdminIndexPage.getInitialProps = async ({ req }) => {
  const { user } = req;
  return {
    user,
  };
};

export default AdminIndexPage;
