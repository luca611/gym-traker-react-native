import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { StatusBar, ScrollView, View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from 'react-native-chart-kit'

const Profile = () => {
    const wheight = {
        labels: ['jen', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                data: [85, 90, 87, 86, 92, 97],
                strokeWidth: 2,
            },
        ],
    };
    const lifted = {
        labels: ['jen', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                data: [7890, 8022, 8305, 8612, 9010, 8810],
                strokeWidth: 2,
            },
        ],
    };
    return (
        <LinearGradient style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 0, y: 6 }} colors={['#000', '#FF3A3A']} >
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scroll}>
                    <Text style={styles.title}>Your profile</Text>
                    <View style={styles.profile}>
                        <Image style={styles.profileImage} source={require('../../uploads/profile.jpg')} />
                        <View>
                            <Text style={styles.profileName}>the chad</Text>
                            <Text style={styles.info}> 35yo </Text>
                            <Text style={styles.tag}> leg god </Text>
                        </View>
                    </View>
                    <Text style={styles.title}>Stats</Text>
                    <Text style={styles.info}>Weight:</Text>
                    <View style={styles.tools}>
                        <TouchableOpacity style={styles.tool}>
                            <Text style={styles.toolText}>add mesurament</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tool}>
                            <Text style={styles.toolText}>view more</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tool}>
                            <Text style={styles.toolText}>share</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <LineChart
                            data={wheight}
                            width={Dimensions.get('window').width - 30}
                            height={220}
                            yAxisLabel={'Kg '}
                            chartConfig={{
                                backgroundGradientFrom: '#151515',
                                backgroundGradientTo: '#151515',
                                color: (opacity = 1) => `rgba(255, 58, 58, ${opacity})`,
                                style: {
                                    borderRadius: 5,
                                }
                            }}
                            bezier
                            style={{
                                marginVertical: 8,
                                borderRadius: 10,
                            }}
                        />
                    </View>
                    <Text style={styles.info}>lifted:</Text>
                    <View style={styles.tools}>
                        <TouchableOpacity style={styles.tool}>
                            <Text style={styles.toolText}>add mesurament</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tool}>
                            <Text style={styles.toolText}>view more</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tool}>
                            <Text style={styles.toolText}>share</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <LineChart
                            data={lifted}
                            width={Dimensions.get('window').width - 30}
                            height={220}
                            yAxisLabel={'Kg '}
                            chartConfig={{
                                decimalPlaces: 0,
                                backgroundGradientFrom: '#151515',
                                backgroundGradientTo: '#151515',
                                color: (opacity = 1) => `rgba(255, 58, 58, ${opacity})`,
                                style: {
                                    borderRadius: 5,
                                }
                            }}
                            bezier
                            style={{
                                marginVertical: 8,
                                borderRadius: 10,
                            }}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 15,
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    scroll: {
        width: '100%',
        padding: 15,
        marginHorizontal: 20,
        flex: 1,
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    profile: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 15,
    },
    profileName: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 5,
    },
    tag: {
        color: '#FF3A3A',
        fontStyle: 'italic',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
    },
    info: {
        fontStyle: 'italic',
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
    },
    tools: {
        marginTop: 5,
        marginBottom: 5,
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'space-between',
    },
    tool: {
        backgroundColor: '#FF3A3A',
        padding: 10,
        borderRadius: 5,
        paddingLeft: 15,
        paddingRight: 15,
    },
    toolText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    }
})

export default Profile