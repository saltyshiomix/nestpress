import { AdminHomePageComponent } from '../../components';
import { Http } from '../../lib';

const http = new Http();

const AdminHomePage = (props) => {
  return <AdminHomePageComponent {...props} />;
};

AdminHomePage.getInitialProps = async ({ req }) => {
  const isServer = !!req;

  let user;
  if (isServer) {
    user = req.user;
  } else {
    user = await http.get('api/me');
  }

  return {
    user,
  };
};

export default AdminHomePage;
