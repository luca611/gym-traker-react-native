import { View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, TouchableOpacity, GestureHandlerRootView } from 'react-native-gesture-handler';
import { router } from 'expo-router';

const RoutineCreation = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <LinearGradient style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 0, y: 6 }} colors={['#000', '#FF3A3A']} >
                <SafeAreaView style={styles.container}>
                    <View style={styles.topBar}>
                        <TouchableOpacity>
                            <Text style={styles.topBarLink} onPress={() => router.replace('/workouts')}>back</Text>
                        </TouchableOpacity>
                        <Text style={styles.Title}>Routine Creation</Text>
                        <TouchableOpacity>
                            <Text style={styles.topBarLink} onPress={() => router.replace('/workouts')}>save</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={styles.scroll}>
                        <TextInput
                            style={styles.input}
                            placeholder="Routine Name"
                            placeholderTextColor="#999"
                        />
                        <View style={styles.line}></View>
                        <TouchableOpacity style={styles.addExercise}>
                            <Text style={styles.Title}>Add Exercise</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </SafeAreaView>
            </LinearGradient>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scroll: {
        marginHorizontal: '2.5%',
        flex: 1,
        marginTop: 85,
    },
    topBar: {
        position: 'absolute',   
        width: '100%',
        height: 95,
        backgroundColor: '#151515',
        display: 'flex',
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    topBarLink:{
        color: '#FF3A3A',
        fontSize: 16,
        fontWeight: 'bold',
    },

    Title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FFF',
    },
    input: {
        height: 50,
        color: '#fff',
        paddingHorizontal: 10,
        marginBottom: 10,
        fontSize:25,
        borderRadius: 5,
        width: '100%',
        fontWeight: 'bold',
        alignSelf: 'left',
    },
    line: {
        height: 1,
        width: '100%',
        backgroundColor: '#333',
        marginBottom: 10,
    },
    addExercise: {
        marginTop: 10,
        height: 50,
        backgroundColor: '#FF3A3A',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
});

export default RoutineCreation;