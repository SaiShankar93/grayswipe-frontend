import { View, Text , TouchableOpacity, Image } from 'react-native'
import React from 'react'

function app({ navigation }) {
  return (
    <View style={{ height: 100, backgroundColor: '#eaf0ff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingLeft: 35, paddingRight: 35 }}>
    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Image source={require('../assets/settings.png')} style={{ width: 30, height: 30 }} />

    </TouchableOpacity>
    <Text style={{ fontSize: 20, fontWeight: '500' }}>Grayswipe</Text>
    <Image source={require('../assets/notification.png')} style={{ width: 30, height: 30 }} />
  </View>
  );
}
