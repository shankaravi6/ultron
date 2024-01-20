import React from 'react';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import { Content } from '../components/Content/Content';
import Carousel from '../components/Carousel/Carousel';
import { heroOne, heroTwo, heroThree } from '../data/HeroData';

const Home = () => {
    return (
        <>
            <Hero />
            <Features />
            <Content {...heroOne} />
            <Content {...heroTwo} />
            <Content {...heroThree} />
            <Carousel />
        </>
    );
};

export default Home;