import React, { useState } from "react"
import classesStyle from '../models/Auto.module.scss'
import { useAppDispatch } from "shared/lib/useReducer"
import { AuthUser } from "store/Actions/autoUser";
import { User } from "app/types/userType";
import { useNavigate } from "react-router-dom";
export const Auto: React.FC = ()=> {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [user, setUser] = useState<User>({username :"", password : ""});
    const Auto = async ()=> {
      const response =   await dispatch(AuthUser(user))
      if(response){
          navigate('/adminPanel') 
      }
    }
    return(<>
    <div className= {classesStyle.background_container}>
     <div className= {classesStyle.container}>
         <div className= {classesStyle.inner_auto}>
            <h1>Oprávnění</h1>
            <input value={user.username} onChange={(e)=> setUser({...user, username: e.target.value})} placeholder="Pošta"></input>
            <input value={user.password} onChange={(e)=> setUser({...user, password: e.target.value})} type="password" placeholder="Heslo"></input>
            <div className= {classesStyle.btn_container}>
             <button className= {classesStyle.btn_head} onClick={()=> Auto()} >Přihlásit se</button>
             <button className= {classesStyle.btn_head} onClick={()=> navigate(-1)} >zadní</button>
            </div>
         </div>
       </div>
    </div>
    
    </>)
}