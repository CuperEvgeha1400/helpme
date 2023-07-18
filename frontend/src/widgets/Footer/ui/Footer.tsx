import React from "react"
import classesStyle from '../models/styles/Footer.module.scss'
import { FooterInner } from "features/Footer"
export const Footer: React.FC = ()=> {
    return(<>
    <div id = "#section5" className= {classesStyle.BackGround_Footer}>
        <div className= {classesStyle.container}>
           <FooterInner/>
        </div>
    </div>
    </>)
}