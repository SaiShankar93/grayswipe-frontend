import React, { useState, useRef } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import Icons from '@expo/vector-icons/AntDesign';
import Drawer from 'react-native-drawer';
import DrawerNav from '../drawer/DrawerNav';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Sample4 from '../Sample4';

const CreateStore = ({ navigation }) => {
    const [storeName, setStoreName] = useState('');
    const [description, setDescription] = useState('');
    const [storeLocation, setStoreLocation] = useState('');
    const [storeOwner, setStoreOwner] = useState('');
    const [storeMobile, setStoreMobile] = useState('');
    const [images, setImages] = useState([]);
    const drawerRef = useRef(null);

    const openDrawer = () => {
        drawerRef.current.open();
    };

    const closeDrawer = () => {
        drawerRef.current.close();
    };

    const addImage = (uri) => {
        setImages((prevImages) => [...prevImages, uri]);
    };

    const handleImagePick = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsMultipleSelection: true,
            base64: true
        });

        if (!result.canceled && result.assets) {
            const selectedImages = result.assets.map(img => img.uri);
            setImages([...images, ...selectedImages]);
        }
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        storeName.trim()
        const userName = await AsyncStorage.getItem("userName");
        formData.append('storeName', storeName);
        formData.append('userName', userName);
        formData.append('description', description);
        formData.append('storeLocation', storeLocation);
        formData.append('storeOwner', storeOwner);
        formData.append('storeMobile', storeMobile);
        
        images.forEach((imageUri, index) => {
            const uriParts = imageUri.split('/');
            const fileName = uriParts[uriParts.length - 1];
            const fileType = imageUri.substring(imageUri.lastIndexOf('.') + 1);
            formData.append('images', {
                uri: imageUri,
                name: fileName,
                type: `image/${fileType}`,
            });
        });
        try {
            const response = await fetch('https://gs-backend-2jo2.onrender.com/api/store/createstore', {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data' 
                },
                body: formData
            });

            const data = await response.json();
            if (response.ok) {
                await AsyncStorage.setItem('storeName', storeName);
                navigation.navigate('Store');
            } else {
                console.error('Error creating store:', data);
            }
        } catch (error) {
            console.error('Error creating store:', error);
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
    );
};

export default CreateStore;
