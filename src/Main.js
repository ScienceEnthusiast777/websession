import React from 'react'
import { CookiesProvider } from 'react-cookie'

export default function Main(props) {

    function buttonHandler(){
        console.log(props.cookies)
    }

    return (
        <button onClick={buttonHandler}>CLICK</button>
    )
}
