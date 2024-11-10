import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Keyboard, Platform} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { Menu as MenuIcon, Search as SearchIcon } from 'lucide-react-native';

export const AppleMapComponent = () => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const mapRef = useRef(null);

    useEffect(() => {
        const getLocation = async () => {
            try {
                let { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                    setErrorMsg('Permission to access location was denied');
                    return;
                }
        
                let currentLocation = await Location.getCurrentPositionAsync({});
                if (!currentLocation) {
                    setErrorMsg('Unable to get current location');
                    return;
                }
                setLocation(currentLocation);
            } catch (error) {
                const errorMessage = error?.message || 'An unknown error occurred';
                setErrorMsg('Error getting location: ' + errorMessage);
            }
        };

        getLocation();
    }, []);

    if (isLoading && !location) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Map Loading...</Text>
            </View>
        );
    }

    if (errorMsg) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{errorMsg}</Text>
            </View>
        );
    }

    const handleSearch = async () => {
        try {
            if (!searchQuery.trim()) {
                setErrorMsg('Please enter a search query');
                return;
            }
    
            const results = await Location.geocodeAsync(searchQuery);
            
            if (!results || results.length === 0) {
                setErrorMsg('No results found');
                return;
            }
    
            setSearchResults(results);
            
            // Check if mapRef.current exists before calling animateToRegion
            if (mapRef.current) {
                mapRef.current.animateToRegion({
                    latitude: results[0].latitude,
                    longitude: results[0].longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }, 1000);
            }
        } catch (error) {
            const errorMessage = error?.message || 'An unknown error occurred';
            setErrorMsg('Error searching location: ' + errorMessage);
        } finally {
            Keyboard.dismiss();
        }
    };
    
    

    if (errorMsg) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{errorMsg}</Text>
            </View>
        );
    }

    if (!location) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Map Loading...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <View style={styles.searchBar}>
                    <TouchableOpacity style={styles.menuButton}>
                        <MenuIcon size={24} color="#666" />
                    </TouchableOpacity>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Where are you going?"
                        placeholderTextColor="#666"
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                        onSubmitEditing={handleSearch}
                        returnKeyType="search"
                    />
                    <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
                        <SearchIcon size={20} color="#666" />
                    </TouchableOpacity>
                </View>
            </View>
            
            <MapView
                ref={mapRef}
                style={styles.map}
                userInterfaceStyle="dark"
                provider={null}
                initialRegion={{
                    latitude: location?.coords?.latitude || 0,
                    longitude: location?.coords?.longitude || 0,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                showsUserLocation={true}
                showsCompass={true}
                showsScale={true}
                mapType="mutedStandard"
            >
                {searchResults.map((result, index) => (
                    <Marker
                        key={index}
                        coordinate={{
                            latitude: result.latitude,
                            longitude: result.longitude
                        }}
                    />
                ))}
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10,
    },
    searchContainer: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? 50 : 20,
        left: 20,
        right: 20,
        zIndex: 1,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 22,
        paddingHorizontal: 8,
        height: 44,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    menuButton: {
        padding: 8,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        marginLeft: 4,
        color: '#333',
    },
    searchButton: {
        padding: 8,
    }
});