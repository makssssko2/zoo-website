import './Modal.scss';
import ModalWrapper from "./components/ModalWrapper.jsx";
import EditForm from "../EditForm/EditForm.jsx";
import TicketForm from "../TicketForm/TicketForm.jsx";
const Modal = ({...props}) => {
    const {
        type
    } = props;

    const ticketModalContent = (
        <TicketForm />
    )

    const editModalContent = (
        <EditForm />
    )

    if(type === 'ticket') {
        return (
            <ModalWrapper>
                {ticketModalContent}
            </ModalWrapper>
        )
    }
    if(type === 'edit') {
        return (
            <ModalWrapper>
                {editModalContent}
            </ModalWrapper>
        )
    }


}

export default Modal;