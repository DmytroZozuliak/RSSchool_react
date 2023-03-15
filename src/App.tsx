import { router } from './pages/Root';
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
