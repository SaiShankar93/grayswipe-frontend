import { ScrollView, View, Animated, StyleSheet, TouchableOpacity, Image, SafeAreaView, Text, TextInput, Linking } from 'react-native';
import React, { useState } from 'react'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = ({ navigation }) => {
    const [ownerName, setOwnerName] = useState('');
    const [storeName, setStoreName] = useState('');
    const [mobile, setMobileNumber] = useState('');
    const [userName, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [address,setAddress] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        try {
            // console.log(Config.API_URL)
            const response = await axios.post(`https://gs-backend-2jo2.onrender.com/api/auth/signup`, {
                ownerName,
                storeName,
                mobile,
                userName,
                email,
                password,
                address
            });
            console.log(response)
            if (response.status === 200) {
                await AsyncStorage.setItem('userName', response.data.userName);
                if (response.data.storeName !== null && response.data.storeName !== undefined) {
                    await AsyncStorage.setItem('storeName', response.data.storeName);
                }
                await AsyncStorage.setItem('email', response.data.email);
                if (response.data.mobile !== null && response.data.mobile !== undefined) {
                    await AsyncStorage.setItem('mobile', JSON.stringify(response.data.mobile));
                }
                await AsyncStorage.setItem('isLoggedIn', 'true');
                navigation.navigate('Registersuss');
            } else {
                console.error('Error:', response.data);
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    return (
        <View style={{ backgroundColor: '#eaf0ff', height: '100%', display: 'flex', gap: 50, }}>
            <View style={[{ backgroundColor: '#0b233c', height: 310, marginLeft: 15, marginRight: 15, }]}>
                <View style={[{ alignItems: 'center', justifyContent: 'center', display: 'flex', marginTop: 60 }]}>
                    <Text style={[{ color: 'white', fontSize: 20, }]}>
                        Grayswipe
                    </Text>
                    <Text style={[{ color: 'white', fontSize: 30, fontWeight: 600, padding: 10 }]}>
                        Create account
                    </Text>
                    <Image source={require('../../assets/phone.png')} style={[{ Width: 300, height: 230, resizeMode: 'contain', zIndex: 1 }]}></Image>
                </View>
                <Image source={require('../../assets/svg.png')} style={[{ width: 'auto', resizeMode: 'cover', marginTop: -380, borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }]}></Image>

            </View>
            <ScrollView style={[{}]}>
                <View style={[{ paddingVertical: 10, paddingLeft: 40, paddingRight: 40, paddingTop: 8, gap: 15 }]}>
                    <View style={[{}]}>
                        <Text style={[{ fontSize: 15, fontWeight: 600 }]}>Owner Name</Text>
                        <TextInput
                            style={[{ height: 40, marginTop: 5, borderWidth: 0.8, fontSize: 10, padding: 10, backgroundColor: 'white', borderRadius: 5 }]}
                            placeholder='Enter Owner full name'
                            onChangeText={setOwnerName}
                        />
                    </View>
                    {/* <View style={[{}]}>
                        <Text style={[{ fontSize: 15, fontWeight: 600 }]}>Store Name</Text>
                        <TextInput
                            style={[{ height: 40, marginTop: 5, borderWidth: 0.8, fontSize: 10, padding: 10, backgroundColor: 'white', borderRadius: 5 }]}
                            placeholder='Enter Store name'
                            onChangeText={setStoreName}
                        />
                    </View> */}
                    <View style={[{}]}>
                        <Text style={[{ fontSize: 15, fontWeight: 600 }]}>Phone Number</Text>
                        <TextInput
                            style={[{ height: 40, marginTop: 5, borderWidth: 0.8, fontSize: 10, padding: 10, backgroundColor: 'white', borderRadius: 5 }]}
                            placeholder='Enter Phone Number'
                            onChangeText={setMobileNumber}
                        />
                    </View>
                    <View style={[{}]}>
                        <Text style={[{ fontSize: 15, fontWeight: 600 }]}>Username</Text>
                        <TextInput
                            style={[{ height: 40, marginTop: 5, borderWidth: 0.8, fontSize: 10, padding: 10, backgroundColor: 'white', borderRadius: 5 }]}
                            placeholder='Enter Username'
                            onChangeText={setUsername}
                        />
                    </View>
                    <View style={[{}]}>
                        <Text style={[{ fontSize: 15, fontWeight: 600 }]}>Email</Text>
                        <TextInput
                            style={[{ height: 40, marginTop: 5, borderWidth: 0.8, fontSize: 10, padding: 10, backgroundColor: 'white', borderRadius: 5 }]}
                            placeholder='Enter Email Address'
                            onChangeText={setEmail}
                        />
                    </View>
                    <View style={[{}]}>
                        <Text style={[{ fontSize: 15, fontWeight: 600 }]}>Address</Text>
                        <TextInput
                            style={[{ height: 40, marginTop: 5, borderWidth: 0.8, fontSize: 10, padding: 10, backgroundColor: 'white', borderRadius: 5 }]}
                            placeholder='Enter Address'
                            onChangeText={setAddress}

                        />
                    </View>
                    <View style={[{}]}>
                        <Text style={[{ fontSize: 15, fontWeight: 600 }]}>Password</Text>
                        <TextInput
                            style={[{ height: 40, marginTop: 5, borderWidth: 0.8, fontSize: 10, padding: 10, backgroundColor: 'white', borderRadius: 5 }]}
                            placeholder='Enter Password'
                            onChangeText={setPassword}
                        />
                    </View>
                    <TouchableOpacity onPress={handleSubmit} style={[{ backgroundColor: "#0b233c", marginTop: 15, height: 43, borderRadius: 50, alignItems: 'center', justifyContent: 'center', display: 'flex' }]}>
                        <Text style={[{ color: "white", fontSize: 15, fontFamily: 'poppins' }]}>SignUp</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>

        </View>
    )
}

export default Register