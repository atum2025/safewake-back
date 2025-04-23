import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../theme/colors';

function formatTime(s) {
  const min = Math.floor(s/60).toString().padStart(2,'0');
  const sec = (s%60).toString().padStart(2,'0');
  return `${min}:${sec}`;
}

export default function AlarmDeactivationScreen({ navigation }) {
  const [timer, setTimer] = useState(180);

  useEffect(()=>{
    if(timer <= 0) {
      // Aqui você pode chamar a função que dispara o envio do WhatsApp ao contato de emergência.
      navigation.replace('Dashboard');
      return;
    }
    const interval = setInterval(()=>setTimer(t=>t-1), 1000);
    return ()=>clearInterval(interval);
  },[timer]);

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#FFF', padding:32}}>
      <Text style={{fontSize:18, color:'#888'}}>Tempo restante</Text>
      <Text style={{fontWeight:'bold', fontSize:50, color:Colors.secondary, marginBottom:24}}>{formatTime(timer)}</Text>
      <Text style={{textAlign:'center', color:Colors.secondary, marginBottom:28}}>
        Se não desativar esse alarme em 3 minutos, uma mensagem de WhatsApp será enviada para o contato de emergência.
      </Text>
      <TouchableOpacity style={{backgroundColor:Colors.primary, padding:18, borderRadius:12, minWidth:200}}
         onPress={()=>navigation.replace('Dashboard')}>
        <Text style={{color:'#fff', textAlign:'center', fontWeight:'bold'}}>Desativar alarme</Text>
      </TouchableOpacity>
    </View>
  );
}
