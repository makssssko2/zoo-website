import { makeAutoObservable } from 'mobx';
import api from '../services/axios/api.js';
import { ANIMALS_UPDATE } from '../constants/endpoints/endpointConst.js';

class AnimalsStore {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  updateAnimals = async ({ ...args }) => {
    try {
      await api.put(ANIMALS_UPDATE, { ...args });
    } catch (err) {
      console.error(err);
    }
  };

  deleteAnimal = async (id) => {
    try {
      await api.delete(`${ANIMALS_UPDATE}/${id}`);
    } catch (err) {
      console.error(err);
    }
  };
}
export default new AnimalsStore();
