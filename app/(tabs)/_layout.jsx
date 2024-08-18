import { Image, StyleSheet, Text, View } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import React from 'react'

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View style={{
            marginTop: 10,
        }}>
            <View style={{
                width: 50, height: 40,
                flex:1,
                justifyContent: 'center',
            }}
            >
                <Image
                    style={{
                        width: 20, height: 20,
                        texrAlign: 'center',
                        tintColor: '#fff',
                        left: 15,
                    }}
                    source={icon}
                />
            </View>
            <View style={{
                width: 50, 
            }} >
            <Text style={{ color: '#fff', fontSize: 12, textAlign: 'center', marginBottom:-5}}>{name}</Text>
            </View>
        </View>
    )
}
const TabsLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: '#000',
                    tabBarInactiveTintColor: '#000',
                    tabBarStyle: { backgroundColor: '#000' }
                }}
            >
                <Tabs.Screen name="home" styles={styles.tab}
                    options={{
                        title: 'Home',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={require('../../assets/icons/home.png')}
                                color={color}
                                focused={focused}
                                name="Home">
                            </TabIcon>
                        )
                    }}
                />

                <Tabs.Screen name="workouts" styles={styles.tab}
                    options={{
                        title: 'workouts',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={require('../../assets/icons/workout.png')}
                                color={color}
                                focused={focused}
                                name="workouts">
                            </TabIcon>
                        )
                    }}
                />

                <Tabs.Screen name="profile" styles={styles.tab}
                    options={{
                        title: 'profile',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={require('../../assets/icons/profile.png')}
                                color={color}
                                focused={focused}
                                name="profile">
                            </TabIcon>
                        )
                    }}
                />
            </Tabs>
        </>
    )
}

export default TabsLayout

const styles = StyleSheet.create({
    tab: {
        backgroundColor: '#000',
        color: '#fff'
    }
})