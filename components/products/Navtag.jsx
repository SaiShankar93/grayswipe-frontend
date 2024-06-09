import { NavigationContainer } from '@react-navigation/native';
import { View , Text , SafeAreaView , TouchableOpacity , Image } from 'react-native';
 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons1 from '@expo/vector-icons/Feather'
import Ionicons from '@expo/vector-icons/Ionicons'
import Icons2 from '@expo/vector-icons/MaterialCommunityIcons'
import Cart from '../tabs/Cart';
import Client from '../tabs/Client';
import SeeDetails from '../tabs/SeeDetails';
import Orders from '../tabs/Orders';
import Store from '../tabs/Stores';
import HomePage from './HomePage';
import { createStackNavigator } from '@react-navigation/stack';
import EditStore from '../store/EditStore';
import { Header } from '@react-navigation/stack';
import Header1 from '../Header1';
import Icon from '@expo/vector-icons/Ionicons'
import Product from './Product';
import AddOrders from '../orders/AddOrders';
import ClientDetails from '../client/ClientDetails';
import Stores from '../tabs/Stores';
import StoreSuss from '../store/StoreSuss'
import ListedProducts from './ListedProducts';
import ProductDetails from './ProductDetails'
import Icons3 from '@expo/vector-icons/Octicons'
import HomepageOrders from '../orders/HomepageOrders';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler'
import Payment from '../drawer/Payment'
import Verification from '../drawer/Verification';
import DrawerContent from '../drawer/DrawerHome';
import React, { useState } from 'react';
import DrawerHome from '../drawer/DrawerHome';
import { HomeScreen } from '../Sample';
import CreateStore from '../store/CreateStore';
import OrderDetails from '../orders/OrderDetails'
import OpenScreen from '../login Scrrens/OpenScreen';

 
 
 
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();




const ProductStack = ({ navigation  }) => {
  const handleButton1Press = () => {
    navigation.navigate('DrawerContent');
};
    return (
      <NavigationContainer independent={true}>
      <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#eaf0ff',

        },
        headerTitleAlign:'center'

      }}>
        <Stack.Screen
         name="HomePage"
          component={HomePage} options={{ headerShown: false  }}
          />
        <Stack.Screen 
           name="Product" 
           component={Product}
           options={({ navigation }) => ({
            title: 'Grayswipe',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ paddingHorizontal:35}}

              >
                <Icon size={30} name='arrow-back'/>
              </TouchableOpacity>
            ),
            headerRight: () => (
                <TouchableOpacity
                onPress={() => navigation.openDrawer()}
                style={{ paddingHorizontal:35}}
              >
                <Image
                  source={require('../../assets/notification.png')} 
                  style={{ width: 35, height: 35 }}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen 
           name="ListedProducts" 
           component={ListedProducts}
           options={{ headerShown: false }}
        /> 
        <Stack.Screen 
           name="ProductDetails" 
           component={ProductDetails}
           options={{ headerShown: false }}
        />
        <Stack.Screen 
           name="SeeDetails" 
           component={SeeDetails}
           options={{ headerShown: false }}
        /> 
      </Stack.Navigator>
      </NavigationContainer>
    );
  };


  const OrderStack = () => {
    return (
      <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#eaf0ff', 

        },
        headerTitleAlign:'center'

      }}>
        
        <Stack.Screen
         name="HomepageOrders"
          component={HomepageOrders}
          options={{ headerShown: false }}
          />
          <Stack.Screen
         name="OrderDetails"
          component={OrderDetails}
          options={{ headerShown: false }}
          />
        <Stack.Screen 
           name="AddOrders" 
           component={AddOrders}
           options={({ navigation }) => ({
            title: 'Grayswipe',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ paddingHorizontal:35}}

              >
                <Icon size={30} name='arrow-back'/>
              </TouchableOpacity>
            ),
            headerRight: () => (
                <TouchableOpacity
                style={{ paddingHorizontal:35}}
              >
                <Image
                  source={require('../../assets/notification.png')} 
                  style={{ width: 35, height: 35 }}
                />
              </TouchableOpacity>
            ),
          })}
        />    
      </Stack.Navigator>
    );
  };


  const ClientStack = () => {
    return (
      <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#eaf0ff',

        },
        headerTitleAlign:'center'

      }}>
        
        <Stack.Screen
         name="Client"
          component={ClientDetails}
          options={{ headerShown: false }}
          />  
      </Stack.Navigator>
    );
  };


const StoreStack = () => {
    return (
      <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#eaf0ff',

        },
        headerTitleAlign:'center'

      }}>
        <Stack.Screen
         name="Store"
          component={Store}
          options={{ headerShown: false }}
          /> 

        <Stack.Screen
         name="CreateStore"
          component={CreateStore}
          options={{ headerShown: false }}
          />
        <Stack.Screen
         name="EditStore"
          component={EditStore}
          options={{ headerShown: false }}
          />
      </Stack.Navigator>
      
    );
  };
 
 
function TabScreens() {
  return (
    <Tab.Navigator
    screenOptions={{
        tabBarActiveTintColor:'#ff8e00',
        tabBarInactiveTintColor:"white",
        headerShown:false,
        tabBarShowLabel: false,
        tabBarStyle:{backgroundColor: '#0b233c' , borderTopLeftRadius:25, borderTopRightRadius: 25, paddingHorizontal: 20 , height:80,},
    }}
    >
 
        <Tab.Screen name="Product" component={ProductStack}
        options={{
            tabBarIcon:({focused})=>{
                return (
                    <View style={[{alignItems:'center' , justifyContent:'center' , gap:10 ,}]}>
                        <Icons1 name='package' size={24} color={focused ? "#ff8e00": 'white'}/>
                        <Text style={[{color: focused ? '#ff8e00' : 'white', fontSize:10}]}>Product</Text>
                    </View>
                )
            }
        }}/>
 
        <Tab.Screen name="Orders" component={OrderStack}
        options={{
            tabBarIcon:({focused})=>{
                return (
                    <View style={[{alignItems:'center' , justifyContent:'center' , gap:10}]}>
                        <Icons3 name='checklist' size={24} color={focused ? "#ff8e00": 'white'}/>
                        <Text  style={[{ color: focused ? '#ff8e00' : 'white' , fontSize:10}]}>Orders</Text>
                    </View>
                )
            }
        }} />
        <Tab.Screen name="Clients" component={ClientStack}
        options={{
            tabBarIcon:({focused})=>{
                return (
                    <View style={[{alignItems:'center' , justifyContent:'center' , gap:10}]}>
                        <Ionicons name='people' size={24} color={focused ? "#ff8e00": 'white'}/>
                        <Text  style={[{ color: focused ? '#ff8e00' : 'white', fontSize:10}]}>Clients</Text>
                    </View>
                )
            }
        }} />
        <Tab.Screen name="Store" component={StoreStack}
        options={{
            tabBarIcon:({focused})=>{
                return (
                    <View style={[{alignItems:'center' , justifyContent:'center' , gap:10}]}>
                        <Icons2 name='store' size={24} color={focused ? "#ff8e00": 'white'}/>
                        <Text  style={[{ color: focused ? '#ff8e00' : 'white', fontSize:10}]}>Store</Text>
                    </View>
                )
            }
            
        }} />
 
      </Tab.Navigator>
  );
 
}

function AppDrawer({navigation}) {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => {
    setDrawerOpen(true);
  };
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>} screenOptions={{ headerShown: false }} independent={true}>
      <Drawer.Screen name="Main" component={TabScreens}/>
      <Drawer.Screen name="Payment" component={Payment} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <AppDrawer />
    </NavigationContainer>
  );
}