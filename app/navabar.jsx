import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Navbar = () => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.navbarTitle}>NAVBAR</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: '#f8f8f8',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        
    },
    navbarTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Navbar;