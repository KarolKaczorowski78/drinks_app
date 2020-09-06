import React from 'react'
import HomeImage from '../components/home/home_image/homeImage';
import MainButton from '../components/home/main_button/mainButton';
import BrowseDrinksButton from '../components/home/browse_drinks_button/browseDrinksButton';
import HomeSection from '../components/home/home_section/homeSection';
import MainImage from '../img/IntroductionImg.jpg';
import MissionImage from '../img/AboutImg.jpg';
import Filters from '../components/home/filters/filters';
import Contact from '../components/home/contact/contact';
import ScrollToTopButton from '../components/home/scroll_to_top_button/scrollToTopButton';
import '../components/home/home_section.scss';

const Home = () => {

    return (
        <div className="home">
            <HomeSection>
                <HomeImage side="left" src={ MainImage } />
                <HomeImage side="right" src={ MainImage } />
                <h1>Welcome on Drinkify!</h1>
                <p><b>Find Your ambrozia nectar!</b></p>
                <BrowseDrinksButton />
                <MainButton clickScrollValue={ 1 }>About site</MainButton>
            </HomeSection>
            <HomeSection>
                <HomeImage side="left" src={ MissionImage } />
                <h1>Our mission</h1>
                <p style={{ maxWidth: "40ch" }}>This website has been created for people who have a desire to try new flavours and aromas. Our database contains over 500 drinks, their ingredients and recipes. You can search within multiple categories of drinks or just find your dreamed cocktail by name. The choice is Yours!<br/> <b>Drinkify is a perfect place for finding Your ambrozia nectar!</b></p>
                <MainButton clickScrollValue={ 2 }>See filters</MainButton>
            </HomeSection>
            <HomeSection>
                <h1>Filters</h1>
                <p>You can filter drinks by:</p>
                <Filters />
            </HomeSection>
            <Contact />
            <ScrollToTopButton />
        </div>
    )
}

export default Home;
