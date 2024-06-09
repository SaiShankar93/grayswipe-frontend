import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState, useRef, useEffect, useCallback } from 'react';
import Icon from '@expo/vector-icons/Fontisto'
import Icon1 from '@expo/vector-icons/Ionicons'
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import EditStore from '../store/EditStore';
import Drawer from 'react-native-drawer';
import DrawerNav from '../drawer/DrawerNav'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Stores = ({ navigation }) => {
  const drawerRef = useRef(null);

  const openDrawer = () => {
    drawerRef.current.open();
  };

  const closeDrawer = () => {
    drawerRef.current.close();
  };
  const [storeData, setStoreData] = useState(null);

  const fetchData = async () => {
    try {
      // console.log('Fetching data');
      const storeName = await AsyncStorage.getItem('storeName');
      if(!storeName) {
        alert("please create a store first")
        navigation.navigate('CreateStore')
      }
      // console.log('storeName in asyncstorage', storeName);
      const response = await axios.get(`https://gs-backend-2jo2.onrender.com/api/store/getstore?storeName=${storeName}`);
      const data = response.data.store;
      setStoreData(data);
      // console.log(response.data.store);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  fetchData();
  useEffect(() => {
    fetchData();
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [])
  );


  // if (!storeData) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       <Text>Loading...</Text>
  //     </View>
  //   );
  // }

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
            <Image source={require('../../assets/settings.png')} style={{ width: 38, height: 35 }} />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: '500' }}>Grayswipe</Text>
          <Image source={require('../../assets/notification.png')} style={{ width: 38, height: 35 }} />
        </View>

        <View style={[{ height: '100%', backgroundColor: 'white' }]}>
          <View style={[{ paddingHorizontal: 20, paddingTop: 20, gap: 20 }]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
              <View>
                {storeData && storeData.images[0] && storeData.images[0] && (
                  <Image
                    source={{ uri: storeData.images[0] }}
                    style={[{ height: 50, width: 50, borderRadius: 500 }]}
                  />
                )}
              </View>
              <View style={{ gap: 10, alignItems: 'center' }}>
                <Text style={{ fontSize: 18, fontWeight: 600 }}>0</Text>
                <Text style={{ fontSize: 18, fontWeight: 600 }}>connections</Text>
              </View>
              <View style={{ gap: 10, alignItems: 'center' }}>
                <Text style={{ fontSize: 18, fontWeight: 600 }}>0</Text>
                <Text style={{ fontSize: 18, fontWeight: 600 }}>posts</Text>
              </View>
            </View>
            <View style={[{ display: 'flex', flexDirection: 'column', padding: 10, gap: 7 }]}>
              <View>
                <Text style={[{ fontSize: 18, fontWeight: 600 }]}>Store Name: {storeData && storeData.storeName}</Text>
              </View>
              <Text style={[{ fontSize: 15, fontWeight: 400 }]}>{storeData && storeData.storeOwner}</Text>
              <Text style={[{ fontSize: 15, fontWeight: 400 }]}>{storeData && storeData.storeLocation}</Text>
              <Text style={[{ fontSize: 15, fontWeight: 400 }]}>{storeData && storeData.storeMobile}</Text>
              <Text style={[{ marginTop: 10, fontSize: 12, fontWeight: 400 }]}>{storeData && storeData.description}</Text>
            </View>
            <View>
              <Text style={[{ fontSize: 18, fontWeight: 600 }]}>Pictures of your store...</Text>
              <View style={[{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', paddingHorizontal: 20, paddingVertical: 10, gap: 10 }]}>
                {storeData && storeData.images && storeData.images[0] ? (
                  <Image
                    resizeMode='cover'
                    source={{ uri: storeData.images[0] }}
                    style={{ width: '50%', height: 150, borderRadius: 20 }}
                  />
                ) : null}
                {storeData && storeData.images && storeData.images[1] ? (
                  <Image
                    resizeMode='cover'
                    source={{ uri: storeData.images[1] }}
                    style={{ width: '50%', height: 150, borderRadius: 20 }}
                  />
                ) : null}
              </View>
              <View style={[{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', paddingHorizontal: 20, paddingVertical: 10, gap: 10 }]}>
                {storeData && storeData.images && storeData.images[2] ? (
                  <Image
                    resizeMode='cover'
                    source={{ uri: storeData.images[2] }}
                    style={{ width: '50%', height: 150, borderRadius: 20 }}
                  />
                ) : null}
                {storeData && storeData.images && storeData.images[3] ? (
                  <Image
                    resizeMode='cover'
                    source={{ uri: storeData.images[3] }}
                    style={{ width: '50%', height: 150, borderRadius: 20 }}
                  />
                ) : null}
              </View>
              <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', paddingVertical: 20 }}>
                <TouchableOpacity onPress={() => navigation.navigate('EditStore')} style={[{ backgroundColor: "#0B233C", height: 43, width: 150, borderRadius: 50, alignItems: 'center', justifyContent: 'center', display: 'flex' }]}>
                  <Text style={[{ color: "white", fontSize: 15, fontFamily: 'poppins' }]}>Edit Details</Text>
                </TouchableOpacity>
                {
                  !storeData &&
                  <TouchableOpacity style={[{ backgroundColor: "#0B233C", height: 43, width: 150, borderRadius: 50, alignItems: 'center', justifyContent: 'center', display: 'flex' }]}>
                  <Text style={[{ color: "white", fontSize: 15, fontFamily: 'poppins' }]} onPress={() => navigation.navigate('CreateStore')}>Create Store</Text>
                </TouchableOpacity>

                }
              </View>
            </View>
          </View>
        </View>
      </Drawer>
    </GestureHandlerRootView>
  );
}

export default Stores;
