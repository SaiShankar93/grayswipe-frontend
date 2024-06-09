import React, { useRef } from 'react';
import { View, Animated, StyleSheet, TouchableOpacity, Image , SafeAreaView , Text } from 'react-native';


const OpenScreen = ({ navigation }) => {

   return (
      <View style={{ backgroundColor: '#0b233c',height: '100%',display: 'flex',justifyContent: 'center',alignItems: 'center',}}>
        <View styles={{}}>
          <View styles={{}}>
            <Image source={require('../../assets/1.png')} style={{height: 300,resizeMode: 'contain'}} />
          </View>
          <Text style={[{ color: "white" , paddingTop:50, paddingLeft:15, fontSize:30 , fontFamily: 'poppins' }]}>Grayswipe</Text>
          <Text style={[{ color: "white" , fontSize: 13 ,fontFamily: "poppins" ,paddingLeft:15, paddingTop:60,  fontFamily: 'poppins' , paddingTop: 15 }]}>
          Connecting Manufactures and wholesalers at ease.
          </Text>
          <View style={[{paddingTop:50 , gap: 20 , alignItems: 'center', justifyContent:'center', display:'flex' }]}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={[{ backgroundColor: "#ff8e00" , height: 43 , width: 301 , borderRadius: 50, alignItems: 'center', justifyContent:'center', display:'flex' }]}>
              <Text style={[{ color: "white" , fontSize: 15 , fontFamily: 'poppins' }]}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}  style={[{ backgroundColor: "white" , height: 43 , width: 301 , borderRadius: 50, alignItems: 'center', justifyContent:'center', display:'flex' , fontWeight:600 }]}>
              <Text style={[{ color: "black" , fontSize: 15 , fontFamily: 'poppins' , fontWeight:600 }]}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[{ backgroundColor: "white" , height: 43 , width: 301 , marginTop: 10 , borderRadius: 50, alignItems: 'center', justifyContent:'center', display:'flex', flexDirection: "row" , fontWeight:600, gap:10 }]}>
              <Image source={require('../../assets/google.png')} style={{height: 300,resizeMode: 'contain'}}></Image>
              <Text style={[{ color: "#000000" , fontSize: 15 , fontFamily: 'poppins' , fontWeight:600 }]}>Sign in with Google</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    
  );
};

export default OpenScreen;
