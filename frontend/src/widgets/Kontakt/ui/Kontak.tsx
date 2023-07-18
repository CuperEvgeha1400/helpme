import React from "react"
import classesStyle from '../models/styles/Kontakt.module.scss'
import { KontaktInner } from "features/Kontakt"
export const Kontakt : React.FC = ()=> {
    return(<>
     <div id = "#section4" className= {classesStyle.BackGround_Kontakt}>
          <div className= {classesStyle.container}>
                     <h1>Kontakt</h1>
                     <KontaktInner/>
          </div>
     </div>
    </>)
}