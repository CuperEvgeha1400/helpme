import React from "react"
import classesStyle from '../models/styles/FooterButton.module.scss'
export const FooterButtonCarousel : React.FC = ()=> {
 return(<>
   <div className= {classesStyle.btn_container}>
     <button className= {classesStyle.btn}>Čekáme na váš životopis</button>
   </div>
 </>)
}