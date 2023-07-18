import React from "react"
import classesStyle from '../models/styles/aboutus.module.scss'
import file from '../models/docs/file.pdf'
import file2 from '../models/docs/file2.pdf'
import file3 from '../models/docs/file3.pdf'
export const Aboutus : React.FC = ()=> {
  const handleDownload = () => {
    
    const fileUrls = [
       file,
       file2,
       file3
    ];

   
    fileUrls.forEach((fileUrl) => {
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = fileUrl.substring(fileUrl.lastIndexOf('/') + 1);
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.click();
    });
  };
    return(<>
     <div className= {classesStyle.Info}>
       <h1 className= {classesStyle.Info1}>Solární energie pro váš dům -</h1>
       <div className= {classesStyle.decInfo2}><h1 className= {classesStyle.Info2}>ekologická budoucnost již dnes!</h1></div>
       <p>Společnost Solopharma Group s.r.o byla založena 14. ledna roku 2008 rodinou Sirotenko. Zpočátku se firma zabývala jinými činnostmi, ale v 
roce 2015 zakladatelé společnosti spatřili perspektivu v rozvoji solární energie. Solopharma Group si zakoupila solární panely a instalovala je 
na vlastní pozemek. Kvůli evropské energetické krizi se společnost v
roce 2022 rozhodla o vstoupení na trh.</p>
      <button className= {classesStyle.btn} onClick={()=> handleDownload()}>Co nabízíme</button>
     </div>
    </>)
}
