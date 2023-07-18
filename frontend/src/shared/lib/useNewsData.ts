import { useState } from "react"
import { NewsDataType } from "shared/models/types/NewsInnerType";
import news1 from '../models/img/news1.png'
import news2 from '../models/img/news2.png'
export const useNewsData = () :NewsDataType[] => {
 const [data, setData] = useState<NewsDataType[]>([{img : news1, title : 'Nejnovější solární technologie na mnichovském veletrhu', 
 description: 'V Mnichově proběhla jedna z nejdůležitějších výstav ve sféře solární energetiky. Na výstavě byly představeny nejnovější technologie v oblasti solární energetiky, zejména solární panely, solární systémy, nejnutnější příslušenství, elektromobily a navíc další věci a ideje, které se v současné době aktivně rozvíjí. Dalo se tam seznámit se se současnými trendy a s perspektivou rozvoje solární energie nejen po celém světě, ale hlavně i v České republice'
}, {img : news2, title : 'Cílem této akce bylo hledání nových idejí a rozšíření spolupráce v oblasti solární energetiky' , description : 'Během akce se aktivně projednával rozvoj solární energetiky v České republice. Úspěšně se uskutečnila komunikace a spolupráce s velkými společnostmi, což zajistilo další jistý rozvoj naší společnosti na českém trhu'}]);

 return data
}