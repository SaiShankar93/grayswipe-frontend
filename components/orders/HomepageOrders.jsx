import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import Icon from '@expo/vector-icons/Feather'
import Icon1 from '@expo/vector-icons/MaterialIcons'
import Icon2 from '@expo/vector-icons/Ionicons'
import Icon3 from '@expo/vector-icons/Entypo'
import Drawer from 'react-native-drawer';
import DrawerNav from '../drawer/DrawerNav'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const HomepageOrders = ({ navigation }) => {
    const drawerRef = useRef(null);
    const [orders, setOrders] = useState([])
    const openDrawer = () => {
        drawerRef.current.open();
    };

    const closeDrawer = () => {
        drawerRef.current.close();
    };

    useEffect(() => {
        const fetchData = async () => {
            const storeName = await AsyncStorage.getItem('storeName');
            console.log(storeName)
            try {
                const res = await axios.get(`https://gs-backend-2jo2.onrender.com/api/order/allorders?storeName=${storeName}`)
                setOrders(res.data.orders)
                console.log(res.data)
            } catch (error) {
                alert('some error occurred please try again after some time ');
                console.log(error)
            } 
        }
        fetchData();
    }, [])

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(dateString).toLocaleDateString('en-GB', options);
    };

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer
                ref={drawerRef}
                content={<DrawerNav closeDrawer={closeDrawer} />}
                tapToClose={true}
                onClose={() => console.log('Drawer closed!')}
                side="left"
            >
                <View style={{ height: 100, backgroundColor: '#eaf0ff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingLeft: 35, paddingRight: 35, paddingTop: 20 }}>
                    <TouchableOpacity onPress={openDrawer}>
                        <Image source={require('../../assets/settings.png')} style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, fontWeight: '500' }}>Grayswipe</Text>
                    <Image source={require('../../assets/notification.png')} style={{ width: 30, height: 30 }} />
                </View>

                <View style={{ backgroundColor: '#eaf0ff', height: '100%' }}>
                    <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
                        <View style={{ alignItems: 'flex-end' }}>
                            <TouchableOpacity style={{ backgroundColor: "#0b233c", width: 80, height: 43, borderRadius: 10, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 15 }}>
                                <Text style={{ color: "white", fontSize: 13, fontFamily: 'poppins', fontWeight: '600' }}>Print</Text>
                                <Icon name='edit' size={18} color='#ff8e00' />
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: '80%', display: 'flex', gap: 20, paddingVertical: 10 }}>
                            <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', height: 50, width: '100%', borderWidth: 0.8, fontWeight: '500', fontSize: 12, paddingHorizontal: 10, backgroundColor: 'white', borderRadius: 5 }}>
                                <TextInput
                                    style={{}}
                                    placeholder='Search Here'
                                    placeholderTextColor='#0B233C'
                                />
                                <Icon name='search' size={17} color='white' style={{ backgroundColor: '#0B233C', display: 'flex', padding: 12, borderRadius: 5 }} />
                            </View>
                            <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
                                {orders.map((order) => (
                                    <View key={order._id} style={{ marginBottom: 20, height: 'auto', width: '100%', backgroundColor: 'white', borderRadius: 20, padding: 15 }}>
                                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, alignItems: 'center' }}>
                                            <View style={{ display: 'flex', paddingHorizontal: 10, paddingBottom: 10 }}>
                                                <Text style={{ fontSize: 15, fontWeight: '600', color: '#757575' }}>Date</Text>
                                                <Text style={{ fontSize: 15, fontWeight: '600' }}>{formatDate(order.orderDate)}</Text>
                                            </View>
                                            <Icon1 size={24} name='verified' />
                                        </View>
                                        <View style={{ display: 'flex', flexDirection: 'column', borderBottomWidth: 1, padding: 10 }}>
                                            <View>
                                                <Text style={{ fontSize: 15, fontWeight: '600' }}>{order.storeName}</Text>
                                            </View>
                                            <View style={{ paddingHorizontal: 2, paddingVertical: 2 }}>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                                    <Icon2 style={{ color: '#757575' }} size={12} name='person' />
                                                    <Text style={{ color: '#757575' }}>{order.user.userName}</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                                    <Icon3 style={{ color: '#757575' }} size={12} name='location-pin' />
                                                    <Text style={{ color: '#757575' }}>{order.user.address}</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <View style={{ display: 'flex', padding: 10 }}>
                                                <Text style={{ fontSize: 15, fontWeight: '400' }}>Total Order Value</Text>
                                            </View>
                                            <Text style={{ fontSize: 15, fontWeight: '600' }}>{order.value}</Text>
                                        </View>
                                        <TouchableOpacity onPress={() => navigation.navigate('OrderDetails',{order})} style={{ backgroundColor: "#0B233C", height: 43, borderRadius: 50, alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                                            <Text style={{ color: "white", fontWeight: '600', fontSize: 15, fontFamily: 'poppins' }}>See Details</Text>
                                        </TouchableOpacity>
                                    </View>
                                ))}
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </Drawer>
        </GestureHandlerRootView>
    )
}

export default HomepageOrders
