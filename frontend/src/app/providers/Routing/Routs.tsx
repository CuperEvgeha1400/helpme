import React, { Suspense } from "react"
import RoutStore from './RoutingStore'
import { Routes, Route, Navigate } from "react-router-dom"
import { RoutType } from "../../types/RoutType"
export const Routs = ()=> {
    return(<>
  <Suspense>
   <Routes>
      {
        RoutStore().map((element: RoutType)=> <Route path= {element.path} element = {element.element}/>)
      }
    </Routes>
  </Suspense>
    </>)
}
