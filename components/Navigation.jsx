import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import OpenScreen from './login Scrrens/OpenScreen';
import Login from './login Scrrens/Login';
import Loginsuss from './login Scrrens/Loginsuss';
import ForgotPassword from './login Scrrens/ForgotPassword';
import OTP from './login Scrrens/OTP';
import NewPassword from './login Scrrens/NewPassword';
import ChangePassuss from './login Scrrens/ChangePassuss';
import Register from './login Scrrens/Register';
import Registersuss from './login Scrrens/Registersuss';
import Navtag from './products/Navtag'
import EditStore from './store/EditStore';
import Stores from './tabs/Stores';
import StoreSuss from './store/StoreSuss'
import DrawerHome from './drawer/DrawerHome';
import Payment from './drawer/Payment';
import Verification from './drawer/Verification';


const Stack = createStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="OpenScreen" component={OpenScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
      <Stack.Screen name="Loginsuss" component={Loginsuss} options={{ headerShown: false }}/>
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
      <Stack.Screen name="Navtag" component={Navtag} options={{ headerShown: false }}/>
         
    </Stack.Navigator>
  );
};
const RegisterStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
      <Stack.Screen name="Registersuss" component={Registersuss} options={{ headerShown: false }}/>
         
    </Stack.Navigator>
  );
};
const ForgotPasswordStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }}/>
      <Stack.Screen name="OTP" component={OTP} options={{ headerShown: false }}/>
      <Stack.Screen name="NewPassword" component={NewPassword} options={{ headerShown: false }}/>
      <Stack.Screen name="ChangePassuss" component={ChangePassuss} options={{ headerShown: false }}/>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};
const StoreStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Store" component={Stores} options={{ headerShown: false }}/>
      <Stack.Screen name="StoreSuss" component={StoreSuss} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};
const SettingStack = () => {
  return (
    <NavigationContainer independent={true}>
    <Stack.Navigator>
      <Stack.Screen name="DrawerHome" component={DrawerHome} options={{ headerShown: true }}/>
      <Stack.Screen name="Payment" component={Payment} options={{ headerShown: false }}/>
      <Stack.Screen name="Verification" component={Verification} options={{ headerShown: false }}/>
         
    </Stack.Navigator>
    </NavigationContainer>
  );
};
const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="OpenScreen">
        <Stack.Screen name="OpenScreen" component={LoginStack} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPasswordStack" component={ForgotPasswordStack} options={{ headerShown: false }} />
        <Stack.Screen name="RegisterStack" component={RegisterStack} options={{ headerShown: false }} />
        <Stack.Screen name="Registersuss" component={Registersuss} options={{ headerShown: false }}/>
        <Stack.Screen name="StoreStack" component={StoreStack} options={{ headerShown: false }}/>
        <Stack.Screen name="SettingStack" component={SettingStack} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;