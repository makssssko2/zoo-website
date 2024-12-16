import Button from "../../components/Button/Button.jsx";
import Title from "../../components/Title/Title.jsx";
import CheckupsStore from "../../store/CheckupsStore.js";
import Table from "../../components/Table/Table.jsx";
import {useEffect} from "react";
import LoaderStore from "../../store/LoaderStore.js";
import {observer} from "mobx-react-lite";
const AdminCheckups = () => {
    useEffect(() => {
        async function fetch() {
            await CheckupsStore.getCheckups();
        }

        try {
            LoaderStore.showLocalLoader();
            fetch();
        } catch(e) {
            console.log(e);
        } finally {
            LoaderStore.hideLocalLoader();
        }
    }, [])
    const header = {
        "animalName": "Имя",
        "staff": "Персонал",
        "checkupDate": "Дата осмотра",
        "diagnosis": "Диагноз",
        "treatment": "Рацион"
    }


    return (
        <>
            <a href={CheckupsStore.getReportLink()} download={'Отчет осмотров'}  className={'adminTemplate__download'}>
                <Button type={'main'} >
                    <Title type={'bright'}>{'>'}</Title>
                </Button>
            </a>
            {CheckupsStore.data.length ?
                <Table header={header} items={CheckupsStore.data}/>:
                <Title type={'green'} level={4}>Данные за выбранный период отсутствуют</Title>}
        </>
    )
}


export default observer(AdminCheckups);