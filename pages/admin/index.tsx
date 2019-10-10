import { AdminHomePageComponent } from '../../components';
import { Http } from '../../lib';

const http = new Http();

const AdminHomePage = (props) => {
  return <AdminHomePageComponent {...props} />;
};

AdminHomePage.getInitialProps = async ({ req, query }) => {
  const isServer = !!req;
  return isServer ? query : await http.get('api/admin/me');
};

export default AdminHomePage;
