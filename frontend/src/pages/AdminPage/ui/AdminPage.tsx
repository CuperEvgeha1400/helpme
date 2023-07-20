import React from 'react'
import { BodyAdmin } from 'widgets/BodyAdmin'
import { NavBarAdmin } from 'widgets/NavBarAdmin'

const AdminPage : React.FC = ()=> {
    return (<>
     <NavBarAdmin/>
     <BodyAdmin/>
    </>)
}
export default AdminPage