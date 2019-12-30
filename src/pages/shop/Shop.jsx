import React, { Component } from 'react';
import SHOP_DATA from './shop.data.js'
import PreviewCollection from '../../component/preview-collection/PreviewCollection.jsx';

export class Shop extends Component {
    constructor(props){
        super(props);

        this.state ={
            collections: SHOP_DATA
        }
    }
    render() {
        const {collections} = this.state;
        return (
            <div className="shop-page">
                {
                    collections.map(({id, ...ohterCollectionsProps}) =>(
                        <PreviewCollection key={id} {...ohterCollectionsProps} />
                    ))
                }
            </div>
        )
    }
}

export default Shop;

