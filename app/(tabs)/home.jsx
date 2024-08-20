import React, { useState } from 'react';
import { StatusBar, ScrollView, View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';


const Home = () => {
    let streak = 0;
    let maxStreak = 42;
    let Weight = 1;
    let maxWeight = 190;

    const apiKey = '';

    async function getGroqChatCompletion(userMessage) {
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                messages: [{ role: 'user', content: "(the question must be gym related, if not refuse to answser, use also emoji, avoid ** **)" + userMessage }],
                model: 'llama3-70b-8192'
            })
        });

        const data = await response.json();
        return data.choices[0]?.message?.content || "";
    }

    const handleRequest = () => {
        console.log('requesting');
        setPrompt('');
        response = getGroqChatCompletion(prompt);
        response.then((data) => {
            data = data + "\nThe answer is Ai generated so it might include errors, please verify it with a professional trainer.";
            setText(data);
        });
    }

    const [prompt, setPrompt] = useState('')
    const [displayedText, setText] = useState('')
    return (
        <LinearGradient style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 0, y: 6 }} colors={['#000', '#FF3A3A']} >
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scroll}>
                    <Text style={styles.title}>Home</Text>

                    <ScrollView style={styles.quickTools} horizontal={true} >
                        <View style={styles.section}>
                            <Text style={styles.quickToolsText}>Ongoing streak:</Text>
                            <View style={styles.streak}>
                                <Text style={styles.streakCount}>{streak}</Text>
                                <Text style={styles.streakUnit}>days</Text>
                            </View>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.quickToolsText}>Best streak:</Text>
                            <View style={styles.streak}>
                                <Text style={styles.streakCount}>{maxStreak}</Text>
                                <Text style={styles.streakUnit}>days</Text>
                            </View>
                        </View>
                        
                        <View style={styles.section}>
                            <Text style={styles.quickToolsText}>Wheight lifted:</Text>
                            <View style={styles.streak}>
                                <Text style={styles.streakCount}>{Weight}</Text>
                                <Text style={styles.streakUnit}>Kg</Text>
                            </View>
                        </View>

                        <View style={styles.section}>
                            <Text style={styles.quickToolsText}>Top wheight lifted:</Text>
                            <View style={styles.streak}>
                                <Text style={styles.streakCount}>{maxWeight}</Text>
                                <Text style={styles.streakUnit}>Kg</Text>
                            </View>
                        </View>
                    </ScrollView>
                    <Text style={styles.secondaryTitle}>Ai help</Text>
                    <View style={styles.AiSection}>
                        <ScrollView style={styles.chat}>
                            <Text style={styles.aiText}>{displayedText}</Text>
                        </ScrollView>
                        <View style={styles.chatTools}>
                            <TextInput style={styles.input}
                                placeholder="Type your message here"
                                onChangeText={(text) => setPrompt(text)}
                                value={prompt}
                            />
                            <TouchableOpacity style={styles.button} onPress={handleRequest}><Text style={styles.buttonText}>ask</Text></TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>

        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
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
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 16,
    },

    subtitle: {
        fontSize: 18,
        color: '#888',
    },
    quickTools: {
        width: '100%',
        display: 'flex',
        height: 150,
        flexDirection: 'row',
        gap: 4,
        marginBottom: 16,
    },
    section: {
        display: 'flex',
        flexDirection: 'column',
        padding: 16,
        backgroundColor: '#1B1B1B',
        height: '100%',
        width: 140,
        borderRadius: 5,
        marginLeft: 5,
    },

    quickToolsText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },

    streak: {
        marginTop: 8,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'baseline',

    },

    streakCount: {
        color: '#FF2E2E',
        fontSize: 55,
        fontWeight: 'bold',
    },

    streakUnit: {
        color: '#FF2E2E',
        fontSize: 17,
        fontWeight: 'bold',
    },

    AiSection: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        width: '100%',
        height: 350,
        backgroundColor: '#1B1B1B',
        borderRadius: 5,
        padding: 15,
    },
    chat: {
        backgroundColor: '#000',
        height: '80%',
        borderRadius: 5,
        padding: 10,
    },
    chatTools: {
        display: 'flex',
        flexDirection: 'row',
        gap: 14,
        alignItems: 'center',
    },
    input: {
        height: 50,
        backgroundColor: '#000',
        color: '#fff',
        paddingHorizontal: 10,
        borderRadius: 5,
        width: '75%',
        placeholderTextColor: '#888'
    },

    button: {
        flexGrow: 1,
        height: 50,
        backgroundColor: '#FF2E2E',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },

    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

    aiText: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 20,
    },

    scroll: {
        marginHorizontal: 20,
        height: 600,
    }
});

export default Home;