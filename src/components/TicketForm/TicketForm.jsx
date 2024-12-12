import './TicketForm.scss';
import {useInput} from "../../hooks/inputHooks.js";
import { QRCodeCanvas } from "qrcode.react";
import Input from "../Input/Input.jsx";
import Title from "../Title/Title.jsx";
import Selector from "../Selector/Selector.jsx";
import Button from "../Button/Button.jsx";
import {buyTicket} from "../../constants/text/HomePageText.js";
import Paragraph from "../Paragraph/Paragraph.jsx";
import LoaderStore from "../../store/LoaderStore.js";
import {useState} from "react";
import TicketStore from "../../store/TicketStore.js";
import {types} from "../../constants/objects/Tickets.js";
const TicketForm = () => {
    const [ticketId, setTicketId] = useState('');
    const FCS = useInput('',{isEmpty: true,maxLength: 40, cyrillicError: true, isFcs: true});
    const type =  useInput('',{isEmpty: true});

    const submitHandler = async (e) => {
        e.preventDefault();
        LoaderStore.showLocalLoader();
        const response = await TicketStore.buy({name: FCS.value, ticketType: type.value});
        if(response?.status === 200) setTicketId(response?.data?.id);
        LoaderStore.hideLocalLoader();
    }

    const formFields = (
        <div className="ticketForm__content">
        <Input name="FCS" type='text' input={FCS}>ФИО</Input>
        <Selector
            options={types}
            input={type}
            placeholder="Тип билета"
        />
    </div>
    )
    return (
        <form className={'ticketForm'} onSubmit={submitHandler}>
            <Title level={2}>{ticketId ? 'Ваш билет' : 'Покупка билета'}</Title>
                {ticketId ?
                    <QRCodeCanvas
                        value={ticketId}
                        size={200}
                        width={'100px'}
                        height={'auto'}
                        bgColor={"#ffffff"}
                        fgColor={"#000000"}
                        level={"L"}
                    /> :
                    formFields
                }
            {!!ticketId || <Button
                type={'main'}
                disabled={!FCS.correct || !type.correct}
            >
                <Paragraph level={1} type={'bright'}>{buyTicket}</Paragraph>
            </Button>}
        </form>
    )
}

export default TicketForm;