import { AdminHomePageComponent } from '../../components';

const AdminHomePage = (props) => {
  return <AdminHomePageComponent {...props} />;
};

AdminHomePage.getInitialProps = async ({ req }) => {
  const { user } = req;
  return {
    user,
  };
};

export default AdminHomePage;
