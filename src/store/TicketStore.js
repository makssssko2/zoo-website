import { makeAutoObservable, runInAction } from "mobx";
import {
    API_URL, CHECKUPS_REPORT, ENCLOSURES_REPORT,
    TICKET_BUY, TICKET_REPORT,
    TICKET_REPORT_TXT
} from "../constants/endpoints/endpointConst.js";
import api from "../services/axios/api.js";

class TicketStore {
    searchDate;
    data;
    constructor() {
        this.searchDate = new Date();
        this.data = [];
        makeAutoObservable(this, {}, { autoBind: true });
    }

    buy = async ({name,ticketType,price = 10}) => {
        let errorMessage;
        let response;
        const date = new Date();
        try {
            response = await api.post(TICKET_BUY, {name,ticketType,price});
        } catch(err) {
            errorMessage = err.response?.data?.message;
        }
        return response || errorMessage;
    }

    getTickets = async () => {
        let response;
        try {
            const month   = this.searchDate.getUTCMonth() + 1;
            const year    = this.searchDate.getUTCFullYear();
            response = await api.get(`${TICKET_REPORT}?month=${month}&year=${year}`);
            runInAction(() => {
                this.data = response?.data;
            })
        } catch(err) {
            console.error(err);
        }
    }

    getInfo = async(ticketId) => {

    }

    getReportLink = () => {
        const month   = this.searchDate.getUTCMonth() + 1;
        const year    = this.searchDate.getUTCFullYear();

        return API_URL + TICKET_REPORT_TXT + `?month=${month}&year=${year}`
    }
}
export default new TicketStore();
