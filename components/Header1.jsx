// App.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet , Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerHome from './drawer/DrawerHome';
import Payment from './drawer/Payment';
import Verification from './drawer/Verification';

const Stack = createStackNavigator();

const HomeScreenWithCustomHeader = ({ navigation }) => {
  const handleSettingsPress = () => {
    navigation.navigate('DrawerHome');
  };

  return (
    <View>
      <View style={{ height: 100, backgroundColor: '#eaf0ff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingLeft: 35, paddingRight: 35 }}>
      <TouchableOpacity onPress={handleSettingsPress}>
          <Image source={require('../assets/settings.png')} style={{ width: 30, height: 30 }} />

      </TouchableOpacity>
      <Text style={{ fontSize: 20, fontWeight: '500' }}>Grayswipe</Text>
      <Image source={require('../assets/notification.png')} style={{ width: 30, height: 30 }} />
    </View>
    </View>
  );
};

const SettingsScreen = ({ navigation }) => {
  const handleButton1Press = () => {
    navigation.navigate('Screen1');
  };

  const handleButton2Press = () => {
    navigation.navigate('Screen2');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={handleButton1Press} style={styles.button}>
        <Text>Go to Screen 1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleButton2Press} style={styles.button}>
        <Text>Go to Screen 2</Text>
      </TouchableOpacity>
    </View>
  );
};

const Screen1 = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Screen 1</Text>
    </View>
  );
};

const Screen2 = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Screen 2</Text>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#eaf0ff',

        },
        headerTitleAlign:'center'}}>
        <Stack.Screen name="Home" component={HomeScreenWithCustomHeader} options={{ headerShown: false }} />
        <Stack.Screen name="DrawerHome" component={DrawerHome} options={({ navigation }) => ({
            title: 'Grayswipe',
            headerLeft: null,
            headerRight: () => (
                <TouchableOpacity
                style={{ paddingHorizontal:35 ,}}
              >
                <Image
                  source={require('../assets/notification.png')} 
                  style={{ width: 35, height: 35 }}
                />
              </TouchableOpacity>
              
            ),
          })}  />
        <Stack.Screen name="Payment" component={Payment}  options={{ headerShown: false }} />
        <Stack.Screen name="Verification" component={Verification}  options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
