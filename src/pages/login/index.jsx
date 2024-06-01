import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/authContext';
import { UserContext } from '../../context/userContext';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Login() {
  const {setIsAuthenticated} = useContext(AuthContext);
  const {setUser} = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

async function handleLogin() {
  const body = {
    email: email,
    password: password
  }
  const response = await fetch('http://0.0.0.0:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  if (data.message === 'User logged successfully') {
    setUser(data.user)
    const jsonValue = JSON.stringify(data.user);
    await AsyncStorage.setItem('@user_data', jsonValue);
  } else {
    setError('Credenciais inválidas.')
  }
  setIsAuthenticated(true);
}

  return (
    <View style={styles.container}>
      <View style={{marginBottom: 125}}>
        <Text style={{fontSize: 40, fontWeight: 700,}}>
          Entrar
        </Text>
      </View>

      <View style={{marginBottom: 40}}>
        <View style={{display: 'flex', flexDirection: 'row', gap: 5}}>
          <MaterialIcons name="alternate-email" size={20} color="black" />
          <TextInput
            style={{...styles.input, marginBottom: 50}}
            placeholder='Digite seu e-mail'
            onChangeText={text => setEmail(text)}
            autoCapitalize="none"
          />
        </View>
        <View style={{display: 'flex', flexDirection: 'row', gap: 5}}>
          <Feather name="lock" size={20} color="black" />
          <TextInput
            style={{...styles.input}}
            placeholder='Digite sua senha'
            onChangeText={text => setPassword(text)}
            secureTextEntry
          />
        </View>
        <Text style={{alignSelf: 'flex-end', fontSize:12, fontWeight: '400', color: "#A3A3A3", marginTop: 5}}>Esqueceu a senha?</Text>
        <Text style={{alignSelf: 'center', fontSize:14, fontWeight: '400', color: "#E86D52"}}>{error}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={{backgroundColor: '#4DA7DA', ...styles.button}} onPress={handleLogin}>
          <Text style={{color: 'white'}}>Acessar</Text>
        </TouchableOpacity>
        <Text>OU</Text>
        <TouchableOpacity style={{backgroundColor: '#A3A3A3', ...styles.button}}>
          <Text style={{color: 'white'}}>Acessar com o Google</Text>
        </TouchableOpacity>

        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <Text>
            Ainda não possui conta? 
          </Text>
            <TouchableOpacity style={{marginHorizontal: 4}}>
              <Text style={{fontWeight: '600'}}>Cadastre-se</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbf6f3',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24
  },
  input: {
    fontSize: 14,
    borderBottomWidth: 1,
    borderColor: "#000000", 
    width: 248,
    paddingBottom: 10,
  },
  buttonsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    width: '100%',
  },
  button: {
    padding: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    width: 275
  }
});