import { View, Animated, StyleSheet, TouchableOpacity, Image , SafeAreaView , Text , TextInput , Linking } from 'react-native';
import React from 'react'

const ForgotPassword = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: '#eaf0ff',height: '100%',display: 'flex',gap: 50,}}>
        <View style={[{ backgroundColor: '#0b233c', height:360, marginLeft:15 , marginRight:15,  }]}>
            <View style={[{alignItems: 'center', justifyContent:'center', display:'flex', marginTop: 60}]}>
                <Text style={[{ color: 'white', fontSize:20 ,}]}>
                    Grayswipe
                </Text>
                <Text style={[{ color: 'white', fontSize:30 ,  fontWeight: 600 , padding: 10}]}>
                Forgot Password?
                </Text>
                <Image source={require('../../assets/phone.png')} style={[{Width:300, height:250, resizeMode:'contain' , zIndex:1}]}></Image>
            </View>
            <Image source={require('../../assets/svg.png')} style={[{width:'auto' ,resizeMode: 'cover' , marginTop: -370, borderBottomLeftRadius: 40 , borderBottomRightRadius: 40}]}></Image>


        </View>
        <View style={[{ padding:40 , gap:20}]}>
            <View style={[{}]}>
                <Text style={[{fontSize: 15 , fontWeight: 600}]}>Phone Number / Username</Text>
                <TextInput
                 style={[{height:40 , marginTop:5, borderWidth:0.8 , fontSize:10 , padding:10 , backgroundColor: 'white' , borderRadius:5}]}
                 placeholder='Enter Phone Number / Username'
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('OTP')} style={[{ backgroundColor: "#ff8e00" , marginTop:25 , height: 43 , borderRadius: 50, alignItems: 'center', justifyContent:'center', display:'flex' }]}>
              <Text style={[{ color: "white" , fontSize: 15 , fontFamily: 'poppins' }]}>Send OTP</Text>
            </TouchableOpacity>
            
          <View style={[{justifyContent:'center' , marginTop: 20 , display:'flex' , alignItems:'center',}]}>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text
                    style={[{ color: '#0047ff'}]}>
                    New User? Sign UP
               </Text>
            </TouchableOpacity>

          </View>
          
            
        </View>
       
      
    </View>
  )
}

export default ForgotPassword

