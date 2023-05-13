import React, { Component } from 'react'
import StoreService from '../service/StoreService'

export class GetStroreComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            storeId: this.props.match.params.storeId,
            store: {}
        }
    }

    componentDidMount(){
        StoreService.getStoreById(this.state.storeId)
            .then( (response) => {
                this.setState({
                    store: response.data
                })
            })
    }
    render() {
        return (
            <div>
                <h1>VIEW STORE INFORMATION</h1>

                <table class="table">
                    <thead>
                    <tr class="table-success">
                        <th scope="col">Store Name</th>
                        <th scope="col">Store Location</th>
                        <th scope="col">Store Address</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{this.state.store.storeName}</td>
                        <td>{this.state.store.storeLocation}</td>
                        <td>{this.state.store.storeAddress}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default GetStroreComponent