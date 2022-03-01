import React, { useState, useEffect }  from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { Button } from '../buttonElement';
import Video from '../../videos/video.mp4';

// import Image from '../../images/herologo.jpg';
import { 
    HeroContainer,
    HeroBg, 
    VideoBg,
    // ImageBg,
    HeroContent,
    HeroBtnWrapper,
    HeroH1,
    HeroH2,
    HeroP,
    ArrowForward,
    ArrowRight  } from './heroElements';

const HeroSection = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else { 
            setScrollNav(false);
        }
    };

    const [hover, setHover] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop()
    };

    const toggleBottom = () => {
        scroll.scrollToBottom()
    };

    const onHover = () => {
        setHover(!hover)


    }


    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src= {Video} type='video/mp4' id='home'/>
                
            </HeroBg>    
            <HeroContent>
                <HeroH1>If You Can Dream It, VM Can Build It</HeroH1>
                <HeroH2> Impress Your Clients with Fast, Professional Websites & Servers</HeroH2>
                <HeroP>
                    With maximum scalability in every site, house the capability to build any widget, app, or software
                    imaginable to suit your needs. 
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                        to='packages'
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                    >
                        Pick Your Package {hover ? <ArrowForward /> : <ArrowRight
                        />}
                    </Button>
                </HeroBtnWrapper>       
            </HeroContent>      
        </HeroContainer>  
    );
};

export default HeroSection;
