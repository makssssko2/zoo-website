import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Layout from '../Layout/Layout.jsx';
import './MainTemplate.scss';

const MainTemplate = () => {
  return (
    <>
      <Header />
      <Layout type={'wide'} className={'mainTemplate'}>
        <Outlet />
      </Layout>
      <Footer />
    </>
  );
};

export default MainTemplate;
