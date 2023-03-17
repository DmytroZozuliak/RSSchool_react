import { router } from './pages/router';
import { RouterProvider } from 'react-router-dom';
import Loader from './components/Loader';

function App() {
  return (
    <>
      <RouterProvider router={router} fallbackElement={<Loader />} />
    </>
  );
}

export default App;
