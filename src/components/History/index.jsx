import React from 'react';
import { HistoryContainer, HistoryH1, HistoryWrapper, HistoryCard, HistoryIcon, HistoryH2, HistoryP } from './HistoryElements';

const History = () => {
    return (
        <HistoryContainer id='history'>
            <HistoryH1>ผลงาน</HistoryH1>
            <HistoryWrapper>
                <HistoryCard>
                    <HistoryIcon src="/images/logo.svg"/>
                    <HistoryH2>บ้าน1</HistoryH2>
                    <HistoryP>รับเหมาก่อสร้าง</HistoryP>
                </HistoryCard>
                <HistoryCard>
                    <HistoryIcon src="/images/logo.svg"/>
                    <HistoryH2>บ้าน2</HistoryH2>
                    <HistoryP>รับออกแบบ</HistoryP>
                </HistoryCard>
                <HistoryCard>
                    <HistoryIcon src="/images/logo.svg"/>
                    <HistoryH2>บ้าน3</HistoryH2>
                    <HistoryP>รับตกแต่ง</HistoryP>
                </HistoryCard>
                <HistoryCard>
                    <HistoryIcon src="/images/logo.svg"/>
                    <HistoryH2>บ้าน4</HistoryH2>
                    <HistoryP>รับเหมาก่อสร้าง</HistoryP>
                </HistoryCard>
                <HistoryCard>
                    <HistoryIcon src="/images/logo.svg"/>
                    <HistoryH2>บ้าน5</HistoryH2>
                    <HistoryP>รับออกแบบ</HistoryP>
                </HistoryCard>
                <HistoryCard>
                    <HistoryIcon src="/images/logo.svg"/>
                    <HistoryH2>บ้าน6</HistoryH2>
                    <HistoryP>รับตกแต่ง</HistoryP>
                </HistoryCard>
            </HistoryWrapper>
        </HistoryContainer>
    );
};

export default History;
