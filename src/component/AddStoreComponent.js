import React, { Component } from 'react'
import './AddStoreComponent.css'
import StoreService from '../service/StoreService'

export class AddStoreComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            storeId: this.props.match.params.storeId,
            storeName: '',
            storeLocation: '',
            storeAddress:''
        }
    }

    componentDidMount(){
        if(this.state.storeId === 'post_store'){
            return
        }
        else{
            StoreService.getStoreById(this.state.storeId)
                .then( response => {
                    let store = response.data;
                    this.setState({
                        storeName: store.storeName,
                        storeLocation: store.storeLocation,
                        storeAddress: store.storeAddress
                    })
                })
        }
    }

    storeNameChangeHandler = (event) =>{
        this.setState({
            storeName: event.target.value
        })
    }

    storeLocationChangeHandler = (event) =>{
        this.setState({
            storeLocation: event.target.value
        })
    }

    storeAddressChangeHandler = (event) =>{
        this.setState({
            storeAddress: event.target.value
        })
    }

    saveUpdateStore = (event) =>{
        event.preventDefault();
        let store = {
            storeName: this.state.storeName,
            storeLocation: this.state.storeLocation,
            storeAddress: this.state.storeAddress
        }

        if(this.state.storeId === "post_store"){
            StoreService.postStore(store)
                .then( response => {
                    this.props.history.push(`/stores`)
                    window.location.reload();
                })
        }
        else{
            StoreService.updateStore(store, this.state.storeId)
                .then( response =>{
                    this.props.history.push(`/stores`)
                    window.location.reload();
                })
        }
    }



    render() {
        return (
            <div>
                <h1>ADD NEW STORE</h1>

                <div class="form-style-2">
                    <div class="form-style-2-heading">Provide your information</div>
                    <form action="" method="post">
                        <label for="field1"><span>Store Name: <span class="required">*</span></span>
                            <input type="text" class="input-field" value={this.state.storeName} onChange={this.storeNameChangeHandler}/></label>

                        <label for="field2"><span>Store Location: <span class="required">*</span></span>
                            <input type="text" class="input-field" value={this.state.storeLocation} onChange={this.storeLocationChangeHandler}/></label>

                        <label for="field5"><span>Store Address: <span class="required">*</span></span>
                            <textarea class="textarea-field" value={this.state.storeAddress} onChange={this.storeAddressChangeHandler}></textarea></label>


                        <input type="submit" value="Submit"
                               onClick={this.saveUpdateStore} />
                    </form>
                </div>

            </div>
        )
    }
}
export default AddStoreComponent