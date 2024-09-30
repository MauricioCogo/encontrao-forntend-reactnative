// src/screens/LoginView.js
import React, { useEffect, useRef, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { getPoints } from '../../services/Points'; // Altere para o caminho correto

const center = {
    latitude: -29.703101463771155,
    longitude: -54.69634891340955,
};

const iffarBoundaries = {
    northEast: { latitude: -29.699834360033332, longitude: -54.69238964101114 },
    southWest: { latitude: -29.707714370174703, longitude: -54.69917297469025 }
};

const MapCard = () => {
    const [location, setLocation] = useState(null);
    const [points, setPoints] = useState([]); // Estado para armazenar os pontos
    const mapRef = useRef(null);

    async function requestLocationPermission() {
        try {
            const { status } = await requestForegroundPermissionsAsync();
            if (status === 'granted') {
                const { coords } = await getCurrentPositionAsync();
                setLocation(coords);
            } else {
                Alert.alert('Posição negada', 'Não foi possivel localizar pois a permissão foi negada.');
            }
        } catch (error) {
            Alert.alert('Error', 'Failed to get location permission or current position.');
        }
    }

    useEffect(() => {
        requestLocationPermission();
    }, []);

    useEffect(() => {
        const fetchPoints = async () => {
            try {
                const fetchedPoints = await getPoints(); // Busca os pontos
                setPoints(fetchedPoints); // Atualiza o estado com os pontos
            } catch (error) {
                Alert.alert('Error', 'Failed to fetch points');
            }
        };

        fetchPoints(); // Chama a função para buscar os pontos
    }, []); // Array de dependências

    useEffect(() => {
        if (mapRef.current && location) {
            mapRef.current.fitToCoordinates(
                [
                    iffarBoundaries.northEast,
                    iffarBoundaries.southWest,
                ],
                {
                    edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
                    animated: true,
                }
            );
        }
    }, [location]);

    return (
        <View style={styles.container}>
            <MapView
                ref={mapRef}
                style={styles.map}
                mapType="satellite"
                initialRegion={{
                    ...center,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
                showsUserLocation={true}
                minZoomLevel={15}
                onRegionChangeComplete={(region) => {
                    const lat = Math.max(
                        Math.min(region.latitude, iffarBoundaries.northEast.latitude),
                        iffarBoundaries.southWest.latitude
                    );
                    const lng = Math.max(
                        Math.min(region.longitude, iffarBoundaries.northEast.longitude),
                        iffarBoundaries.southWest.longitude
                    );

                    if (lat !== region.latitude || lng !== region.longitude) {
                        mapRef.current.animateToRegion({
                            ...region,
                            latitude: lat,
                            longitude: lng,
                        }, 500);
                    }
                }}
            >
                {/* Renderiza os marcadores com base nos pontos */}
                {points.map(point => (
                    <Marker
                        key={point.id}
                        coordinate={{
                            latitude: parseFloat(point.latitude),
                            longitude: parseFloat(point.longitude),
                        }}
                        title={point.name}
                        description={point.description}
                    />
                ))}
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});

export default MapCard;
