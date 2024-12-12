import './../Modal.scss';
import Cross from "../../../assets/icons/Base/Cross.jsx";
import ModalStore from "../../../store/ModalStore.js";

const ModalWrapper = ({children,...props}) => {
    const {
        className
    } = props;

    return (
        <div className={'ModalWrapper'}>
            <div className={`ModalWrapper__modal ${className}`}>
                <button className={'ModalWrapper__closeBtn'} onClick={ModalStore.hideModal}>
                    <Cross />
                </button>
                {children}
            </div>
        </div>
    )
}

export default ModalWrapper;