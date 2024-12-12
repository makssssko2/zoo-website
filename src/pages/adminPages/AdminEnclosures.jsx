import Button from "../../components/Button/Button.jsx";
import Title from "../../components/Title/Title.jsx";
import EnclosuresStore from "../../store/EnclosuresStore.js";
import Table from "../../components/Table/Table.jsx";
import {useEffect} from "react";
import LoaderStore from "../../store/LoaderStore.js";
import {observer} from "mobx-react-lite";
import ModalStore from "../../store/ModalStore.js";
const AdminEnclosures = () => {
    useEffect(() => {
       async function fetch() {
           await EnclosuresStore.getAnimals();
           await EnclosuresStore.getEnclosures();
       }
       try {
           LoaderStore.showLocalLoader();
           fetch();
       } catch(e) {

       } finally {
           LoaderStore.hideLocalLoader();
       }
    }, [])

    const header = {
        "enclosure": "Вольер",
        "name": "Имя",
        "species": "Вид",
        "dateOfBirth": "Дата рождения",
        "arrivalDate": "Дата заселения",
    }

    const editHandler = (item) => {
        EnclosuresStore.setCurrentItem(item);
        ModalStore.showModal('edit');
    }
    return (
        <>
            <a href={EnclosuresStore.getReportLink()} download={'Отчет осмотров'} className={'adminTemplate__download'}>
                <Button type={'main'}>
                    <Title type={'bright'}>{'>'}</Title>
                </Button>
            </a>
            {EnclosuresStore.animals.length ?
                <Table header={header} items={EnclosuresStore.animals} editable onClick={editHandler}/> :
                <Title type={'green'} level={4}>Данные за выбранный период отсутствуют</Title>}
        </>
    )
}


export default observer(AdminEnclosures);