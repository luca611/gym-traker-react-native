import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const WelcomePage = () => {
    return (
        <View style={styles.container}>

            <LinearGradient style={styles.container} start={{x:0,y:0}} end={{x:0,y:6}} colors={['#000','#FF3A3A']} >
                <Text style={styles.title}>Welcome to GIMIFY</Text>
                <Text style={styles.subtitle}>Keep track of your gains</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => router.replace('/login')}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <Text style={{ color: '#fff', marginTop: 10 }}>or</Text>
                    <TouchableOpacity style={styles.button} onPress={() => router.replace('/register')}>
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                </View>

            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
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
        color: '#782929',
        marginBottom: '60%',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    button: {
        width: "80%",
        height: 50,
        backgroundColor: '#545454',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 10,
        backgroundColor: '#FF3A3A',
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