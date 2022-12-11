export interface ProjectState {
    terminalOpen: boolean;
    activeScreen?: TypesOfScreen;
}

export enum TypesOfScreen {
    Bio = 'Bio',
    Contacts = 'Contacts'
}
