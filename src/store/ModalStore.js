import { makeAutoObservable, runInAction } from "mobx";

class ModalStore {
    type;
    isOpen;
    constructor() {
        this.type = '';
        this.isOpen = false;
        makeAutoObservable(this, {}, { autoBind: true });
    }

    showModal(type) {
        runInAction(() => {
            this.isOpen = true;
            this.type = type;
        });
    }
    hideModal() {
        runInAction(() => {
            this.isOpen = false;
            this.type = '';
        });
    }



}
export default new ModalStore();
