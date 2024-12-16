import { Outlet } from 'react-router-dom';
import Switch from '../../components/Switch/Switch.jsx';
import './AdminTemplate.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { adminRoutes } from '../../constants/routes/index.js';
import AuthStore from '../../store/AuthStore.js';
import LoaderStore from '../../store/LoaderStore.js';
const AdminTemplate = () => {
  const [currentIndex, setCurrecntIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    LoaderStore.showGlobalLoader();
    if (!AuthStore.isLoading) {
      if (!AuthStore.isAuth) {
        navigate('/');
      }
    }
    const polling = setInterval(() => {
      if (!AuthStore.isLoading) {
        if (!AuthStore.isAuth) {
          navigate('/');
        }
        clearInterval(polling);
      }
    }, 500);
    LoaderStore.hideGlobalLoader();
  }, []);

  useEffect(() => {
    navigate(adminRoutes[currentIndex].path);
  }, [currentIndex]);

  return (
    <div className="adminTemplate">
      <div className="adminTemplate__content">
        <Outlet />
      </div>
      <Switch
        className="adminTemplate__switch"
        current={adminRoutes[currentIndex]}
        isFirst={currentIndex === 0}
        isLast={currentIndex === adminRoutes.length - 1}
        prev={() => setCurrecntIndex((prev) => prev - 1)}
        next={() => setCurrecntIndex((prev) => prev + 1)}
      />
    </div>
  );
};

export default AdminTemplate;
