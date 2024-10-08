import * as React from 'react';
import MapCard from '../../components/map';
import Background from '../../components/background';
import Header from '../../components/header';

export default function Map() {
    return (
        <Background>
            <Header />
            <MapCard />
        </Background>
    );
}
