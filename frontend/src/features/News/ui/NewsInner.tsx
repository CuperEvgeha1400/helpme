import React from "react"
import {NewsInnerLocation, NewsInnerType} from 'shared/models/types/NewsInnerType'
import classesStyle from '../models/styles/NewsInner.module.scss'
export const NewsInner : React.FC<NewsInnerType> = ({location, data})=> {
    return(<>
      {
        location == NewsInnerLocation.LEFT ? 
        <div className= {classesStyle.news_container}>
            <div className= {classesStyle.inner_container}>
                <img className= {classesStyle.img} src= {data.img}/>
                 <div className= {classesStyle.contentL}>
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                 </div>
            </div>
        </div> 
        
        
        : <div>
        <div className= {classesStyle.news_container}>
             <div className= {classesStyle.inner_container}>
                <div className= {classesStyle.contentR}>
                <h1>{data.title}</h1>
                <p>{data.description}</p>
                </div>
                <img className= {classesStyle.img} src= {data.img}/>
             </div>
             
        </div>
    </div> 
      }
    </>)
}