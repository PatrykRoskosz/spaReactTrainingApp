import React from 'react';
import {Route, Switch} from 'react-router-dom'
import '../css/Header.css'
import img1 from '../img/img1.jpg' 
import img2 from '../img/img2.jpg' 
import img3 from '../img/img3.jpg'

const Header = () => {
    
    return (
        <>
        <Switch>
            <Route path="/" exact render={() => (
                <img src={img1} alt='miasto'></img>
            )}/>
            <Route path="/contact" render={() => (
                <img src={img2} alt='miasto'></img>
            )}/>
            <Route path="/products" render={() => (
                <img src={img3} alt='miasto'></img>
            )}/> 
            <Route path="/admin" render={() => (
                <img src={img1} alt='miasto'></img>
            )}/>
             <Route path="/login" render={() => (
                <img src={img2} alt='miasto'></img>
            )}/>

            <Route render={() => (
                <h1>Wybrany adres nie istnieje</h1>
            )}/>
        </Switch>
        </>
    )
}

export default Header