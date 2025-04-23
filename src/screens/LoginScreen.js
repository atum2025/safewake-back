// src/screens/LoginScreen.js
import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Colors } from '../theme/colors'; // Defina como sugerido acima
import { AuthContext } from '../context/AuthContext';

export default function LoginScreen({ navigation }) {
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{ flex:1, backgroundColor: '#fff', justifyContent: 'center', padding: 24 }}>
      {/* Logotipo */}
      <Image source={require('../assets/logo_web.png')} style={{ alignSelf:'center', height:90, width:90, marginBottom:24 }} />
      <Text style={{textAlign:'center', fontSize:24, fontWeight:'bold', color:Colors.primary, marginBottom:8}}>SafeWake</Text>
      <Text style={{textAlign:'center', fontSize:14, color:'#888', marginBottom:24}}>Alarme de Segurança Pessoal</Text>
      
      <TextInput placeholder="E-mail" value={email} onChangeText={setEmail}
        style={{borderWidth:1, borderColor:'#EEE', padding:14, borderRadius:8, marginBottom:12}} />
      <TextInput placeholder="Senha" value={password} secureTextEntry onChangeText={setPassword}
        style={{borderWidth:1, borderColor:'#EEE', padding:14, borderRadius:8, marginBottom:12}} />
      
      <TouchableOpacity onPress={() => signIn(email, password)}
          style={{backgroundColor: Colors.primary, padding:14, borderRadius:8, marginBottom:16}}>
        <Text style={{color:'#FFF', textAlign:'center', fontWeight:'bold'}}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={{textAlign:'center', color:Colors.primary}}>Não tem conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}
