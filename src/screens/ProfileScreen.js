import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Colors } from '../theme/colors';

export default function ProfileScreen({ navigation }) {
  // Simulado, normalmente receberia do contexto/autenticação
  const [user, setUser] = useState({
    name: 'João da Silva',
    email: 'joao@email.com',
    whatsapp: '+55 (11) 98765-4321',
    birthDate: '15/05/1990',
    country: 'Brasil',
    emergencyContact: { name: 'Maria Silva', whatsapp: '+55 (11) 97654-3210' },
    defaultMessage: 'Olá, não consegui desativar meu alarme SafeWake. Por favor, entre em contato comigo assim que possível.'
  });

  return (
    <View style={{flex:1, backgroundColor:'#fff', padding:22}}>
      <TouchableOpacity onPress={()=>navigation.goBack()} style={{marginBottom:18}}>
        <Text style={{color:Colors.primary}}>{'< Voltar'}</Text>
      </TouchableOpacity>
      <Text style={{fontWeight:'bold', fontSize:24, color:Colors.primary, marginBottom:18}}>Meu Perfil</Text>

      <View style={{marginBottom:20}}>
        <Text style={{fontWeight:'bold'}}>Nome:</Text>
        <Text>{user.name}</Text>
        <Text style={{fontWeight:'bold', marginTop:6}}>E-mail:</Text>
        <Text>{user.email}</Text>
        <Text style={{fontWeight:'bold', marginTop:6}}>WhatsApp:</Text>
        <Text>{user.whatsapp}</Text>
        <Text style={{fontWeight:'bold', marginTop:6}}>Nascimento:</Text>
        <Text>{user.birthDate}</Text>
        <Text style={{fontWeight:'bold', marginTop:6}}>País:</Text>
        <Text>{user.country}</Text>
      </View>

      <View style={{marginBottom:24}}>
        <Text style={{ fontWeight:'bold', color:Colors.secondary }}>Contato de Emergência</Text>
        <Text>Nome: {user.emergencyContact.name}</Text>
        <Text>WhatsApp: {user.emergencyContact.whatsapp}</Text>
      </View>

      <View style={{marginBottom:24}}>
        <Text style={{fontWeight:'bold', color:Colors.secondary}}>Mensagem padrão</Text>
        <Text>{user.defaultMessage}</Text>
      </View>

      <TouchableOpacity style={{borderWidth:1,borderColor:'#EEE', padding:12, borderRadius:8, marginBottom:12}}>
        <Text style={{color:Colors.primary, textAlign:'center'}}>Alterar senha</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:Colors.secondary, borderRadius:8, padding:12}} onPress={()=>navigation.replace('Login')}>
        <Text style={{color:'#fff', textAlign:'center', fontWeight:'bold'}}>Sair da conta</Text>
      </TouchableOpacity>
    </View>
  );
}
