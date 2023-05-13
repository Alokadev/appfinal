import axios from 'axios'

const STORE_API_URL = "http://localhost:8080/online/";

class StoreService{
    viewStore(){
        console.log("Retrieved all stores in service")
        return axios.get(STORE_API_URL + "stores")
    }

    deleteStore(storeId){
        return axios.delete(STORE_API_URL + "store/" + storeId)
    }

    getStoreById(storeId){
        return axios.get(STORE_API_URL + "store/" + storeId)
    }

    postStore(store){
        return axios.post(STORE_API_URL + "store", store)
    }

    updateStore(store, storeId){
        return axios.put(STORE_API_URL + "store/" + storeId, store)
    }
}

export default new StoreService
