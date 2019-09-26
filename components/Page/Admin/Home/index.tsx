import {
  Button,
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';
import { AdminLayout } from '../../../Layout';
import { Http } from '../../../../lib';

const http = new Http();

export const AdminHomePageComponent = (props) => {
  const onClickLogout = async (e: React.MouseEvent) => {
    e.preventDefault();
    const isLoggedOut: boolean = await http.post('api/auth/logout');
    if (isLoggedOut) {
      location.href = '/admin/login';
    }
  };

  return (
    <AdminLayout>
      <Card>
        <CardContent>
          <Typography variant="body1">
            You are now logged in as {props.user.email} :)
          </Typography>
          <br />
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            size="large"
            onClick={onClickLogout}
          >
            LOGOUT
          </Button>
        </CardContent>
      </Card>
    </AdminLayout>
  );
};
