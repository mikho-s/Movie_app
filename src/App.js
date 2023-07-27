import React from 'react';
import HomePage from './pages/HomePage';
import { Route, RouterProvider, ScrollRestoration, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './style/App.scss';
import { routes } from './router';
import Layout from '@pages/Layout';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />} >
        <Route index element={<HomePage />} />
        {routes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
            exact={route.exact}
          />
        ))}
      </Route>
    </>

  )
)


function App() {
  return (
    <div className="App">

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
