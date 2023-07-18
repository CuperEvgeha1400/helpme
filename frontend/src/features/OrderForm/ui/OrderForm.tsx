import React, { useState } from "react"
import classesStyle from '../models/styles/OrderForm.module.scss'
import email from '../models/img/email.png'
import house from '../models/img/house.png'
import person from '../models/img/person.png'
import some from '../models/img/some.png'
import telephone from '../models/img/telephone.png'
import { ClickAdd } from "shared/lib/useForm"
import { FormType, statusT } from "shared/models/types/FormType"
export const OrderForm : React.FC = ()=> {
    const [form, setForm] = useState<FormType>({ pk : "" ,nameCompany : "", phone : "", status : statusT.TREATMENT, email : '', info : '', name : ''})
    return(<>
    <div  className= {classesStyle.form}>
        <div >
            <div className= {classesStyle.inner_form}><img src= {person}/> <p>Jméno a příjmení*</p></div>
            <input value={form.name} onChange={(e)=> setForm({...form, name : e.target.value})} placeholder="Jméno a příjmení"></input>
        </div>

        <div className= {classesStyle.form_div}>
            <div className= {classesStyle.inner_form}><img src = {house}/> <p>Název společnosti*</p></div>
            <input value={form.nameCompany} onChange={(e)=> setForm({...form, nameCompany : e.target.value})} placeholder="Vaše společnost s.r.o"></input>
        </div>


        <div  >
            <div className= {classesStyle.inner_form}><img src = {email}/> <p>Email *</p></div>
            <input  value={form.email} onChange={(e)=> setForm({...form, email : e.target.value})} placeholder="vas@mail.cz"></input>
        </div>


        <div className= {classesStyle.form_div} >
            <div className= {classesStyle.inner_form}><img src= {telephone}/> <p>Telefon *</p></div>
            <input type="numbers" value={form.phone} onChange={(e)=> setForm({...form, phone : e.target.value})} placeholder="vas@mail.cz"></input>
        </div>

        <div >
            <div className= {classesStyle.inner_form}><img src= {some}/> <p>Zpráva</p></div>
            <div className= {classesStyle.last_inner_form}>
                <textarea className= {classesStyle.textaredec} value={form.info} onChange={(e)=> setForm({...form, info : e.target.value})}  placeholder="Popište, jak vám můžeme pomoci " ></textarea> 
                
                <button onClick={()=>ClickAdd(form) } className= {classesStyle.btn}>Odeslat</button></div> 
            
        </div>
    </div>
    </>)
}