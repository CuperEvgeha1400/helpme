import React, { useState } from 'react'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { statusT } from 'shared/models/types/FormType';
import { editForms } from 'shared/lib/useForm';
import classesStyle from '../models/styles/FormAdmin.module.scss'
export const EditFormAdmin: React.FC = () => {
    const navigate = useNavigate();
    const id = useParams();
    const [type , setType] = useState<statusT>(statusT.TREATMENT)
    const Click = ()=> {
        editForms(id.id, type)
        setTimeout(()=> {
navigate('/adminPanel')
        },500)
    } 
    return(<>
    <div className = {classesStyle.container_edit}>
    <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                label="type"
                onChange={(e) => setType(e.target.value as statusT)}
                 >
                 <MenuItem value={statusT.TREATMENT}>{statusT.TREATMENT}</MenuItem>
                 <MenuItem value={statusT.CLOSE}>{statusT.CLOSE}</MenuItem>
        </Select>
        <Button variant="outlined" onClick={() => Click()} >Změna</Button>
        <Button variant="outlined" onClick={() => navigate(-1)} >Zadní</Button>
    </div>
  
    </>)
}