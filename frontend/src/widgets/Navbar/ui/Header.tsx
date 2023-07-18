import React, { useEffect, useRef, useState } from "react";
import classesStyle from './styles/Header.module.scss'
import Logo from './img/Logo.png'
import { useNavBar } from "shared/lib/useNavBar";
import { useNavig } from "shared/lib/useNavig";
import { Link } from "react-router-dom";
export const Navbar : React.FC = ()=> {
    const ref = useRef<HTMLDivElement>(null)
    const ref1 = useRef<HTMLDivElement>(null)
    const refa1 = useRef<HTMLAnchorElement>(null) 
    const refa2 = useRef<HTMLAnchorElement>(null) 
    const refa3 = useRef<HTMLAnchorElement>(null) 
    const refa4 = useRef<HTMLAnchorElement>(null) 
    const refa5 = useRef<HTMLAnchorElement>(null) 

    const refam1 = useRef<HTMLAnchorElement>(null) 
    const refam2 = useRef<HTMLAnchorElement>(null) 
    const refam3 = useRef<HTMLAnchorElement>(null) 
    const refam4 = useRef<HTMLAnchorElement>(null) 


     return(<>
     <div ref={ref} className= {classesStyle.head}>
        <div className= {classesStyle.inner_head}>
            <div><img src= {Logo}/> <div className= {classesStyle.logo_div}><span className = {classesStyle.logo1}>Solo</span><span className= {classesStyle.logo2}>pharma</span></div></div>
                <nav className= {classesStyle.navigate}>
                    <a  href="#section1" ref ={refa1} ><li onClick={(e)=> useNavig(refa1.current)}>Home</li></a>
                    <a href="#section2" ref ={refa2} ><li onClick={(e)=> useNavig(refa2.current)}>Pracovní nabídky</li></a>
                    <a href="#section5" ref ={refa3} onClick={(e)=> useNavig(refa3.current)}><li>Zprávy</li></a>
                    <a href="#section4" ref ={refa4} onClick={(e)=> useNavig(refa4.current)}><li>Kontakt</li></a>
                </nav>
            <a href="#section3" ref={refa5} className= {classesStyle.btn_head} onClick={(e)=> useNavig(refa5.current)}>Objednat</a>
        </div>
        
        <div className= {classesStyle.inner_head_mobile}>
           <nav className= {classesStyle.navigate_mobile}>
                    <a  href="#section1" ref ={refam1} onClick={(e)=> useNavig(refam1.current)}><li>Home</li></a>
                    <hr/>
                    <a href="#section2" ref ={refam2} onClick={(e)=> useNavig(refam2.current)}><li>Pracovní nabídky</li></a>
                    <hr/>
                    <a href="#section5" ref ={refam3} onClick={(e)=> useNavig(refam3.current)}><li>Zprávy</li></a>
                    <hr/>
                    <a href="#section4" ref ={refam4} onClick={(e)=> useNavig(refam4.current)}><li>Kontakt</li></a>
            </nav>
        </div>
     </div>
     {/* <div  className={classesStyle.navigate_mobile_container}>
     <div><img src= {Logo}/> <div className= {classesStyle.logo_div}><span className = {classesStyle.logo1}>Solo</span><span className= {classesStyle.logo2}>pharma</span></div></div>
      <div style={{position : "relative"}}>
       <div ref={ref1} onClick={()=> useNavBar(ref.current, ref1.current) }  className= {classesStyle.burger}></div>
       <h4>MENU</h4>
      </div> 
      
    </div> */}
    <div ref={ref1} onClick={()=> useNavBar(ref.current, ref1.current) }  className= {classesStyle.burger}></div>
    </>)
}
