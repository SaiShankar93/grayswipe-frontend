import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Payment from './drawer/Payment';
import { Button, View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { Header } from '@react-navigation/stack';

// Import your screens here
import Screen1 from './products/HomePage';
import Screen2 from './orders/AddOrders';
import DrawerContent from './drawer/DrawerHome';


const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

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

function TabScreens() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Screen1" component={Screen1} />
      <Tab.Screen name="Screen2" component={Screen2} />
    </Tab.Navigator>
  );
}

// App drawer
function AppDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="TabScreen" component={TabScreens} options={{ title: 'Grayswipe', headerLeft:null }} />
      <Drawer.Screen name="Payment" component={Payment} />
    </Drawer.Navigator>
  );
}

// Main App component
export default function App() {
  return (
    <NavigationContainer>
      <AppDrawer />
    </NavigationContainer>
  );
}
