import React from "react";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import { PlatformMap } from '../backend/gps/MapView';

const GPSNavigationScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>GPS Navigation</Text>
            </View>
            <View style={styles.contentContainer}>
                <PlatformMap />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        padding: 16,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 24,
    },
    contentContainer: {
        flex: 1,
    },
});

export default GPSNavigationScreen;