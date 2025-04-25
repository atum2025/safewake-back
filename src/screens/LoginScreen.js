import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Colors } from '../theme/colors';
import { AuthContext } from '../context/AuthContext';

export default function LoginScreen({ navigation }) {
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    setLoading(true);
    setError('');
    try {
      await signIn(email, password);
      // Navegação é automática pelo contexto!
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  }

  return (
    <View style={{ flex:1, backgroundColor: '#fff', justifyContent: 'center', padding: 24 }}>
      <Image source={require('../assets/logo_web.png')} style={{ alignSelf:'center', height:90, width:90, marginBottom:24 }} />
      <Text style={{textAlign:'center', fontSize:24, fontWeight:'bold', color:Colors.primary, marginBottom:8}}>SafeWake</Text>
      <Text style={{textAlign:'center', fontSize:14, color:'#888', marginBottom:24}}>Alarme de Segurança Pessoal</Text>
      <TextInput placeholder="E-mail" value={email} onChangeText={setEmail}
        style={{borderWidth:1, borderColor:'#EEE', padding:14, borderRadius:8, marginBottom:12}} />
      <TextInput placeholder="Senha" value={password} secureTextEntry onChangeText={setPassword}
        style={{borderWidth:1, borderColor:'#EEE', padding:14, borderRadius:8, marginBottom:12}} />
      {error ? <Text style={{color:'red', marginBottom:8, textAlign:'center'}}>{error}</Text> : null}
      <TouchableOpacity onPress={handleLogin}
          style={{backgroundColor: Colors.primary, padding:14, borderRadius:8, marginBottom:16}}>
        <Text style={{color:'#FFF', textAlign:'center', fontWeight:'bold'}}>{loading ? "Entrando..." : "Entrar"}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={{textAlign:'center', color:Colors.primary}}>Não tem conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}
