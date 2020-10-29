import React from 'react';


const LoginPage = () => {
    return ( 
        <div>
            <label htmlFor="login">
                Podaj login 
                <input type="text" id='login' placeholder="Login"/>
            </label>

            <label htmlFor="password">
                Podaj hasło  
                <input type="password" placeholder="hasło" id='password'/>
            </label>
            <button>Zaloguj</button>
        </div>
     );
}
 
export default LoginPage;