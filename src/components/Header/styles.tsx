import styled from 'styled-components';

export const StyledHeader = styled.div`
    display: flex;
    justify-content: space-around;
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 75px;
    border: solid #a0a0a0;
    border-width: 0 0 1px 0;

    @media (max-width: 748px) {
        flex-direction: column;
        align-items: flex-start;
        height: auto;
        background-color: #333;
    }
`;

export const StyledLogoText = styled.h6`
    font-size: 30px;
    font-weight: 700;
    margin: 20px 0;
    color: #fff;
`;

export const StyledMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;

    @media (max-width: 748px) {
        display: none;
    }
`;

export const StyledHamburgerIcon = styled.div`
    display: none;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    cursor: pointer;

    @media (max-width: 748px) {
        display: flex;
    }
`;

export const StyledMenuItem = styled.li`
    margin: 0 15px;
    font-size: 18px;
    color: #fff;

    &:hover {
        cursor: pointer;
        color: #ccc;
    }
`;

export const StyledMobileMenu = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #333;
    z-index: 1;
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;

    @media (min-width: 749px) {
        display: none;
    }
`;

export const StyledMobileMenuItem = styled.div`
    margin: 15px;
    font-size: 18px;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #ccc;
    }
`;
