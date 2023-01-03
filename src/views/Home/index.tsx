import React from 'react';
import { useSelector } from 'react-redux';
import { Biography } from 'src/components/BioComponent';
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
            {activeScreen === TypesOfScreen.Bio && (
                <Biography
                    name="Illya"
                    title="title"
                    description="Ola oal"
                    imageUrl="https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1042&q=80"
                />
            )}
            {activeScreen === TypesOfScreen.Contacts && <ContactsComponent />}
        </StyledHomeContainer>
    );
};
