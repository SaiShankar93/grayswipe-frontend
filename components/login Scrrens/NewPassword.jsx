import { View, Animated, StyleSheet, TouchableOpacity, Image , SafeAreaView , Text , TextInput , Linking } from 'react-native';
import React from 'react'

const NewPassword = ({ navigation}) => {
  return (
    <View style={{ backgroundColor: '#eaf0ff',height: '100%',display: 'flex',gap: 50,}}>
        <View style={[{ backgroundColor: '#0b233c', height:360, marginLeft:15 , marginRight:15,  }]}>
            <View style={[{alignItems: 'center', justifyContent:'center', display:'flex', marginTop: 60}]}>
                <Text style={[{ color: 'white', fontSize:20 ,}]}>
                    Grayswipe
                </Text>
                <Text style={[{ color: 'white', fontSize:30 ,  fontWeight: 600 , padding: 10}]}>
                New Password
                </Text>
                <Image source={require('../../assets/phone.png')} style={[{Width:300, height:250, resizeMode:'contain' , zIndex:1}]}></Image>
            </View>
            <Image source={require('../../assets/svg.png')} style={[{width:'auto' ,resizeMode: 'cover' , marginTop: -370, borderBottomLeftRadius: 40 , borderBottomRightRadius: 40}]}></Image>


        </View>
        <View style={[{ padding:40 , gap:20}]}>
            <View style={[{}]}>
                <Text style={[{fontSize: 15 , fontWeight: 600}]}>Enter New Password</Text>
                <TextInput
                 style={[{height:40 , marginTop:5, borderWidth:0.8 , fontSize:10 , padding:10 , backgroundColor: 'white' , borderRadius:5}]}
                 placeholder='Enter New Password'
                />
            </View>
            <View style={[{}]}>
                <Text style={[{fontSize: 15 , fontWeight: 600}]}>Confirm Password</Text>
                <TextInput
                 style={[{height:40 , marginTop:5, borderWidth:0.8 , fontSize:10 , padding:10 , backgroundColor: 'white' , borderRadius:5}]}
                 placeholder='Re-enter Password'
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('ChangePassuss')} style={[{ backgroundColor: "#ff8e00" , marginTop:25 , height: 43 , borderRadius: 50, alignItems: 'center', justifyContent:'center', display:'flex' }]}>
              <Text style={[{ color: "white" , fontSize: 15 , fontFamily: 'poppins' }]}>Confirm</Text>
            </TouchableOpacity>
            
            
         
          
            
        </View>
       
      
    </View>
  )
}



export default NewPassword

