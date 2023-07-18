import axios, { AxiosResponse } from "axios";
import {FormType, statusT} from '../models/types/FormType'
import Cookies from 'js-cookie';
export class FormApi {
    constructor(){
        this.token =  Cookies.get('access_token');
          this.instance2 = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}`,
        })
        this.instance = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}`,
            headers: {
                'Authorization': `Token ${this.token}`
            }
        })
    }
    async addForm (form :FormType){
        
        try {
          await  this.instance2.post(`${process.env.REACT_APP_API_URL}/form/api/post/`, form)
          alert("Děkujeme za odeslání přihlášky!")
        } catch (error) {
            alert("Nevyplnili jste všechna pole nebo taková žádost již existuje!")
        }
        
    }

    async getForm(){
        try {
          const response =   await axios.get(`${process.env.REACT_APP_API_URL}/form/api/form/`, {
                  headers: {
                'Authorization': `Token ${this.token}`}});
          return response
        } catch (error) {
            
        }
    }

    async editForm(pk : string, status : statusT){
        try {
            await this.instance.put(`/form/api/form/${pk}`, { status,  pk})
        } catch (error) {
            
        }
    }

    token
    instance
    instance2
}