import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Colors } from '../theme/colors';
import { registerUser } from '../services/auth';

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [country, setCountry] = useState('Brasil');
  const [password, setPassword] = useState('');
  const [emergencyName, setEmergencyName] = useState('');
  const [emergencyWhatsapp, setEmergencyWhatsapp] = useState('');
  const [message, setMessage] = useState(
    'Olá, aqui é // USUÁRIO // , e por algum motivo não desativei o alarme SafeWake. Você pode entrar em contato comigo o quanto antes?'
  );
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const createAccount = async () => {
    setLoading(true);
    setError('');
    const userData = { name, email, whatsapp, birthDate, country, password, emergencyName, emergencyWhatsapp, message };
    try {
      const result = await registerUser(userData);
      if (result.token || result.success) {
        alert('Cadastro realizado com sucesso! Faça login.');
        navigation.replace('Login');
      } else {
        setError(result.message || 'Erro ao cadastrar usuário.');
      }
    } catch (err) {
      setError('Erro ao conectar ao servidor.');
    }
    setLoading(false);
  };

  return (
    <ScrollView contentContainerStyle={{padding:18, backgroundColor:'#fff', flexGrow:1}}>
      <TouchableOpacity onPress={()=>navigation.goBack()} style={{marginBottom:20}}>
        <Text style={{color:Colors.primary}}>{'< Voltar'}</Text>
      </TouchableOpacity>
      <Text style={{ fontWeight:'bold', fontSize:24, color:Colors.primary, marginBottom:16 }}>Cadastro</Text>
      <Text style={{fontWeight:'bold', color:'#555'}}>Dados Pessoais</Text>
      <TextInput style={style.input} placeholder="Nome completo*" value={name} onChangeText={setName} />
      <TextInput style={style.input} placeholder="E-mail*" value={email} keyboardType="email-address" onChangeText={setEmail} />
      <TextInput style={style.input} placeholder="WhatsApp*" keyboardType="phone-pad" value={whatsapp} onChangeText={setWhatsapp} />
      <TextInput style={style.input} placeholder="Data de nascimento*" value={birthDate} onChangeText={setBirthDate} />
      <Text style={{fontWeight:'bold', color:'#555', marginTop:12}}>Conta</Text>
      <TextInput style={style.input} placeholder="Senha*" value={password} onChangeText={setPassword} secureTextEntry />
      <Text style={{ fontWeight:'bold', color:Colors.secondary, marginTop:24 }}>Contato de emergência</Text>
      <TextInput style={style.input} placeholder="Nome*" value={emergencyName} onChangeText={setEmergencyName} />
      <TextInput style={style.input} placeholder="WhatsApp*" keyboardType="phone-pad" value={emergencyWhatsapp} onChangeText={setEmergencyWhatsapp} />
      <Text style={{ fontWeight:'bold', color:Colors.secondary, marginTop:24 }}>Mensagem padrão</Text>
      <TextInput style={[style.input, { height:80 }]} multiline value={message} onChangeText={setMessage} />
      {error ? <Text style={{color:'red', marginTop:8}}>{error}</Text> : null}
      <TouchableOpacity style={{backgroundColor:Colors.primary, marginTop:24, borderRadius:8, padding:16}}
        onPress={createAccount}>
        <Text style={{color:'#fff', textAlign:'center', fontWeight:'bold'}}>{loading ? 'Cadastrando...' : 'Criar conta'}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
const style = {
  input: { borderWidth:1, borderColor:'#EEE', padding:12, borderRadius:8, marginTop:8, marginBottom:4 }
};
