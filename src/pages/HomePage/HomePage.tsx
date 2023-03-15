import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      HomePage
      <Link to={'/about'}>to about page</Link>
    </div>
  );
};

export default HomePage;
