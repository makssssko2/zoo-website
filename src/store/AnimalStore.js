import { makeAutoObservable, runInAction } from "mobx";
import api from "../services/axios/api.js";
import {
    ANIMALS_UPDATE
} from "../constants/endpoints/endpointConst.js";

class AnimalsStore {
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    updateAnimals = async ({...props}) => {
        let response;
        try {
            response = await api.put(ANIMALS_UPDATE,{...props});
        } catch(err) {
            console.error(err);
        }
    }



}
export default new AnimalsStore();
