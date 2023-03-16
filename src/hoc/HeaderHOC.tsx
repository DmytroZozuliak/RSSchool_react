import { useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import { getPathName } from '../utils/getPathName';

const HeaderHoc = () => {
  const location = useLocation();
  const path = getPathName(location.pathname);

  return <Header path={path} />;
};

export default HeaderHoc;
