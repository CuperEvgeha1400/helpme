import { FormType, statusT } from 'shared/models/types/FormType';
import {FormApi} from '../api/FormApi'
const API = new FormApi();

export const ClickAdd = async (form : FormType ) =>{
   await API.addForm(form)
}


export const getForms = async () => {
  const response = await API.getForm();
  return response
}


export const editForms = async (id : string, type : statusT) => {
   await API.editForm(id, type)
   
  }