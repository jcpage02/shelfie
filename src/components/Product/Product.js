import React from 'react'

export default function Product(props) {
    console.log(props.item)

    const {name, price, img} = props

    return (
        <div>
            {name}
            {price}
            <img src={img} width='100px' alt=""/>
        </div>
    )

}