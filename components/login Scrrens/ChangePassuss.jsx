import { View, Animated, StyleSheet, TouchableOpacity, Image , Text  } from 'react-native';
import React from 'react'

const ChangePassuss = ({navigation}) => {
  return (
    <View style={[{alignItems: 'center', justifyContent:'center', display:'flex' , height:'100%', backgroundColor:'#0b233c' , gap:100}]}>
        <View>
          <Text style={[{color:'white', fontSize:20 , fontWeight:500}]}>
              Grayswipe
          </Text>
        </View>
        <View style={[{alignItems: 'center', justifyContent:'center', display:'flex'}]}>
            <Image source={require("../../assets/right.png")} style={[{maxWidth:200, height: 230, resizeMode:'contain'}]}></Image>
            <Text style={[{fontSize:30 , fontWeight: 700 , color: 'white' , maxWidth:200 , textAlign:'center'}]}>
              You have successfully Changed Password 
            </Text>

        </View>
        <View>
          <View style={[{paddingTop:20}]}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}  style={[{ backgroundColor: "#ff8e00" , height: 43 , width: 301 , borderRadius: 50, alignItems: 'center', justifyContent:'center', display:'flex' }]}>
              <Text style={[{ color: "white" , fontSize: 15 , fontFamily: 'poppins' }]}>Login</Text>
            </TouchableOpacity>

          </View>
          
          

        </View>



    </View>
  )
}

export default ChangePassuss