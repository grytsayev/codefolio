import React from 'react';
import { StyledMobileMenu, StyledMobileMenuItem } from './styles';

export const MobileMenu: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    return (
        <StyledMobileMenu isOpen={isOpen}>
            <StyledMobileMenuItem onClick={onClose}>Bio</StyledMobileMenuItem>
            <StyledMobileMenuItem onClick={onClose}>Contacts</StyledMobileMenuItem>
            <StyledMobileMenuItem onClick={onClose}>My work</StyledMobileMenuItem>
        </StyledMobileMenu>
    );
};
