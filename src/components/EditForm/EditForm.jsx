import '/src/components/TicketForm/TicketForm.scss';
import { useInput } from '../../hooks/inputHooks.js';
import Input from '../Input/Input.jsx';
import Title from '../Title/Title.jsx';
import Selector from '../Selector/Selector.jsx';
import Button from '../Button/Button.jsx';
import Paragraph from '../Paragraph/Paragraph.jsx';
import LoaderStore from '../../store/LoaderStore.js';
import EnclosuresStore from '../../store/EnclosuresStore.js';
import AnimalStore from '../../store/AnimalStore.js';
import ModalStore from '../../store/ModalStore.js';
const EditForm = () => {
  const item = EnclosuresStore.currentItem;
  const enclosure = useInput(item.enclosure.id, {});
  const name = useInput(item.name, { isEmpty: true });
  const species = useInput(item.species, { isEmpty: true });
  const birthDate = useInput(item.dateOfBirth, { isEmpty: true });
  console.log(JSON.stringify(item));
  const arrivalDate = useInput(item.arrivalDate, { isEmpty: true });
  const saveHandler = async (e, inputs) => {
    e.preventDefault();
    LoaderStore.showLocalLoader();

    let noChanges = true;
    for (let field in inputs) {
      noChanges = noChanges && field.isDirty;
    }
    if (!noChanges) {
      await AnimalStore.updateAnimals({
        id: item.id,
        name: name.value,
        species: species.value,
        birthDate: birthDate.value,
        origin: item.origin,
        arrivalDate: arrivalDate.value,
        enclosure: enclosure.value,
      });
      await EnclosuresStore.getAnimals();
    }
    ModalStore.hideModal();
    LoaderStore.hideLocalLoader();
  };

  const deleteHandler = async (e) => {
    e.preventDefault();
    LoaderStore.showLocalLoader();
    await AnimalStore.deleteAnimal(item.id);
    await EnclosuresStore.getAnimals();
    ModalStore.hideModal();
    LoaderStore.hideLocalLoader();
  };

  const enclosuresOptions = EnclosuresStore.enclosures.reduce((acc, item) => {
    acc.push({ value: item.id, label: item.description });
    return acc;
  }, []);

  const formFields = (
    <div className="ticketForm__content">
      <Input name="name" type="text" input={name}>
        Имя
      </Input>
      <Input name="specie" type="text" input={species}>
        ФИО
      </Input>
      <Selector
        options={enclosuresOptions}
        input={enclosure}
        placeholder="Тип билета"
      />
      <Input name="birth" type="text" input={birthDate}>
        Дата рождения
      </Input>
      <Input name="arrival" type="text" input={arrivalDate}>
        Дата прибытия
      </Input>
    </div>
  );
  return (
    <form
      className={'ticketForm'}
      onSubmit={(e) =>
        saveHandler(e, {
          item,
          enclosure,
          name,
          species,
          birthDate,
          arrivalDate,
        })
      }
    >
      <Title level={2}>Редактировать</Title>
      {formFields}
      <div className="ticketForm__buttons">
        <Button type={'main'} style={'full-width'}>
          <Paragraph level={1} type={'bright'}>
            Сохранить
          </Paragraph>
        </Button>
        <Button
          type={'sub'}
          style={'full-width'}
          holdingOnClick
          onClick={deleteHandler}
        >
          <Paragraph level={1} type={'green'}>
            Удалить
          </Paragraph>
        </Button>
      </div>
    </form>
  );
};

export default EditForm;
