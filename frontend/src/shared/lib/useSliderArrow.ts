import { Carousel } from "react-responsive-carousel"


 const handleNext = (ref: React.MutableRefObject<Carousel>)=> {
   ref.current.onClickPrev()
}

 const handlePrev = (ref: React.MutableRefObject<Carousel>)=> {
    ref.current.onClickNext()
}

export const useSliderArrow = (ref: React.MutableRefObject<Carousel>, type : string)=> {
    type === "next" ? handleNext(ref) : handlePrev(ref)
}