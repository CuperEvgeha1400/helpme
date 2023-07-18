import React from "react";
import { CarouselData } from "shared/models/types/CarouselData";
import classesStyle from '../models/styles/CarouselChild.module.scss'
import intro_c from '../models/img/intro_c.png'
import img1  from '../models/img/div1.png'
import img2  from '../models/img/div2.png'
import img3  from '../models/img/div3.png'
export const CarouselChild : React.FC<CarouselData> = ({content_1,content_2,content_3})=> {
    
    return(<>
    <div className= {classesStyle.inner_container_carousel}>
       <div className= {classesStyle.intro_carousel}><img className= {classesStyle.intro_img} src= {intro_c}/> <h2>Potřebujete manažera</h2></div> 
       <div className= {classesStyle.inner_content}>
        <div className= {classesStyle.child_inner1}>
         <img src= {img1}/>
         <h2>{content_1.title}</h2>
         <div>{content_1.description}</div>
        </div>
        
        <div className= {classesStyle.child_inner2}>
        <img src= {img2}/>
         <h2>{content_2.title}</h2>
         <div>{content_2.description}</div>
        </div>


        <div className= {classesStyle.child_inner3}>
        <img src= {img3}/>
         <h2>{content_3.title}</h2>
         <div>{content_3.description}</div>
        </div>
  
    </div>
   </div>
      
    </>)
}
