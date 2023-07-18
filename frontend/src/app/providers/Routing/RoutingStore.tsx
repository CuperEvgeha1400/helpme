import React from 'react'
import {AdminPage} from 'pages/AdminPage/index'
import {RoutType} from '/app/types/RoutType'
import {MainPage} from 'pages/MainPage/index'
import { AutoPage } from 'pages/AutoPage'
import { AppSelector } from 'shared/lib/useReducer'
import { EditFormAdmin } from 'features/FormAdmin'


function RoutStore () : RoutType[]{
  const {isLogin} = AppSelector(state=> state.user);



 const  AuthStore: RoutType[]  =   [{path : "/", element : <MainPage/>}, {path : '/adminPanel', element : <AdminPage/>}, {path: '/adminPanel/form/:id', element: <EditFormAdmin/>}]
   const UnAuthStore: RoutType[] =  [{path : "/", element : <MainPage/>},  {path : '/auto', element : <AutoPage/>}]
 
 if(isLogin){
  return AuthStore
 }else {
  return UnAuthStore
 }
}
export default RoutStore