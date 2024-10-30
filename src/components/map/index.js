// src/screens/LoginView.js
import React, { useEffect, useRef, useState } from 'react';
import { Alert, StyleSheet, View, Image } from 'react-native';

import MapView, { Marker } from 'react-native-maps';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { getPoints, getPointsByFilter } from '../../services/Points'; // Altere para o caminho correto
import { Picker } from '@react-native-picker/picker';


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
    const [filteredPoints, setFilteredPoints] = useState([]); // Estado para armazenar os pontos filtrados
    const [selectedFilter, setSelectedFilter] = useState('Todos'); // Filtro selecionado

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
                let fetchedPoints = []; // Inicializa com um array vazio
                if (selectedFilter === "Todos") {
                    fetchedPoints = await getPoints(); // Busca todos os pontos
                } else {
                    fetchedPoints = await getPointsByFilter(selectedFilter); // Busca os pontos filtrados
                }
                setPoints(fetchedPoints); // Atualiza o estado com os pontos
            } catch (error) {
                Alert.alert('Error', 'Failed to fetch points');
            }
        };

        fetchPoints(); // Chama a função para buscar os pontos
    }, [selectedFilter]); // Adicione `selectedFilter` ao array de dependências

    const filterPoints = (filter) => {
        setSelectedFilter(filter);
        if (filter === 'Todos') {
            setFilteredPoints(points);
        } else {
            const filtered = points.filter(point => point.category === filter);
            setFilteredPoints(filtered);
        }
    };

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
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedFilter}
                    onValueChange={(itemValue) => filterPoints(itemValue)} // Filtra os pontos ao selecionar uma opção
                    style={styles.picker}
                >
                    <Picker.Item label="Todos" value="Todos" />
                    <Picker.Item label="Locais" value="Local" />
                    <Picker.Item label="Provas" value="Prova" />
                    {/* Adicione mais categorias conforme necessário */}
                </Picker>
            </View>

            {mapRef ? (
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
                    {points ? (
                        points.map(point => (
                            <Marker
                                key={point.id}
                                coordinate={{
                                    latitude: parseFloat(point.latitude),
                                    longitude: parseFloat(point.longitude),
                                }}
                                title={point.name}
                                description={point.description}
                            >
                                <Image
                                    source={{ uri: `http://192.168.1.16:8080/images/view/icon/${point.icon}` }} // URI do ícone
                                    style={{
                                        width: point.size, // Tamanho personalizado por ponto
                                        height: point.size,
                                    }}
                                    resizeMode="contain" // Mantém a proporção sem cortar
                                />
                            </Marker>
                        ))
                    ) : (
                        <Marker
                            coordinate={{
                                latitude: -29.702578596327005,
                                longitude: -54.696730371914846
                            }}
                            title={"Erro"}
                            description={"Falha em buscar os pontos!"}
                        >
                            <Image
                                source={require('../../../assets/icons/interrogacao1.png')} // Caminho para o ícone de interrogação
                                style={{ width: 60, height: 60 }} // Aumentado o tamanho do ícone
                                resizeMode="contain" // Mantém a proporção do ícone
                            />
                        </Marker>
                    )}
                </MapView>
            ) : (
                <Text>Não foi possivel visualizar o mapa, verifique a conexão com a internet!</Text>
            )}
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
    pickerContainer: {
        backgroundColor: '#eeb5b8',
        padding: 10,
        borderRadius: 20,
        elevation: 2, // Sombra para destacar o picker
    },
    picker: {
        height: 50,
        width: '100%',
    },
});

export default MapCard;

/* 
*/