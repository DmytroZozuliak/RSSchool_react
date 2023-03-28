import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom';
import Layout from '../components/layouts';
import { ROUTE_PATHS } from '../constants/routePaths';
import AboutPage from './AboutPage';
import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';

export const routesFromElements = createRoutesFromElements(
  <>
    <Route path={ROUTE_PATHS.homePage} element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path={ROUTE_PATHS.aboutPage} element={<AboutPage />} />
    </Route>
    <Route path={ROUTE_PATHS.notFoundPage} element={<NotFoundPage />} />
    <Route path={ROUTE_PATHS.other} element={<Navigate to={ROUTE_PATHS.notFoundPage} />} />
  </>
);

export const router = createBrowserRouter(routesFromElements);
