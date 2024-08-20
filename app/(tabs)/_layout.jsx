import { Image, StyleSheet, Text, View } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import React from 'react'

const TabIcon = ({ icon, color, name, focused }) => {
    let imageSource;
    if(focused){
        let string = `../../assets/icons/Focused/`+icon;
        imageSource = require(`../../assets/icons/Focused/home.png`);
    }else{
        let string = `../../assets/icons/Normal/`;
        imageSource = require(`../../assets/icons/Normal/home.png`);
    }
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
                    source={imageSource}
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
                        tabBarIcon: ({color,focused }) => (
                            <TabIcon
                                icon={"home.png"}
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
                                icon={"workout.png "}
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
                                icon={"profile.png"}
                                color={color}
                                focused={focused}
                                name="profile"
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