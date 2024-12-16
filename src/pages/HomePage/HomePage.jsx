import './HomePage.scss';
import { observer } from 'mobx-react-lite';
import Title from '../../components/Title/Title.jsx';
import Paragraph from '../../components/Paragraph/Paragraph.jsx';
import Button from '../../components/Button/Button.jsx';
import {
  description,
  title,
  buyTicket,
} from '../../constants/text/HomePageText.js';
import ModalStore from '../../store/ModalStore.js';
const HomePage = () => {
  const buyTicketHandler = () => {
    ModalStore.showModal('ticket');
  };

  return (
    <div className="homePage">
      <div className="homePage__hero" />
      <div className="homePage__content">
        <div className="homePage__text">
          <Title level={2} type={'default'}>
            {title}
          </Title>
          <Paragraph level={2} type={'default'}>
            {description}
          </Paragraph>
        </div>
        <Button type={'main'} disabled={false} onClick={buyTicketHandler}>
          <Paragraph level={1} type={'bright'}>
            {buyTicket}
          </Paragraph>
        </Button>
      </div>
    </div>
  );
};

export default observer(HomePage);
