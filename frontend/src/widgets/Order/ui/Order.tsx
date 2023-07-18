import React from "react"
import classesStyle from '../models/styles/Order.module.scss'
import { OrderForm } from "features/OrderForm"
export const Order = ()=> {
    return(<>
    <div id = "#section3" className= {classesStyle.background_container}>
      <div className= {classesStyle.container}>
         <h1>Objednat</h1>
         <OrderForm/>
      </div>
    </div>
    
    </>)
}