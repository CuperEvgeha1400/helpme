import React, { useEffect, useMemo, useState } from "react"
import classesStyle from '../models/styles/FormAdmin.module.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { FormType, statusT } from "shared/models/types/FormType";
import {Link, useNavigate} from 'react-router-dom'
import { usesortForms } from "shared/lib/usesortForms";
import { FormApi } from "shared/api/FormApi";
export const FormAdmin: React.FC = () => {
    const [forms, setForms] = useState<FormType[] | null>(null);
    const [type , setType] = useState<statusT>(statusT.TREATMENT)
    const sortForms = usesortForms(forms, type)
    const navigate = useNavigate();
    async function load (){
     const API = new FormApi()
     const response = await API.getForm()
     if(response)
     setForms(response.data)
    }
    useEffect(()=> {
      load()
    },[])
  
    return(<>
      <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="right">Jméno a příjmení</TableCell>
            <TableCell align="right">Název společnosti</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Telefon</TableCell>
            <TableCell align="right">Zpráva</TableCell>
            <TableCell align="right">Postavení</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortForms? sortForms.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.pk}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.nameCompany}</TableCell>
              <TableCell align="right" >{row.email}</TableCell>
              <TableCell align="right" >{row.phone}</TableCell>
              <TableCell align="right" >{row.info}</TableCell>
              <TableCell align="right" ><Link to = {`form/${row.pk}`}>{row.status}</Link></TableCell>
            </TableRow>
          )) : <div style={{display: "flex", justifyContent : "center", alignItems: "center", width: "100%", height: "100vh"}}>Načítání</div>}
        </TableBody>
      </Table>
    </TableContainer>
    <div className= {classesStyle.container_flex}>
     <Button variant="outlined" onClick={() => navigate('/')} >Zadní</Button>
     <div className= {classesStyle.k}>
      <label>Řazení</label>
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
     </div>
    </div>

    </>)
}