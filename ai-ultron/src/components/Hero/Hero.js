import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';

const Hero = () => {
    return (
        <HeroSection>
            <HeroVideo src="./assets/background.jpg" />
            <Container>
                <br></br><br></br><br></br><br></br>
                <MainHeading>Discover the power of AI</MainHeading>
                <HeroText>
                    We provide the best AI systems for future world
                </HeroText>
                <ButtonWrapper>
                    <Link to="signup">
                        <Button>Get Started</Button>
                    </Link>
                    <HeroButton>Find More</HeroButton>
                </ButtonWrapper>
            </Container>
        </HeroSection>
    )
}

export default Hero