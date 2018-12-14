import React from 'react'
import './../Header/Header.css'

export default function Header(props) {


    return (
        <div className='Header'>
            <header className='Header'>
                <img className='Logo' src={props.logo} alt="" />
                <h1 className='Brand'>SHELFIE</h1>
            </header>
        </div>
    )

}