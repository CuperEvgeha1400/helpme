import React from 'react'
import classesStyle from './models/styles/MainPage.module.scss'
import { Intro } from 'widgets/Intro'
import { Carousel } from 'react-responsive-carousel'
import { CarouselR } from 'widgets/Carousel'
import { News } from 'widgets/News'
import { Order } from 'widgets/Order'
import { Kontakt } from 'widgets/Kontakt'
import { Footer } from 'widgets/Footer'
import { Navbar } from 'widgets/Navbar'
const MainPage = ()=> {
    return(<>
       <Navbar/>
    <div id = "#section1" className= {classesStyle.Intro}>
        <div className = {classesStyle.container}>
         <Intro/>
        </div>
        <CarouselR/>
     </div>
     <News/>
     <Order/>
     <Kontakt/>
     <Footer/>
    </>)
}
export default MainPage