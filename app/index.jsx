import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

const WelcomePage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Gymify</Text>
            <Text style={styles.subtitle}>Keep track of your progress starting from now</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() =>  router.replace('/login')}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <Text style={{ color: '#fff', marginTop: 10 }}>or</Text>
                <TouchableOpacity style={styles.button} onPress={() => router.replace('/register')}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 50,
        color: '#fff',
        marginBottom: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    subtitle: {
        width: '80%',
        fontSize: 15,
        color: '#9c9c9c',
        marginBottom: 20,
        textAlign: 'center',
    },
    button: {
        width: "80%",
        height: 50,
        backgroundColor: '#545454',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonContainer: {
        marginTop: 60,
        width: '100%',
        alignItems: 'center',
    }
});

export default WelcomePage;