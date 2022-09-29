import { StatusBar } from 'expo-status-bar';
import Logo from './assets/logo.png';

import { StyleSheet, Text, TextInput, TouchableOpacity, Image, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>

      <Image source={Logo} style={styles.logo} />

      <TextInput
          style={styles.input}  
          placeholder="Digite seu e-mail"
          placeholderTextColor="#3C3C3D"/>
      

      <TextInput
        style={styles.input}  
        placeholder="Digite sua senha"
        placeholderTextColor="#3C3C3D"
        secureTextEntry />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.entry}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
  input: {
    borderWidth: 1,
    borderColor: '#646464',
    padding: 10,
    height: 50,
    width: '90%',
    marginTop: 20,
    borderRadius: 10,

  },
  button: {
    backgroundColor: '#EA4335',
    width: '40%',
    marginTop: 50,
    padding: 12,
    borderRadius: 10,
  },
  entry:{
    color: '#FFF',
    textAlign: 'center',
  }
});
