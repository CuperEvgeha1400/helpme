import React, { useRef } from "react";
import classesStyle from '../models/styles/FooterInner.module.scss'
import logo from '../models/img/Logo.png'
import { useNavig } from "shared/lib/useNavig";
export const FooterInner: React.FC = ()=> {
    const refa1 = useRef<HTMLAnchorElement>(null) 
    const refa2 = useRef<HTMLAnchorElement>(null) 
    const refa3 = useRef<HTMLAnchorElement>(null) 
    const refa4 = useRef<HTMLAnchorElement>(null) 
    return(<>
     <div className= {classesStyle.footer_container}>
            <nav className= {classesStyle.navigate_footer}>
                <a href="#section1" ref={refa1} onClick={()=> useNavig(refa1.current)}><li>Home</li></a>
                <a href="#section2" ref={refa2} onClick={()=> useNavig(refa2.current)}><li>Pracovní nabídky</li></a>
                <a href="#section5" ref={refa3} onClick={()=> useNavig(refa3.current)}><li>Zprávy</li></a>
                <a href="#section4" ref={refa4} onClick={()=> useNavig(refa4.current)}><li>Kontakt</li></a>
            </nav>
        <div className= {classesStyle.solo_container}> <div className= {classesStyle.logo_container}><img src= {logo}/> <div><h1>SOLO</h1> <h1><span>PHARMA</span></h1></div> </div>   
         <h2><span>Solopharma Group, s.r.o</span></h2>
         </div>

     </div>
    </>)
}