
import React from 'react'
import imageGroup from './main.ico';


function Header()  
{
    return (
        <div>
        <div className = "header-h2">
        <img src={imageGroup} className="App-logo" alt="logo" />
           <h1>BuildAI Hamburg Project by LSBG</h1> 
           </div>
        <div className = "para"></div>
           <p>Wir sind von der DPS und arbeiten mit der LSBG Hamburg zusammen, 
            um die beteiligung die Bürger an der Planing der Stadt zu fordern. 
            </p>
           
        
        
        </div>
    )
}

export default Header;