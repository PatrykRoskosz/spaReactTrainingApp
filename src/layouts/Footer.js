import React from 'react';
import {Route} from 'react-router-dom'
import '../css/Fotter.css'

const Footer = () => {
    return (
        <div>
            <h2>Stopka</h2>
            <Route path="/" exact render={(props) => {
                console.log(props);
                return (
                <p>jestes na <span>{props.location.pathname}</span></p>
                )
            }}/>
            <Route path="/:page" exact render={(props) => {
                console.log(props);
                return (
                <p>jestes na <span>{props.location.pathname}</span></p>
                )
            }}/>
            <Route path="/:page/:idList" exact render={(props) => {
                console.log(props);
                return (
                <p>jestes na <span>{props.location.pathname}</span></p>
                )
            }}/>
        </div>
    )
}

export default Footer