import React from 'react';
import Video from '../../videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP } from './HeroElements';

const HeroSection = () => {
    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg  playsInline autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>Sunspace Associate Co., Ltd.</HeroH1>
                <HeroP>บริษัท ซันสเพส แอสโซซิเอท จำกัด</HeroP>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
