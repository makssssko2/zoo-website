import Button from '../../components/Button/Button.jsx';
import Title from '../../components/Title/Title.jsx';
import TicketStore from '../../store/TicketStore.js';
import Table from '../../components/Table/Table.jsx';
import { useEffect } from 'react';
import LoaderStore from '../../store/LoaderStore.js';
import { observer } from 'mobx-react-lite';

const AdminTickets = () => {
  useEffect(() => {
    async function fetch() {
      await TicketStore.getTickets();
    }

    try {
      LoaderStore.showLocalLoader();
      fetch();
    } catch (e) {
      console.log(e);
    } finally {
      LoaderStore.hideLocalLoader();
    }
  }, []);
  const header = {
    name: 'ФИО',
    ticketType: 'Тип билета',
    price: 'Стоимость',
    purchaseDate: 'Дата посещения',
  };
  return (
    <>
      <a
        href={TicketStore.getReportLink()}
        download={'Отчет осмотров'}
        className={'adminTemplate__download'}
      >
        <Button type={'main'}>
          <Title type={'bright'}>{'>'}</Title>
        </Button>
      </a>
      {TicketStore.data.length ? (
        <Table header={header} items={TicketStore.data} />
      ) : (
        <Title type={'green'} level={4}>
          Данные за выбранный период отсутствуют
        </Title>
      )}
    </>
  );
};

export default observer(AdminTickets);
