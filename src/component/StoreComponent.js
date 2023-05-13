import React, { Component } from 'react'
import StoreService from '../service/StoreService'

export class StroeComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            stores: []
        }
    }

    componentDidMount(){
        StoreService.viewStore()
            .then( (response) => {
                console.log("All stores in Component" + JSON.stringify(response))
                this.setState({
                    stores: response.data
                })
            })
    }

    deleteStore(storeId){
        StoreService.deleteStore(storeId)
            .then( response =>{
                this.setState({
                    stores: this.state.stores.filter(store=>store.storeId !== storeId)
                })
                this.props.history.push(`/stores`)
            })
    }

    getStoreById(storeId){
        this.props.history.push(`/store/${storeId}`)
        window.location.reload();
    }

    updateStore(storeId){
        this.props.history.push(`/post/${storeId}`)
        window.location.reload();
    }
    render() {
        return (
            <div>
                <h1>VIEW STORES</h1>
                <table class="table">
                    <thead>
                    <tr class="table-success">
                        <th scope="col">Store Name</th>
                        <th scope="col">Store Location</th>
                        <th scope="col">Store Address</th>
                        <th scope='col'>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.stores.map(store =>
                            <tr key={store.storeId}>
                                <td>{store.storeName}</td>
                                <td>{store.storeLocation}</td>
                                <td>{store.storeAddress}</td>
                                <td>
                                    <button type="button" class="btn btn-success"
                                            onClick={ () => this.getStoreById(store.storeId)}>VIEW</button> &nbsp;

                                    <button type="button" class="btn btn-warning"
                                            onClick={ () => this.updateStore(store.storeId)}>UPDATE</button> &nbsp;


                                    <button type="button" class="btn btn-danger"
                                            onClick={ () => this.deleteStore(store.storeId)}>DELETE</button> &nbsp;
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default StroeComponent