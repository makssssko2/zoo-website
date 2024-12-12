import { makeAutoObservable, runInAction } from "mobx";

class LoaderStore {
    localLoaderLoading;
    globalLoaderLoading;
    constructor() {
        this.localLoaderLoading = false;
        this.globalLoaderLoading = false;
        makeAutoObservable(this, {}, { autoBind: true });
    }

    showLocalLoader() {
        runInAction(() => {
            this.localLoaderLoading = true;
        })
    }
    hideLocalLoader() {
        runInAction(() => {
            this.localLoaderLoading = false;
        })
    }
    showGlobalLoader() {
        runInAction(() => {
            this.globalLoaderLoading = true;
        })
    }
    hideGlobalLoader() {
        runInAction(() => {
            this.globalLoaderLoading = false;
        })
    }


}
export default new LoaderStore();
