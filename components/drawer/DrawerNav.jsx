import { View, Text , TouchableOpacity , Image } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import DrawerHome from './DrawerHome';
import Payment from './Payment';
import Verification from './Verification';
import Icon4 from '@expo/vector-icons/Ionicons'
import Navigation from '../Navigation'
import OpenScreen from '../login Scrrens/OpenScreen';
const Stack = createStackNavigator();

const App = ({closeDrawer}) => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="DrawerHome"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#eaf0ff',

        },
        headerTitleAlign:'center',

      }}>
      <Stack.Screen name="DrawerHome" component={DrawerHome}
      options={{
        title: 'Grayswipe',
        headerLeft: () => (
          <TouchableOpacity onPress={closeDrawer} style={{ paddingHorizontal:35 ,}}>
          <Icon4 name="arrow-back" size={24}/>
        </TouchableOpacity>
        ),
        headerRight: () => (
            <TouchableOpacity
            style={{ paddingHorizontal:35 ,}}
          >
            <Image
              source={require('../../assets/notification.png')} 
              style={{ width: 35, height: 35 }}
            />
          </TouchableOpacity>
          
        ),
      }}   />
        <Stack.Screen name="Payment" component={Payment} 
        options={{ tabBarVisible: false ,headerShown: false, }}/>
        <Stack.Screen name="Verification" component={Verification} options={{ headerShown: false }} />
        <Stack.Screen name="Navigation" component={Navigation} options={{ headerShown: false }} />
        <Stack.Screen name="OpenScreen" component={OpenScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;