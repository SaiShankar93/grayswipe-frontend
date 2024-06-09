import { View, Text , TextInput, TouchableOpacity , Image } from 'react-native'
import React, { useState , useRef } from 'react';
import Icon from '@expo/vector-icons/Fontisto'

const Orders = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState('Verified');

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <View style={[{backgroundColor:'#eaf0ff' , height:'100%', }]}>
        <View style={[{ paddingHorizontal:20,paddingVertical:20 , marginTop:30,}]}>
            <View style={[{height:'80%',display:'flex', alignItems:'center', justifyContent:'center', gap:20}]}>
                <View style={[{display:'flex', alignItems:'center', justifyContent:'space-between', flexDirection:'row',height:50 , width:'100%', borderWidth:0.8 , fontWeight:500, fontSize:12 , paddingHorizontal:10 , backgroundColor: 'white' , borderRadius:5, fontSize:12 ,}]}>
                    <TextInput
                        style={[{}]}
                        placeholder='Search Here'
                        placeholderTextColor='#0B233C'
                    />
                    <Icon name='search' size={17} color='white' style={[{backgroundColor:'#0B233C' , display:'flex', padding:12 , borderRadius:5}]}></Icon>
                </View>
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
                        <View style={[{height:'100%'}]}>
                            <View style={[{alignItems:'flex-end'}]}>
                                <TouchableOpacity onPress={() => navigation.navigate('AddOrders')} style={[{ backgroundColor: "#ff8e00" ,width:110, height: 43 , borderRadius: 10, alignItems: 'center', justifyContent:'space-between', display:'flex' , flexDirection: 'row' , paddingHorizontal:15 }]}>
                                    <Text style={[{ color: "white" , fontSize: 15, fontFamily: 'poppins' , fontWeight:600 }]}>Add Orders</Text>
                                </TouchableOpacity>

                            </View>
                            <View style={[{flex:1, alignItems:'center',justifyContent:'center' , display:'flex'}]}>
                                <Text style={[{fontSize:20, fontWeight:600, color:'#0B233C'}]}>You Have No Orders Yet</Text>

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
  )
}

export default Orders