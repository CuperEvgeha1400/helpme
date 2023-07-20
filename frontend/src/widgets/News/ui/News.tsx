import React from "react"
import classesStyle from '../models/styles/News.module.scss'
import { useNewsData } from "shared/lib/useNewsData"
import { NewsInner } from "features/News"
import { NewsInnerLocation } from "shared/models/types/NewsInnerType"
export const News: React.FC = ()=> {
    const data = useNewsData()
    return(<>
      <div id = "#section2" className= {classesStyle.BackGround_News}>
        <div className= {classesStyle.container}>
            <h1>14.6.23-16.6.23 - mezinárodní výstava The smarter E Europe v Mnichově</h1>
            {
              data.map((child, index)=> <NewsInner key ={index} location= {index % 2 == 0 ? NewsInnerLocation.LEFT : NewsInnerLocation.RIGHT} data={child}/>)
            }
        </div>
      </div>
    </>)
}