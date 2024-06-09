import { View, Animated, StyleSheet, TouchableOpacity, Image, SafeAreaView, Text, TextInput, Linking } from 'react-native';
import React, { useState } from 'react'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        try {
            const response = await axios.post(`https://gs-backend-2jo2.onrender.com/api/auth/signin`, {
                email,
                password
            });
            if (response.status === 200) {
                await AsyncStorage.setItem("userName", response.data.userName);
                if (response.data.storeName !== null && response.data.storeName !== undefined) {
                    await AsyncStorage.setItem("storeName", response.data.storeName);
                }
                await AsyncStorage.setItem("email", response.data.email);
                if (response.data.mobile !== null && response.data.mobile !== undefined) {
                    await AsyncStorage.setItem("mobile", JSON.stringify(response.data.mobile));
                }
                await AsyncStorage.setItem("isLoggedIn", 'true');
                console.log(await AsyncStorage.getItem('isLoggedIn'))
                navigation.navigate('Loginsuss');
            } else {
                console.error('Error:', response.data);
            }
                } catch (error) {
            console.error('Error:', error.message);
        }
    };
    return (
        <View style={{ backgroundColor: '#eaf0ff', height: '100%', display: 'flex', gap: 50, }}>
            <View style={[{ backgroundColor: '#0b233c', height: 360, marginLeft: 15, marginRight: 15, }]}>
                <View style={[{ alignItems: 'center', justifyContent: 'center', display: 'flex', marginTop: 60 }]}>
                    <Text style={[{ color: 'white', fontSize: 20, }]}>
                        Grayswipe
                    </Text>
                    <Text style={[{ color: 'white', fontSize: 30, fontWeight: 600, padding: 10 }]}>
                        Enter Login Details
                    </Text>
                    <Image source={require('../../assets/phone.png')} style={[{ Width: 300, height: 250, resizeMode: 'contain', zIndex: 1 }]}></Image>
                </View>
                <Image source={require('../../assets/svg.png')} style={[{ width: 'auto', resizeMode: 'cover', marginTop: -370, borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }]}></Image>


            </View>
            <View style={[{ padding: 40, gap: 20 }]}>
                <View style={[{}]}>
                    <Text style={[{ fontSize: 15, fontWeight: 600 }]}>Email</Text>
                    <TextInput
                        style={[{ height: 40, marginTop: 5, borderWidth: 0.8, fontSize: 10, padding: 10, backgroundColor: 'white', borderRadius: 5 }]}
                        placeholder='Enter Your Email'
                        onChangeText={setEmail}
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
                <TouchableOpacity onPress={handleSubmit} style={[{ backgroundColor: "#ff8e00", marginTop: 25, height: 43, borderRadius: 50, alignItems: 'center', justifyContent: 'center', display: 'flex' }]}>
                    <Text style={[{ color: "white", fontSize: 15, fontFamily: 'poppins' }]}>Login</Text>
                </TouchableOpacity>
                <View style={[{ justifyContent: 'flex-end', display: 'flex', alignItems: 'flex-end', }]}>
                    <TouchableOpacity onPress={() => navigation.navigate('ForgotPasswordStack')}>
                        <Text
                            style={[{ justifyContent: 'flex-end', display: 'flex', alignItems: 'flex-end', color: '#0047ff' }]}>
                            Forgot Password?
                        </Text>

                    </TouchableOpacity>


                </View>

                <View style={[{ justifyContent: 'center', marginTop: 20, display: 'flex', alignItems: 'center', }]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text
                            style={[{ color: '#0047ff' }]}>
                            New User? Sign UP
                        </Text>
                    </TouchableOpacity>

                </View>


            </View>


        </View>
    )
}

export default Login

