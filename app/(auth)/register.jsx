import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if(areValidCredential()) router.replace('/home');
  };

  const areValidCredential = () => {
    //Has to be implemented with a real backend
    return true;
  }
  
  return (
    <View style={styles.container}>
      <LinearGradient style={styles.container} start={{x:0,y:0}} end={{x:0,y:6}} colors={['#000','#FF3A3A']} >
      <Text style={styles.H1}>
        Register
      </Text>
      <View style={styles.line}></View>
      <Text style={styles.desc}>
        Email
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <Text style={styles.desc}>
        Password
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Text style={styles.desc}>
        Confirm password
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Repeat password"
        placeholderTextColor="#999"
        secureTextEntry
        onChangeText={(text) => setConfirmPassword(text)}
        value={ConfirmPassword}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <Text style={styles.or}> or </Text>
        <TouchableOpacity style={styles.button} onPress={() => router.replace('/login')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    height: 50,
    backgroundColor: '#333',
    color: '#fff',
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5,
    width: '80%',
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#FF3A3A',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  H1: {
    fontSize: 50,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
  },

  desc: {
    width: '80%',
    textAlign: 'left',
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },

  line: {
    height: 1,
    backgroundColor: '#fff',
    marginBottom: 20,
    marginTop: -20,
    width: '55%',
  },

  or: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  buttonContainer: {
      marginTop: '15%',
      width: '100%',
      alignItems: 'center',
  }

});

export default LoginScreen;