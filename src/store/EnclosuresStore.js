import { makeAutoObservable, runInAction } from "mobx";
import api from "../services/axios/api.js";
import {
    API_URL,
    ENCLOSURES_REPORT,
    ANIMALS_GET,
    ENCLOSURES_REPORT_TXT,
    ENCLOSURES_GET
} from "../constants/endpoints/endpointConst.js";

class EnclosuresStore {
    searchValue;
    animals;
    enclosures;
    currentItem;

    constructor() {
        this.searchValue = '';
        this.animals = [];
        this.enclosures = [];
        this.currentItem = {};
        makeAutoObservable(this, {}, { autoBind: true });
    }

    getAnimals = async () => {
        let response;
        try {
            response = await api.get(ANIMALS_GET);
            runInAction(() => {
                this.animals = response?.data;
            })
        } catch(err) {
            console.error(err);
        }
    }

    getEnclosures = async () => {
        let response;
        try {
            response = await api.get(ENCLOSURES_GET);
            runInAction(() => {
                this.enclosures = response?.data;
            })
        } catch(err) {
            console.error(err);
        }
    }

    getReportLink = () => {
        return API_URL + ENCLOSURES_REPORT_TXT;
    }



    setCurrentItem = (item) => {
        this.currentItem = item;
    }



}
export default new EnclosuresStore();
