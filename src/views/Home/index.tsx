import React from 'react';
import { useSelector } from 'react-redux';
import { BioComponent } from 'src/components/BioComponent';
import { ContactsComponent } from 'src/components/ContactsComponent';
import { Terminal } from 'src/components/Terminal';
import { getFromProjectState } from 'src/redux/slices/projectslice';
import { TypesOfScreen } from 'src/redux/slices/types';
import { StyledHomeContainer } from './styles';

export const Home = () => {
    const { terminalOpen, activeScreen } = useSelector(getFromProjectState);

    return (
        <StyledHomeContainer>
            {terminalOpen && <Terminal />}
            {activeScreen === TypesOfScreen.Bio && <BioComponent />}
            {activeScreen === TypesOfScreen.Contacts && <ContactsComponent />}
        </StyledHomeContainer>
    );
};
