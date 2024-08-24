import { Image, View, Text, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, TouchableOpacity, GestureHandlerRootView } from 'react-native-gesture-handler';
import { router } from 'expo-router';
import { NAVBAR } from '../../assets/icons/icons';
import { Icon } from '@mui/material';

const routinePage = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <LinearGradient style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 0, y: 6 }} colors={['#000', '#FF3A3A']} >
                <SafeAreaView style={styles.container}>
                    <View style={styles.TimerContainer}>
                        <View style={styles.Timer}>
                            <Image source={NAVBAR.timer.source} style={styles.Icon}></Image>
                            <View>
                                <Text style={styles.timerText}>Remaining time</Text>
                                <Text style={styles.timerText}>00:00</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.closeButton} onPress={()=> router.replace('/workouts')}>
                            <Image source={NAVBAR.close.source} style={styles.TimerIcon}></Image>
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={styles.scroll}>
                        <View>
                            <Text style={styles.Title}>Summer ☀️</Text>
                        </View>
                        <View>
                            <View style={styles.Card}>
                                <View style={styles.CardHeader}>
                                    <Image source={require('../../uploads/image.png')} style={styles.CardIcon}></Image>
                                    <Text style={styles.CardTitle}>Exercise Name</Text>
                                    <View style={styles.CardTag}>
                                        <Text style={styles.CardTagText}>Sumo</Text>
                                    </View>
                                </View>
                                <View style={styles.CardBody}>
                                    <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae dolor iaculis, auctor orci sit amet, vestibulum metus. Proin sed tempor dui. Donec vulputate, nisl vitae imperdiet </Text>
                                </View>
                            </View>
                            <View style={styles.repsContainer}>
                                <View style={styles.header}>
                                    <Text style={styles.headerText}>Set</Text>
                                    <Text style={styles.headerText}>Weight</Text>
                                    <Text style={styles.headerText}>Reps</Text>
                                    <Text style={styles.headerText}>Rpe</Text>
                                </View>
                                <View style={styles.reps}>
                                    <Text style={styles.repsText}>1</Text>
                                    <Text style={styles.repsText}>110kg</Text>
                                    <Text style={styles.repsText}>12</Text>
                                    <Text style={styles.repsText}>9</Text>
                                </View>
                                <TouchableOpacity style={styles.add}>
                                    <Image source={NAVBAR.add.source} style={styles.TimerIcon}></Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </LinearGradient>
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    TimerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        position: 'absolute',
        width: '100%',
        textAlign: 'center',
        top: 30,
    },

    Timer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FF3A3A',
        borderRadius: 5,
        padding: 5,
    },
    Icon: {
        width: 34,
        height: 34,
        marginRight: 10,
    },
    TimerIcon: {
        width: 20,
        height: 20,
    },
    timerText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    closeButton: {
        marginLeft: 10,
        padding: 10,
        aspectRatio: 1,
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF3A3A',
        borderRadius: 100,
    },
    scroll: {
        marginHorizontal: '2.5%',
        flex: 1,
        width: '100%',
        marginTop: 85,
    },
    Title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#FFF',
    },
    Card: {
        backgroundColor: '#151515',
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
        width: '95%',
    },
    CardHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        width: '100%',
    },
    CardIcon: {
        width: 50,
        height: 50,
    },
    CardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
    },
    CardTag: {
        backgroundColor: '#FF3A3A',
        padding: 5,
        borderRadius: 5,
    },
    CardTagText: {
        color: '#FFF',
        fontSize: 12,
        fontWeight: 'bold',
    },
    CardBody: {
        marginTop: 10,
    },
    description: {
        color: '#FFF',
        fontSize: 14,
    },
    repsContainer: {
        marginTop: 15,
        width: '100%',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        width: '95%',
        backgroundColor: '#151515',
        justifyContent: 'space-between',
    },
    headerText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
        padding: 10,
    },
    reps: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        padding: 10,
        borderRadius: 5,
        textAlign: 'center',
        width: '95%',
        backgroundColor: 'rgba(207, 207, 207, 0.3)',
        justifyContent: 'space-between',
    },
    repsText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    add: {
        marginTop: 10,
        padding: 10,
        width: 30,
        height: 30,
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(207, 207, 207, 0.3)',
        borderRadius: 100,
        alignSelf: 'center',
    },
})

export default routinePage