import React, { useState } from "react";
import './App.css';
import { tabs } from "./Data/tabs";

function Tabbing(){
    let [activetab,setActivetab]=useState(0)
    let [activecon,setActivecon]=useState(tabs[0])

    let changedata=(i)=>{
        setActivetab(i);
        setActivecon(tabs[i])
    }
    return(
        <div className="tabsouter">
            <h1>Details about Web Languages</h1>
            <ul>
                {tabs.map((tabsitem,i)=>{
                    return(
                        <li>
                            <button onClick={()=>changedata(i)} className={activetab==i ? 'activeButton' : ''}>{tabsitem.title}</button>
                        </li>
                    )
                })}
            </ul>
            {
                activecon!==undefined?
                <p>{activecon.description}</p>
                :
                ' '
            }
        </div>
    )
}

export default Tabbing