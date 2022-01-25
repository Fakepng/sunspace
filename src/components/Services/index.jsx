import React from 'react';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';
import Icon1 from '../../images/logo.svg';
import Icon2 from '../../images/logo.svg';
import Icon3 from '../../images/logo.svg';

const Service = () => {
    return (
        <ServicesContainer id='service'>
            <ServicesH1>บริการ</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>ก่อสร้าง</ServicesH2>
                    <ServicesP>รับเหมาก่อสร้าง</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>ออกแบบ</ServicesH2>
                    <ServicesP>รับออกแบบ</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>ตกแต่ง</ServicesH2>
                    <ServicesP>รับตกแต่ง</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    );
};

export default Service;
