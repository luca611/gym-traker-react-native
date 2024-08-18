import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const workouts = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>workouts</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
})

export default workouts