import React from "react"
import classeStyle from '../models/styles/KontaktInner.module.scss'
import person from '../models/img/person.png'
import email from '../models/img/email.png'
import tel from '../models/img/tel.png'
import adress from '../models/img/loc.png'
export const KontaktInner : React.FC = () => {
    return(<>
      <div className= {classeStyle.kontakt_container}>
       <div className= {classeStyle.person_container}><img src= {person}/> 
         <div><h3 >Daria Oshchepkova</h3> <p>Generální manažerka</p></div>
       </div>
        <div className= {classeStyle.email_container}><img src = {email}/> <h3>Email</h3> <p>oshchepkova.solar@gmail.com</p></div>
        <div className= {classeStyle.number_container}><img src= {tel}/> <p>+420 797 837 856</p></div>
        <div className= {classeStyle.adress_container}>
            <p>Adress:</p>
            <div><img src= {adress}/> <p>Na Lysinách 551/34, Praha 4 - Hodkovičky, PSČ 147 00</p></div>
        </div>
      </div>
    </>)
}