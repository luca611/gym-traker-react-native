import React, { useState } from 'react';
import { StatusBar, ScrollView, View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { NAVBAR } from '../../assets/icons/icons';

const ai = () => {
    const apiKey = '';

    async function getGroqChatCompletion(userMessage) {
        if (userMessage === "") return "Somebody is not talking to me, and that's not cool here in the gym";
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                messages: [{ role: 'user', content: "(the question must be gym related, talk like a gymbro but avoid saying bro every two phrases, if not refuse to answser, use also emoji, avoid ** **)" + userMessage }],
                model: 'llama3-70b-8192'
            })
        });
        const data = await response.json();
        return data.choices[0]?.message?.content || "";
    }

    const handleRequest = () => {
        setPrompt('');
        response = getGroqChatCompletion(prompt);
        response.then((data) => {
            setText(data);
        });
    }

    const [prompt, setPrompt] = useState('')
    const [displayedText = "How can i help you today?", setText] = useState('')

    return (
        <LinearGradient style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 0, y: 6 }} colors={['#000', '#FF3A3A']} >
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scroll}>
                    <View>
                        <Text style={styles.Title}>Ai help</Text>
                        <View style={styles.AiSection}>
                            <ScrollView style={styles.chat}>
                                <Text style={styles.aiText}>{displayedText}</Text>
                                <Text style={styles.warning}>The answer is Ai generated so it might include errors, please verify it with a professional trainer.</Text>
                            </ScrollView>
                            <View style={styles.chatTools}>
                                <TextInput style={styles.input}
                                    placeholder="Type your message here"
                                    onChangeText={(text) => setPrompt(text)}
                                    value={prompt}
                                />
                                <TouchableOpacity style={styles.button} onPress={handleRequest}>
                                    <Image source={NAVBAR.send.source} style={styles.sendIcon}></Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 4,
        width: '100%',
        height: '100%',
    },

    scroll: {
        marginHorizontal: 20,
        height: '100%',
        backgroundColor: '',
    },

    AiSection: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        width: '100%',
        height: 600,
        flexGrow: 1,
        backgroundColor: '#1B1B1B',
        borderRadius: 3,
        padding: 15,
    },
    chat: {
        backgroundColor: '#000',
        height: '80%',
        borderRadius: 2,
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
        borderRadius: 2,
        width: '75%',
        placeholderTextColor: '#888',
    },

    button: {
        flexGrow: 1,
        height: 50,
        backgroundColor: '#FF2E2E',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
    },

    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

    aiText: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 5,
    },

    warning: {
        color: '#FF2E2E',
        fontSize: 12,
        textAlign: 'left',
        marginBottom: 30,
    },

    sendIcon: {
        width: 20,
        height: 20,
        tintColor: '#fff',
    },
    
    Title: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 20,
    }
})

export default ai