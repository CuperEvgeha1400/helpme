import React from "react"
import classesStyle from '../models/styles/Arrow.module.scss'
import { ArrowType } from "shared/models/types/ArrowType"
export const CustomArrowPrev : React.FC<ArrowType> = ({onClick})=> {
    return(<>
      <div onClick={onClick} className= {classesStyle.arrowRight}>
         
     </div>
    </>)
}


export const CustomArrowNext : React.FC<ArrowType> = ({onClick})=> {
    return(<>
      <div onClick={onClick} className= {classesStyle.arrowNext}>
         
     </div>
    </>)
}