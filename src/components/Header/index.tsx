import React, { useState } from 'react';
import { MobileMenu } from './MobileMenu';
import { StyledHeader, StyledLogoText, StyledMenu, StyledMenuItem, StyledHamburgerIcon } from './styles';

export const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <StyledHeader>
                <StyledLogoText>Grytsayev</StyledLogoText>
                <StyledMenu>
                    <StyledMenuItem>Bio</StyledMenuItem>
                    <StyledMenuItem>Contacts</StyledMenuItem>
                    <StyledMenuItem>My work</StyledMenuItem>
                </StyledMenu>
                <StyledHamburgerIcon onClick={() => setIsMobileMenuOpen(true)}>
                    {/* Add hamburger icon here */}
                </StyledHamburgerIcon>
            </StyledHeader>
            <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
        </>
    );
};
