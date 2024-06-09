import React, { useRef } from 'react';
import { View, TouchableOpacity, Text, StyleSheet , Image } from 'react-native';
import Drawer from 'react-native-drawer';
import Icons from '@expo/vector-icons/AntDesign'
import DrawerHome from './drawer/DrawerHome';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DrawerNav from '../components/drawer/DrawerNav'

const DrawerExample = ({navigation}) => {
  const drawerRef = useRef(null);

  const openDrawer = () => {
    drawerRef.current.open();
  };

  const closeDrawer = () => {
    drawerRef.current.close();
  };

  return (
    <GestureHandlerRootView style={{flex:1}}>
    <Drawer
      ref={drawerRef}
      content={<DrawerNav closeDrawer={closeDrawer} />}
      tapToClose={true}
      onClose={() => console.log('Drawer closed!')}
      side="left"
    >
      <View style={{ height: 100, backgroundColor: '#eaf0ff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingLeft: 35, paddingRight: 35 }}>
      <TouchableOpacity onPress={openDrawer}>
        <Image source={require('../assets/settings.png')} style={{ width: 30, height: 30 }} />
      </TouchableOpacity>
      <Text style={{ fontSize: 20, fontWeight: '500' }}>Grayswipe</Text>
      <Image source={require('../assets/notification.png')} style={{ width: 30, height: 30 }} />
    </View>
      <View style={[{backgroundColor:'#eaf0ff' , height:'100%', }]}>
            <Text style={[{fontSize:20 , fontWeight:500 , padding: 35}]}> 
                Store Name
            </Text>
            <View style={[{display:'flex', alignItems:'center', justifyContent:'center', height:'60%' , gap:30}]}>
                <Text style={[{fontSize:20 , fontWeight:500}]}>You have no Products yet.</Text>
                <View style={[{padding:20}]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Product')}  style={[{padding:50, backgroundColor: '#e7e7e7' , zIndex:-1 , borderRadius:11}]}>
                         <Icons style={[{}]} name='plus' size={32} color='#777777'></Icons>
                    </TouchableOpacity>
                </View>
                <View style={[{gap:40 }]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Product')}  style={[{ backgroundColor: "#ff8e00" , height: 43 , width: 301 , borderRadius: 50, alignItems: 'center', justifyContent:'center', display:'flex' }]}>
                        <Text style={[{ color: "white" , fontSize: 15 , fontFamily: 'poppins' }]}>Add Product</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Drawer>
    </GestureHandlerRootView>
  );
};



export default DrawerExample;
