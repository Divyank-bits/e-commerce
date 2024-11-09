import React from "react"
import MainCarousel from "../../components/HomeCarousel/mainCarousel"
import HomeSectionCarousel from "../../components/HomeSectionCarousel/homeSectionCarousel"
import {men_kurta} from '../../../data/Men/men_kurta'

const HomePage = ()=> {
    return (
        <div>
            <MainCarousel/>
            <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
            <HomeSectionCarousel data={men_kurta} sectionName={"Men's Kurta"}/>
            <HomeSectionCarousel data={men_kurta} sectionName={"Men's Kurta"}/>
            <HomeSectionCarousel data={men_kurta} sectionName={"Men's Kurta"}/>
            </div>
        </div>
    )
}
export default HomePage