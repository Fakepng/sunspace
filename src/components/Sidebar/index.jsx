import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';

const Sidebar = ({ isOpen, handleToggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={handleToggle}>
            <Icon onClick={handleToggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='/' onClick={handleToggle}>หน้าหลัก</SidebarLink>
                    <SidebarLink to='service' onClick={handleToggle}>บริการ</SidebarLink>
                    <SidebarLink to='ability' onClick={handleToggle}>ความสามารถ</SidebarLink>
                    <SidebarLink to='history' onClick={handleToggle}>ผลงาน</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='contact'>ติดต่อ</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
