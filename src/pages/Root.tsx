import { createBrowserRouter } from 'react-router-dom';
import AboutPage from './AboutPage';
import HomePage from './HomePage';

export const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '*', element: <HomePage /> },
]);
