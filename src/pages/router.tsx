import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from '../components/layouts';
import { ROUTE_PATHS } from '../constants/routePaths';
import AboutPage from './AboutPage';
import FormPage from './FormPage';
import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';

export const routesFromElements = createRoutesFromElements(
  <>
    <Route path={ROUTE_PATHS.homePage} element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path={ROUTE_PATHS.aboutPage} element={<AboutPage />} />
      <Route path={ROUTE_PATHS.formPage} element={<FormPage />} />
    </Route>
    <Route path={ROUTE_PATHS.notFoundPage} element={<NotFoundPage />} />
  </>
);

export const router = createBrowserRouter(routesFromElements);
