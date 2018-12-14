import React, { Component } from 'react'
import axios from 'axios'
// import './Form.css'


export default class Form extends Component {

    state = {
        name: '',
        price: 0,
        img: ''
    }

    handleChange = (prop, e) => {
        this.setState({
            [prop]: e
        })
    }

    handleCancel = () => {
        this.setState({
            name: '',
            price: 0,
            img: ''
        })
    }

    addInventory = () => {
        const {name, price, img} = this.state
        axios.post('/api/product', {name, price, img})
        .then(res => {
            this.props.getDidMount()
            this.handleCancel()
        })
    }

    render() {

        return (
            <div className='MainDiv'>
                <input onChange={e => this.handleChange('name',e.target.value)} type="text"/>
                <input onChange={e => this.handleChange('price',e.target.value)} type="text"/>
                <input onChange={e => this.handleChange('img',e.target.value)} type="text"/>
                <button onClick={() => this.handleCancel()}>Cancel</button>
                <button onClick={() => this.addInventory()}>Add</button>
            </div>
        )
    }
}