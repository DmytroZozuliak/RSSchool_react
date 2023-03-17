import { render } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { routesFromElements } from '../pages/router';

const renderWithRouter = (initialRoute = '/') => {
  const router = createMemoryRouter(routesFromElements, {
    initialEntries: [initialRoute],
  });

  return render(<RouterProvider router={router} />);
};

export default renderWithRouter;
