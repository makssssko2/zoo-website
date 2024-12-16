import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import AppRouting from './AppRouting.jsx';
import Loader from '../../components/Loader/index.jsx';
import LoaderStore from '../../store/LoaderStore.js';
import AuthStore from '../../store/AuthStore.js';
import ModalStore from '../../store/ModalStore.js';
import Modal from '../../components/Modal/Modal.jsx';

const AppInitComponent = () => {
  useEffect(() => {
    (async () => {
      LoaderStore.showGlobalLoader();
      await AuthStore.checkAuth();
      LoaderStore.hideGlobalLoader();
    })();
  }, []);

  useEffect(() => {
    if (ModalStore.isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [ModalStore.isOpen]);
  return LoaderStore.globalLoaderLoading ? (
    <Loader type={'global'} />
  ) : (
    <>
      <AppRouting />
      {LoaderStore.localLoaderLoading && <Loader type={'local'} />}
      {ModalStore.isOpen && <Modal type={ModalStore.type} />}
    </>
  );
};

export default observer(AppInitComponent);
