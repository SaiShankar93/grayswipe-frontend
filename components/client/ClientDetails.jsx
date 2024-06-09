import { View, Text , TextInput, TouchableOpacity , Image } from 'react-native'
import React, { useState , useRef } from 'react';
import Icon from '@expo/vector-icons/Fontisto'
import Icon1 from '@expo/vector-icons/Ionicons'
import Icon2 from '@expo/vector-icons/FontAwesome'
import Icon3 from '@expo/vector-icons/MaterialIcons'
import Drawer from 'react-native-drawer';
import DrawerNav from '../drawer/DrawerNav'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const ClientDetails = () => {
    const drawerRef = useRef(null);

    const openDrawer = () => {
      drawerRef.current.open();
    };
  
    const closeDrawer = () => {
      drawerRef.current.close();
    };
    const [activeTab, setActiveTab] = useState('Verified');

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
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
      <View style={{ height: 130, backgroundColor: '#eaf0ff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingLeft: 35, paddingRight: 35 }}>
      <TouchableOpacity onPress={openDrawer}>
        <Image source={require('../../assets/settings.png')} style={{ width: 30, height: 30 }} />
      </TouchableOpacity>
      <Text style={{ fontSize: 20, fontWeight: '500' }}>Grayswipe</Text>
      <Image source={require('../../assets/notification.png')} style={{ width: 30, height: 30 }} />
    </View>
    <View style={[{backgroundColor:'#eaf0ff' , height:'100%', }]}>
        
        <View style={[{ paddingHorizontal:20,paddingVertical:10, gap:20}]}>
            <View style={[{display:'flex', alignItems:'center', justifyContent:'space-between', flexDirection:'row',height:50 , width:'100%', borderWidth:0.8 , fontWeight:500, fontSize:12 , paddingHorizontal:10 , backgroundColor: 'white' , borderRadius:5, fontSize:12 ,}]}>
                <TextInput
                    style={[{}]}
                    placeholder='Search Here'
                    placeholderTextColor='#0B233C'
            
                />
                <Icon name='search' size={17} color='white' style={[{backgroundColor:'#0B233C' , display:'flex', padding:12 , borderRadius:5}]}></Icon>
            </View>
            <View style={[{height:'80%',display:'flex', alignItems:'center', justifyContent:'center', gap:20}]}>
                <View style={{ flex: 1 , width:'100%' ,gap:20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'white' , borderRadius:30}}>
                        <TouchableOpacity style={{ flex: 1, alignItems: 'center', paddingVertical:15, borderRadius:30, backgroundColor: activeTab === 'Verified' ? '#0B233C' : 'transparent' }}
                            onPress={() => handleTabPress('Verified')}>
                            <Text  style={{ fontSize: 16 , color: activeTab === 'Verified' ? 'white' : '#757575' }}>Verified</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, alignItems: 'center', paddingVertical:15, borderRadius:30, backgroundColor: activeTab === 'Non-Verified' ? '#0B233C' : 'transparent' }}
                            onPress={() => handleTabPress('Non-Verified')}>
                            <Text style={{ fontSize: 16 , color: activeTab === 'Non-Verified' ? 'white' : '#757575' }}>Non-Verified</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{  }}>
                    {activeTab === 'Verified' && (
                        <View style={[{height:'auto' , width:'100%' , backgroundColor:'white', padding:10 , borderRadius:10}]}>
                            <View style={[{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}]}>
                                <View>
                                    <Image source={require('../../assets/img1.jpg')} style={[{ height:50, width:50, borderRadius:500}]}></Image>
                                </View>
                                <View style={[{flexDirection:'column', gap:5}]}>
                                    <Text style={[{fontSize:15, fontWeight:600, color:'#0B233C'}]}>Lamode Dresses</Text>
                                    <View style={[{flexDirection:'row' , alignItems:'center', gap:5}]}>
                                        <Icon1 style={[{color:'#ff8e00'}]} size={12} name='person'/>
                                        <Text style={[{color:'#757575'}]}>Owner Name</Text>
                                    </View>
                                    <View style={[{flexDirection:'row' , alignItems:'center', gap:5}]}>
                                        <Icon2 style={[{color:'#ff8e00'}]} size={12} name='phone'/>
                                        <Text style={[{color:'#757575'}]}>Store</Text>
                                    </View>

                                </View>
                                <View style={[{flexDirection:'column', alignItems:'center', gap:10}]}>
                                    <Icon3 size={24} name='verified'/>
                                    <TouchableOpacity style={[{ backgroundColor: "#0B233C" ,width:115, height: 45 , borderRadius: 10, alignItems: 'center', justifyContent:'center', display:'flex' , flexDirection: 'row' , paddingHorizontal:15 , gap:4}]}>
                                        <Text style={[{ color: "white" , fontSize: 15, fontFamily: 'poppins' , fontWeight:600 }]}>Whatsapp</Text>
                                        <Icon2 name='whatsapp' size={20} color='white'></Icon2>

                                    </TouchableOpacity>

                                </View>
                                

                            </View>
                            
                            
                        </View>
                    )}
                    {activeTab === 'Non-Verified' && (
                        <View style={[{ alignItems:'center',justifyContent:'center' , display:'flex' , height:'100%'}]}>
                            
                            <Text style={[{fontSize:20, fontWeight:600, color:'#0B233C'}]}>You Have No Orders Yet</Text>

                        </View>

                    )}
                    
                    </View>
                </View>
            </View>
        </View>
    </View>
    </Drawer>
    </GestureHandlerRootView>
  )
}

export default ClientDetails