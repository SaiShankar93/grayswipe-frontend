import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Stores from './tabs/Stores';

// Custom Header Component
const CustomHeader = ({ navigation, toggleDrawer }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10 }}>
      <TouchableOpacity onPress={toggleDrawer}>
        <Image source={require('../assets/settings.png')} style={{ width: 30, height: 30 }} />
      </TouchableOpacity>
      <Image source={require('../assets/notification.png')} style={{ width: 120, height: 30 }} />
      <View style={{ width: 30, height: 30 }} />
    </View>
  );
};

// Stack Navigator
const Stack = createStackNavigator();

const StackNavigator = ({ navigation }) => {
  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };

  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <CustomHeader navigation={navigation} toggleDrawer={toggleDrawer} />
      }}
    >
        <Stack.Screen
         name="Store"
          component={Stores}/>
      
    </Stack.Navigator>
  );
};

// Drawer Navigator
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      {/* Your drawer screens here */}
    </Drawer.Navigator>
  );
};

// Main App Container
const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
