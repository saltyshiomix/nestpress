import { AdminHomePageComponent } from '../../components';
import { Http } from '../../lib';

const http = new Http();

const AdminHomePage = (props) => {
  return <AdminHomePageComponent {...props} />;
};

AdminHomePage.getInitialProps = async ({ req, query }) => {
  const isServer = !!req;

  let user;
  if (isServer) {
    user = query.user;
  } else {
    user = await http.get('api/admin/me');
  }

  return {
    user,
  };
};

export default AdminHomePage;
