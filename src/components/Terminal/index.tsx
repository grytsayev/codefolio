import React from 'react';
import { changeActiveScreen } from 'src/redux/slices/projectslice';
import { TypesOfScreen } from 'src/redux/slices/types';
import { useAppDispatch } from 'src/redux/store';
import { StyledTerminal, StyledTerminalContainer } from './styles';

export function Terminal() {
    const dispatch = useAppDispatch();

    const handleDirectoryChange = (input: string) => {
        switch (input) {
            case 'bio':
                dispatch(changeActiveScreen(TypesOfScreen.Bio));
                break;
            case 'contacts':
                dispatch(changeActiveScreen(TypesOfScreen.Contacts));
                break;
            default:
                return 'No such information';
        }
    };

    const commands = {
        whoami: 'jackharper',
        cd: (directory: string) => handleDirectoryChange(directory)
    };

    return (
        <StyledTerminalContainer>
            <StyledTerminal
                commands={commands}
                theme="my-custom-theme"
                themes={{
                    'my-custom-theme': {
                        themeBGColor: 'rgba(255, 255, 255, 0.05)',
                        themeToolbarColor: 'rgba(0, 0, 0, 0.05)',
                        themeColor: '#FFFEFC',
                        themePromptColor: 'rgba(145, 255, 133, 0.694)'
                    }
                }}
            />
        </StyledTerminalContainer>
    );
}
