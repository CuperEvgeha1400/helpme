import React from "react"
import stylesClasses from '../models/styles/BodyAdmin.module.scss'
import { FormAdmin } from "features/FormAdmin"
export const BodyAdmin: React.FC = () => {
    return(<>
     <div className= {stylesClasses.background_container}>
            <FormAdmin/>
     </div>
    </>)
}