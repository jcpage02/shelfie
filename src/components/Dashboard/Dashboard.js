import React, { Component } from 'react'
import axios from 'axios'
import Product from './../Product/Product'
// import './Dashboard.css'


export default class Dashboard extends Component {
    constructor(props) {
        super(props)
    }

    deleteItem = (idToDelete) => {
        axios.delete(`/api/product/${idToDelete}`)
        .then(res => {
            this.props.getDidMount()            
        })
    }

    render() {
        const inventory = this.props.inventory

        const product = this.props.inventory.map((item, i) => {
            return <div key={item.id} className='Products'> 
                <Product name={item.name} price={item.price}
                img={item.img} />
                <button>Edit</button>
                <button onClick={()=> this.deleteItem(item.id)}>Delete</button>
            </div>
        })

        return (
            <div>
                {product}
            </div>
        )
    }
}