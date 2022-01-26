import React from 'react';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';

const Service = () => {
    return (
        <ServicesContainer id='service'>
            <ServicesH1>บริการ</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src='/images/logo.svg'/>
                    <ServicesH2>ก่อสร้าง</ServicesH2>
                    <ServicesP>รับเหมาก่อสร้าง</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src='/images/logo.svg'/>
                    <ServicesH2>ออกแบบ</ServicesH2>
                    <ServicesP>รับออกแบบ</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src='/images/logo.svg'/>
                    <ServicesH2>ตกแต่ง</ServicesH2>
                    <ServicesP>รับตกแต่ง</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    );
};

export default Service;