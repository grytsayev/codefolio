import * as React from 'react';
import { BiographyContainer } from './styles';

interface BiographyProps {
    name: string;
    title: string;
    description: string;
    imageUrl: string;
}

export const Biography: React.FC<BiographyProps> = () => {
    const elementRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const element = elementRef.current;
        if (!element) {
            return;
        }

        element.classList.add('fade-in');

        setTimeout(() => {
            element.classList.add('is-visible');
        }, 50);
    }, []);

    return (
        <BiographyContainer ref={elementRef}>
            <h2>Hi there! I’m a UX designer, developer and consultant working remotely from home.</h2>
        </BiographyContainer>
    );
};
