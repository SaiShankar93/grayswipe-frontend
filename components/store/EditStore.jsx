import { ScrollView, View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState, useRef, useEffect } from 'react';
import Icons from '@expo/vector-icons/AntDesign'
import Drawer from 'react-native-drawer';
import DrawerNav from '../drawer/DrawerNav'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Sample4 from '../Sample4'

const EditStore = ({ navigation }) => {
  const drawerRef = useRef(null);
  const [initialData, setInitialData] = useState({});
  const [storeName, setStoreName] = useState('');
  const [description, setDescription] = useState('');
  const [storeLocation, setStoreLocation] = useState('');
  const [storeOwner, setStoreOwner] = useState('');
  const [storeMobile, setStoreMobile] = useState('');
  const [imageNames, setImageNames] = useState([]);

  const openDrawer = () => {
    drawerRef.current.open();
  };

  const closeDrawer = () => {
    drawerRef.current.close();
  };

  useEffect(() => {
    const fetchStoreData = async () => {
      const prevStoreName = await AsyncStorage.getItem('storeName');
      const response = await axios.get(`https://gs-backend-2jo2.onrender.com/api/store/getstore?storeName=${prevStoreName}`);
      const data = response.data.store;
      setInitialData(data);
      setStoreName(data.storeName);
      setDescription(data.description);
      setStoreLocation(data.storeLocation);
      setStoreOwner(data.storeOwner);
      setStoreMobile(data.storeMobile);
    };
    fetchStoreData();
  }, []);

  const addImage = (uri) => {
    setImages((prevImages) => [...prevImages, uri]);
  };

  const handleImagePick = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      base64: true
    });

    if (!result.canceled) {
      const selectedImages = result.selected.map(img => img.uri);
      setImageNames([...imageNames, ...selectedImages]);
    }
  };

  const handleSubmit = async () => {
    try {
      const prevStoreName = await AsyncStorage.getItem('storeName');
      const updatedFields = {};

      if (storeName.trim() && storeName !== initialData.storeName) {
        updatedFields.storeName = storeName;
      }
      if (description.trim() && description !== initialData.description) {
        updatedFields.description = description;
      }
      if (storeLocation.trim() && storeLocation !== initialData.storeLocation) {
        updatedFields.storeLocation = storeLocation;
      }
      if (storeOwner.trim() && storeOwner !== initialData.storeOwner) {
        updatedFields.storeOwner = storeOwner;
      }
      if (storeMobile.trim() && storeMobile !== initialData.storeMobile) {
        updatedFields.storeMobile = storeMobile;
      }

      if (Object.keys(updatedFields).length === 0) {
        alert('No changes made.');
        return;
      }

      updatedFields.prevStoreName = prevStoreName;

      const response = await axios.post('https://gs-backend-2jo2.onrender.com/api/store/updatestore', updatedFields, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        await AsyncStorage.setItem('storeName', response.data.store.storeName);
        alert('Store edited successfully');
        navigation.navigate('Store');
      } else if (response.status === 409) {
        console.log('Duplicate store name. Please choose a different store name.');
      } else {
        console.error('Error:', response.data);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
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
        <ScrollView>
          <View style={{ height: '100%', width: '100%', display: 'flex', backgroundColor: 'white', paddingVertical: 20 }}>
            <View style={{ paddingHorizontal: 30, paddingTop: 20, gap: 10 }}>
              <View>
                <Text style={{ fontSize: 15, fontWeight: '600' }}>Store Name</Text>
                <TextInput
                  style={{ height: 40, marginTop: 5, borderWidth: 0.8, fontSize: 10, padding: 10, backgroundColor: 'white', borderRadius: 5 }}
                  placeholder='Enter Store Name Here'
                  onChangeText={(text) => setStoreName(text)}
                  value={storeName}
                />
              </View>
              <View>
                <Text style={{ fontSize: 15, fontWeight: '600' }}>Description</Text>
                <TextInput
                  style={{ minHeight: 100, borderWidth: 0.8, padding: 10, borderRadius: 5, backgroundColor: 'white' }}
                  multiline={true}
                  numberOfLines={6}
                  placeholder="Description of the store"
                  onChangeText={(text) => setDescription(text)}
                  value={description}
                />
              </View>
              <View>
                <Text style={{ fontSize: 15, fontWeight: '600' }}>Store Phone Number</Text>
                <TextInput
                  style={{ height: 40, marginTop: 5, borderWidth: 0.8, fontSize: 10, padding: 10, backgroundColor: 'white', borderRadius: 5 }}
                  placeholder='Enter store contact number'
                  onChangeText={(text) => setStoreMobile(text)}
                  value={storeMobile}
                />
              </View>
              <View>
                <Text style={{ fontSize: 15, fontWeight: '600' }}>Location</Text>
                <TextInput
                  style={{ height: 40, marginTop: 5, borderWidth: 0.8, fontSize: 10, padding: 10, backgroundColor: 'white', borderRadius: 5 }}
                  placeholder='Enter store location'
                  onChangeText={(text) => setStoreLocation(text)}
                  value={storeLocation}
                />
              </View>
              <Text style={{ fontSize: 15, fontWeight: '600' }}>Add pictures of your Store...</Text>
              <View style={{ gap: 15, flexDirection: 'row' }}>
                <View style={{ gap: 15 }}>
                  <Sample4 addImage={addImage} />
                  <Sample4 addImage={addImage} />
                </View>
                <View style={{ gap: 15 }}>
                  <Sample4 addImage={addImage} />
                  <Sample4 addImage={addImage} />
                </View>
              </View>
              <View style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                <TouchableOpacity onPress={handleSubmit} style={{ backgroundColor: "#0B233C", height: 43, width: 150, borderRadius: 50, alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                  <Text style={{ color: "white", fontSize: 15 }}>Add Store</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </Drawer>
    </GestureHandlerRootView>
  )
}

export default EditStore;
