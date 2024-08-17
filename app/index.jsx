import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
  };
  return (
    <View style={styles.container}>
      <Text style={styles.H1}>
        Login
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
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.or}> or </Text>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 50,
    backgroundColor: '#333',
    color: '#fff',
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    height: 50,
    backgroundColor: '#545454',
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
    width: '40%',
    marginLeft: '30%',
  },

  or: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },

});

export default LoginScreen;