import React from 'react';
import {
  Typography,
  Card,
  CardContent,
} from '@material-ui/core';
import { AdminLayout } from '../../../Layout';

export const AdminHomePageComponent = (props) => {
  return (
    <AdminLayout>
      <Card>
        <CardContent>
          <Typography variant="body1">
            You are now logged in as {props.user.email} :)
          </Typography>
        </CardContent>
      </Card>
    </AdminLayout>
  );
};
