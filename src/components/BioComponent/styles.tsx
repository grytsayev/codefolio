import styled from 'styled-components';

export const StyledBioComponentContainer = styled.div`
    display: flex;
`;

export const BiographyContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: scroll;
    border: 1px solid gray;
    box-shadow: rgba(218, 217, 230, 0.15) 0px 48px 100px 0px;
    &.fade-in {
        opacity: 0;
        transition: opacity 2s ease-in;
    }

    &.fade-in.is-visible {
        opacity: 1;
    }
`;

export const Image = styled.img`
    width: 500px;
    height: 500px;
    border-radius: 50%;
`;

export const TextContainer = styled.div`
    margin-left: 20px;
`;

export const Name = styled.h1`
    font-size: 24px;
    color: #333;
`;

export const Title = styled.h2`
    font-size: 18px;
    color: #666;
`;

export const Description = styled.p`
    font-size: 16px;
    color: #999;
`;
