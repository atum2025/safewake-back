import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../theme/colors';

export default function DashboardScreen({ navigation }) {
  // Aqui você normalmente receberia dados do Alarm/usuário via contexto ou props
  const alarm = { time: '08:00', interval: 12 };

  return (
    <View style={{flex:1, backgroundColor:'#fff'}}>
      {/* Header */}
      <View style={{padding:18, borderBottomWidth:1, borderColor:'#EFEFEF', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
        <Text style={{fontSize:22, color:Colors.primary, fontWeight:'bold'}}>SafeWake</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
          <Text style={{color:Colors.secondary}}>Perfil</Text>
        </TouchableOpacity>
      </View>

      {/* Próximo alarme */}
      <View style={{marginTop:24, alignItems:'center'}}>
        <Text style={{color:'#666', fontSize:16}}>Próximo alarme</Text>
        <Text style={{fontWeight:'bold', fontSize:44, color:Colors.primary}}>{alarm.time}</Text>
        <Text style={{color:'#666'}}>Repete a cada {alarm.interval}h</Text>
      </View>

      {/* Testar alarme */}
      <TouchableOpacity style={{
        backgroundColor: Colors.primary, padding:20, borderRadius:12, alignItems:'center', justifyContent:'center',
        margin: 32
      }} onPress={()=>navigation.navigate('AlarmDeactivation')}>
        <Text style={{ color:'#fff', fontWeight:'bold', fontSize:18}}>Testar Alarme</Text>
      </TouchableOpacity>

      {/* Configuração do alarme */}
      <TouchableOpacity style={{borderWidth:1, borderColor:Colors.highlight, padding:16, borderRadius:8, margin:24, marginTop:0}}
        onPress={()=>navigation.navigate('AlarmConfig')}>
        <Text style={{color: Colors.primary, textAlign:'center', fontWeight:'bold'}}>Configurar Alarme</Text>
      </TouchableOpacity>
    </View>
  );
}
