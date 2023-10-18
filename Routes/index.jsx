import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from '../assets/scss/globalstyle';
import PrivateRoute from './PrivateRoute';
import routes from './routeArray';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

export default function Router() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        {routes.map(({ path, Component, exact, isProtected }) => (
          <Route
            path={path}
            key={path}
            exact={exact}
            element={
              isProtected ? (
                <PrivateRoute>
                  <Sidebar />
                  <Navbar />
                  <div className="page-body">
                    <div className="border border-border-divder bg-white rounded-lg px-5 pb-5 pt-6">
                      <Component />
                    </div>
                  </div>
                </PrivateRoute>
              ) : (
                <div className="bg-bg-gray">
                  <Component />
                </div>
              )
            }
          />
        ))}
      </Routes>
    </>
  );
}
