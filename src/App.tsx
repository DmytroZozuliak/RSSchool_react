import { router } from './pages/Root';
import { RouterProvider } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
