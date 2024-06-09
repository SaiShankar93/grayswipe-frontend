import { View, Animated, StyleSheet, TouchableOpacity, Image  , Text , TextInput , Linking } from 'react-native';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const BankDetails = () => {
  return (
    <View style={{backgroundColor: '#eaf0ff',height: '100%',display: 'flex',gap: 50,}}>
        <View style={[{ backgroundColor: '#0b233c', height:360, marginLeft:15 , marginRight:15,  }]}>
            <View style={[{alignItems: 'center', justifyContent:'center', display:'flex', marginTop: 60}]}>
                <Text style={[{ color: 'white', fontSize:20 ,}]}>
                    Grayswipe
                </Text>
                <Text style={[{ color: 'white', fontSize:30 ,  fontWeight: 600 , padding: 10}]}>
                Enter Login Details
                </Text>
                <Image source={require('../assets/phone.png')} style={[{Width:300, height:250, resizeMode:'contain' , zIndex:1}]}></Image>
            </View>
            <Image source={require('../assets/svg.png')} style={[{width:'auto' ,resizeMode: 'cover' , marginTop: -370, borderBottomLeftRadius: 40 , borderBottomRightRadius: 40}]}></Image>


        </View>
        <View style={[{ paddingHorizontal:40 , gap:15}]}>
            <View style={[{}]}>
                <Text style={[{fontSize: 15 , fontWeight: 600}]}>Bank Name</Text>
                <TextInput
                 style={[{height:40 , marginTop:5, borderWidth:0.8 , fontSize:10 , padding:10 , backgroundColor: 'white' , borderRadius:5}]}
                 placeholder='Enter Bank Name'
                />
            </View>
            <View style={[{}]}>
                <Text style={[{fontSize: 15 , fontWeight: 600}]}>Account Number</Text>
                <TextInput
                 style={[{height:40 , marginTop:5, borderWidth:0.8 , fontSize:10 , padding:10 , backgroundColor: 'white' , borderRadius:5}]}
                 placeholder='Enter Account Number'
                />
            </View>
            <View style={[{}]}>
                <Text style={[{fontSize: 15 , fontWeight: 600}]}>IFSC Code</Text>
                <TextInput
                 style={[{height:40 , marginTop:5, borderWidth:0.8 , fontSize:10 , padding:10 , backgroundColor: 'white' , borderRadius:5}]}
                 placeholder='Enter IFSC Code'
                />
            </View>
            <TouchableOpacity style={[{ backgroundColor: "#0b233c" , height: 43 , borderRadius: 50, alignItems: 'center', justifyContent:'center', display:'flex' }]}>
              <Text style={[{ color: "white" , fontSize: 15 , fontFamily: 'poppins' }]}>Save</Text>
            </TouchableOpacity>
          
            
        </View>
       
      
    </View>
  )
}

export default BankDetails

