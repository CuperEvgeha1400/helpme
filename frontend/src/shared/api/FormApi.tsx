import axios, { AxiosResponse } from "axios";
import {FormType, statusT} from '../models/types/FormType'
import Cookies from 'js-cookie';
export class FormApi {
    constructor(){
        this.token =  Cookies.get('access_token');
        this.instance = axios.create({
            baseURL: 'http://localhost:8000',
            headers: {
                'Authorization': `Token ${this.token}`
            }
        })
    }
    async addForm (form :FormType){
        
        try {
            console.log(form)
          await  axios.post(`http://localhost:8000/form/api/post/`, form)
          alert("Děkujeme za odeslání přihlášky!")
        } catch (error) {
            alert("Nevyplnili jste všechna pole nebo taková žádost již existuje!")
        }
        
    }

    async getForm(){
        console.log(this.token)
        try {
          const response =   await this.instance.get('http://localhost:8000/form/api/form/');
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
}