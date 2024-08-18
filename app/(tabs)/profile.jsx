import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Profile = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Profile</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
})

export default Profile