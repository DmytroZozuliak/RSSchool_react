import { render } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { ROUTE_PATHS } from '../constants/routePaths';
import { routesFromElements } from '../pages/router';

const renderWithRouter = (initialRoute = ROUTE_PATHS.homePage) => {
  const router = createMemoryRouter(routesFromElements, {
    initialEntries: [initialRoute],
  });

  return render(<RouterProvider router={router} />);
};

export default renderWithRouter;
