import React, { useRef } from "react";
import stylesClasses from '../models/styles/Carousel.module.scss'
import { Carousel } from 'react-responsive-carousel';
import { useCarousel } from "shared/lib/useCarousel";
import { CarouselChild } from "features/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.scss"
import {  CustomArrowNext, CustomArrowPrev, FooterButtonCarousel } from "shared";
import { useSliderArrow } from "shared/lib/useSliderArrow";

export const CarouselR : React.FC = ()=> {
    const {data} = useCarousel()
    const ref : React.MutableRefObject<Carousel> = useRef()
    return(<>
     <div className= {stylesClasses.container}>
         <div className= {stylesClasses.Carousel_container}>
            <h1>Pracovní nabídky</h1>
            <div className= {stylesClasses.inner_container}>
             <Carousel
             ref={ref}
             showThumbs = {false}
             infiniteLoop = {true}
             showArrows = {false}
            showIndicators = {false}
            showStatus = {false}
             >
              {
                data.map((child, index)=> <CarouselChild key={index}  content_1={child.content_1} content_2={child.content_2} content_3={child.content_3}/>)
              }
             </Carousel>
             <CustomArrowNext onClick={()=> useSliderArrow(ref, 'next')} />

             <CustomArrowPrev onClick={()=> useSliderArrow(ref, 'prev')} />
             <FooterButtonCarousel/>
            </div>
          
         </div>
     </div>
    </>)
}