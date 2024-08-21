import React, { useState } from 'react';
import { StatusBar, ScrollView, View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { NAVBAR } from '../../assets/icons/icons';
import { Button } from 'react-native-web';

const workouts = () => {
    return (
        <LinearGradient style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 0, y: 6 }} colors={['#000', '#FF3A3A']} >
            <ScrollView style={styles.scroll}>
                <SafeAreaView style={styles.container}>
                    <Text style={styles.title}>Workouts</Text>
                    <View style={styles.section}>
                        <View>
                            <Text style={styles.subtitle}>Quick start</Text>
                        </View>
                        <ScrollView style={styles.setContiner} horizontal={true}>
                            <View style={styles.set}>
                                <Text style={styles.setText}>Summer ☀️</Text>
                                <TouchableOpacity style={styles.setButton}><Text style={styles.textButon}>View more</Text></TouchableOpacity>
                            </View>

                            <View style={styles.set}>
                                <Text style={styles.setText}>Chill one</Text>
                                <TouchableOpacity style={styles.setButton}><Text style={styles.textButon}>View more</Text></TouchableOpacity>
                            </View>

                            <View style={styles.set}>
                                <Text style={styles.setText}>Shoulder focused</Text>
                                <TouchableOpacity style={styles.setButton}><Text style={styles.textButon}>View more</Text></TouchableOpacity>
                            </View>

                            <View style={styles.set}>
                                <Text style={styles.setText}>Race preparation</Text>
                                <TouchableOpacity style={styles.setButton}><Text style={styles.textButon}>View more</Text></TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                    <Text style={styles.secondaryTitle}>Routines</Text>
                    <View style={styles.quickTools}>
                        <TouchableOpacity style={styles.CreateButton}>
                            <Text style={styles.textButon}>Create new routine</Text>
                        </TouchableOpacity>
                        <TextInput style={styles.input} placeholder="Search routine" placeholderTextColor="#999" />
                    </View>

                    <ScrollView style={styles.routinesList}>
                        <View style={styles.routine}>
                            <Text style={styles.subtitle}>Powerlift race prepraration</Text>
                            <Text style={styles.description}>Preparation for my powerlift race </Text>
                            <View style={styles.quickTools}>
                                <TouchableOpacity style={styles.CreateButton}>
                                    <Text style={styles.textButon}>View routine</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.deleteButton}>
                                    <Text style={styles.textButon}>Delete routine</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.routine}>
                            <Text style={styles.subtitle}>Powerlift race prepraration</Text>
                            <Text style={styles.description}>Preparation for my powerlift race </Text>
                            <View style={styles.quickTools}>
                                <TouchableOpacity style={styles.CreateButton}>
                                    <Text style={styles.textButon}>View routine</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.deleteButton}>
                                    <Text style={styles.textButon}>Delete routine</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.routine}>
                            <Text style={styles.subtitle}>Powerlift race prepraration</Text>
                            <Text style={styles.description}>Preparation for my powerlift race </Text>
                            <View style={styles.quickTools}>
                                <TouchableOpacity style={styles.CreateButton}>
                                    <Text style={styles.textButon}>View routine</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.deleteButton}>
                                    <Text style={styles.textButon}>Delete routine</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.routine}>
                            <Text style={styles.subtitle}>Powerlift race prepraration</Text>
                            <Text style={styles.description}>Preparation for my powerlift race </Text>
                            <View style={styles.quickTools}>
                                <TouchableOpacity style={styles.CreateButton}>
                                    <Text style={styles.textButon}>View routine</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.deleteButton}>
                                    <Text style={styles.textButon}>Delete routine</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.routine}>
                            <Text style={styles.subtitle}>Powerlift race prepraration</Text>
                            <Text style={styles.description}>Preparation for my powerlift race </Text>
                            <View style={styles.quickTools}>
                                <TouchableOpacity style={styles.CreateButton}>
                                    <Text style={styles.textButon}>View routine</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.deleteButton}>
                                    <Text style={styles.textButon}>Delete routine</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.routine}>
                            <Text style={styles.subtitle}>Powerlift race prepraration</Text>
                            <Text style={styles.description}>Preparation for my powerlift race </Text>
                            <View style={styles.quickTools}>
                                <TouchableOpacity style={styles.CreateButton}>
                                    <Text style={styles.textButon}>View routine</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.deleteButton}>
                                    <Text style={styles.textButon}>Delete routine</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </ScrollView>
        </LinearGradient>

    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 4,
        width: '100%',
        height: '100%',
    },

    title: {
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 16,
    },

    secondaryTitle: {
        marginTop: 10,
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 7,
    },

    subtitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    scroll: {
        marginHorizontal: 20,
        height: 600,
    },

    section: {
        display: 'flex',
        flexDirection: 'column',
        padding: 16,
        backgroundColor: '#1B1B1B',
        height: 200,
        width: '100%',
        borderRadius: 5,
        marginLeft: 5,
    },

    setContiner: {
        width: '100%',
        overflow: 'hidden',
    },

    set: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#000',
        borderRadius: 5,
        width: 200,
        height: 120,
        marginRight: 5,
    },

    setText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

    setButton: {
        backgroundColor: '#FF3A3A',
        width: '80%',
        height: 30,
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%',
    },
    textButon: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },

    quickTools: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },

    CreateButton: {
        backgroundColor: '#FF3A3A',
        width: '48%',
        marginRight: '2%',
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        backgroundColor: '#333',
        color: '#fff',
        paddingHorizontal: 10,
        marginLeft: '2%',
        borderRadius: 5,
        width: '48%',
        height: 40,
    },

    routinesList: {
        width: '100%',
        height: 300,
        backgroundColor: '#1B1B1B',
        borderRadius: 5,
        marginTop: 10,
        padding: '4%',
    },

    routine: {
        width: '100%',
        height: 'fit-content',
        backgroundColor: '#000',
        borderRadius: 3,
        padding: '4%',
        marginBottom: 10,
    },

    description: {
        color: '#333',
        fontSize: 12,
        fontWeight: 'bold',
    },
    
    deleteButton:{
        backgroundColor: '#EF5555',
        width: '48%',
        marginLeft: '2%',
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default workouts