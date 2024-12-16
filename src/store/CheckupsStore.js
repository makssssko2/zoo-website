import { makeAutoObservable, runInAction } from "mobx";
import api from "../services/axios/api.js";
import {
    API_URL,
    CHECKUPS_REPORT,
    CHECKUPS_REPORT_TXT,
} from "../constants/endpoints/endpointConst.js";

class CheckupsStore {
    searchDate;
    data;

    constructor() {
        this.searchDate = new Date();
        this.data = [];
        makeAutoObservable(this, {}, { autoBind: true });
    }

    getReportLink = () => {
        const month   = this.searchDate.getUTCMonth() + 1;
        const year    = this.searchDate.getUTCFullYear();

        return API_URL + CHECKUPS_REPORT_TXT + `?month=${month}&year=${year}`
    }

    getCheckups = async () => {
        let response;
        try {
            const month= this.searchDate.getUTCMonth() + 1;
            const year= this.searchDate.getUTCFullYear();
            response = await api.get(`${CHECKUPS_REPORT}?month=${month}&year=${year}`);
            runInAction(() => {
                this.data = response?.data;
            })
        } catch(err) {
            console.error(err);
        }
    }





}
export default new CheckupsStore();
