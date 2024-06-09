// App.js

import * as React from 'react';
import { Button, View, Text , TouchableOpacity , Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Product from './products/Product';
import DrawerContent from './drawer/DrawerHome'
import { useNavigation } from '@react-navigation/native';

export function HomeScreen({ navigation }) {
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



const Drawer = createDrawerNavigator();

export function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={() => <DrawerContent />} screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="Home" component={HomeScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
