/* eslint-disable react/no-unknown-property */
import React from 'react';
import { BackgroundComponent } from './components/Background';
import { Canvas } from '@react-three/fiber';

import { Home } from './views/Home';
import { StyledAppContainer } from './appStyles';
import { Header } from './components/Header';

function App() {
    return (
        <StyledAppContainer>
            <Header />
            <Home />
            <Canvas
                style={{ position: 'fixed', zIndex: -1, top: 0, left: 0 }}
                camera={{ position: [0, 0, 1] }}
            >
                <color attach="background" args={['#000']} />

                <BackgroundComponent />
            </Canvas>
        </StyledAppContainer>
    );
}

export default App;
