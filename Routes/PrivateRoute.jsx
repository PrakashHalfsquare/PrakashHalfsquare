import React from 'react';

import { useSelector } from 'react-redux';

import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const isAuthorized = useSelector(state => state.app.isAuthorized);
  return isAuthorized ? children : <Navigate to="/" />;
}

export default PrivateRoute;
