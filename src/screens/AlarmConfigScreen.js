import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch } from 'react-native';
import { Colors } from '../theme/colors';

export default function AlarmConfigScreen({ navigation }) {
  const [time, setTime] = useState('08:00');
  const [interval, setInterval] = useState('12');
  const [ringtone, setRingtone] = useState('Padrão');
  const [vibration, setVibration] = useState(false);

  return (
    <View style={{flex:1, backgroundColor:'#fff', padding:24}}>
      <TouchableOpacity onPress={()=>navigation.goBack()} style={{marginBottom:20}}>
        <Text style={{color:Colors.primary}}>{'< Voltar'}</Text>
      </TouchableOpacity>
      <Text style={{fontSize:24, fontWeight:'bold', color:Colors.primary, marginBottom:24}}>Configurações de Alarme</Text>
      
      <Text>Horário (formato 24h)</Text>
      <TextInput style={style.input} value={time} onChangeText={setTime} placeholder="HH:MM" keyboardType="numeric" />
      <Text>Intervalo de repetição (1 a 24h)</Text>
      <TextInput style={style.input} value={String(interval)} onChangeText={setInterval} placeholder="12" keyboardType="numeric" />

      <Text style={{marginTop:16}}>Ringtone</Text>
      {['Padrão', 'Urgente', 'Suave', 'Digital'].map(opc => (
        <TouchableOpacity key={opc} onPress={()=>setRingtone(opc)}>
          <Text style={{
            padding:8, borderRadius:6, backgroundColor:ringtone===opc?Colors.primary:'#EEE',
            color:ringtone===opc?'#FFF':'#333', marginBottom:6,
          }}>{opc}</Text>
        </TouchableOpacity>
      ))}

      <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:16}}>
        <Text>Vibração:</Text>
        <Switch value={vibration} onValueChange={setVibration} trackColor={{false:'#EEE', true:Colors.primary}} />
      </View>

      <TouchableOpacity style={{backgroundColor:Colors.primary, padding:16, borderRadius:8, marginTop:32}}
        onPress={()=>navigation.goBack()}>
        <Text style={{color:'#fff', textAlign:'center', fontWeight:'bold'}}>Salvar Configurações</Text>
      </TouchableOpacity>
    </View>
  );
}
const style = {
  input: { borderWidth:1, borderColor:'#EEE', padding:12, borderRadius:8, marginTop:8, marginBottom:18 }
};
