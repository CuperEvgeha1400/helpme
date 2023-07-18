import { FormType, statusT } from "shared/models/types/FormType";
import { useMemo } from "react";
export const usesortForms = (forms : FormType[], type : statusT): FormType[] => {
    const sortForms : FormType[]  = useMemo(() :FormType[]=> {
        if(forms){
          return forms.filter((e)=> e.status.includes(type))
        }
     },[forms, type])

     return sortForms
}