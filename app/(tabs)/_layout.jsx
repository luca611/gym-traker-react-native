import { Image, StyleSheet, Text, View } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import { NAVBAR } from '../../assets/icons/icons'
import React from 'react'

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View style={{
            marginTop: 10,
        }}>
            <View style={{
                width: 50, height: 40,
                flex: 1,
                justifyContent: 'center',
            }}
            >
                <Image
                    style={{
                        width: 20, height: 20,
                        texrAlign: 'center',
                        left: 15,
                        tintColor: focused ? '#FF2E2E' : '#fff',
                    }}
                    source={icon}
                />
            </View>
            <View style={{
                width: 50,
            }} >
                <Text style={{
                    color: focused ? '#FF2E2E' : '#fff',
                    fontSize: 10,
                    textAlign: 'center',
                    fontWeight: 'bold',
                    bottom: -5,
                }}>{name}</Text>
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
                                icon={NAVBAR.home.source}
                                focused={focused}
                                color={color}
                                name="Home"
                            />
                        )
                    }}
                />

                <Tabs.Screen name="workouts" styles={styles.tab}
                    options={{
                        title: 'workouts',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={NAVBAR.workout.source}
                                color={color}
                                focused={focused}
                                name="workouts"
                            />
                        )
                    }}
                />

                <Tabs.Screen name="profile" styles={styles.tab}
                    options={{
                        title: 'profile',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={NAVBAR.profile.source}
                                color={color}
                                focused={focused}
                                name="profile"
                            />
                        )
                    }}
                />

                <Tabs.Screen name="ai" styles={styles.tab}
                    options={{
                        title: 'ai',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={NAVBAR.ai.source}
                                color={color}
                                focused={focused}
                                name="ai help"
                            />
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