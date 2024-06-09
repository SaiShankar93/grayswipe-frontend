import { View, Animated, StyleSheet, TouchableOpacity, Image , Text  } from 'react-native';
import React from 'react'

const Payment = () => {
  return (
    <View style={[{alignItems: 'center', justifyContent:'center', display:'flex' , height:'110%', backgroundColor:'#0b233c' , gap:100 , flex:1}]}>
        <View>
          <Text style={[{color:'white', fontSize:20 , fontWeight:500}]}>
              Grayswipe
          </Text>
        </View>
        <View style={[{alignItems: 'center', justifyContent:'center', display:'flex'}]}>
            <Image source={require("../../assets/right.png")} style={[{maxWidth:200, height: 230, resizeMode:'contain'}]}></Image>
            <Text style={[{fontSize:30 , fontWeight: 700 , color: 'white' , maxWidth:200 , textAlign:'center'}]}>
              Coming {'\n'}soon! 
            </Text>

        </View>
        <View>
          <View style={[{paddingTop:20}]}>
            <TouchableOpacity style={[{ backgroundColor: "#ff8e00" , height: 43 , width: 301 , borderRadius: 50, alignItems: 'center', justifyContent:'center', display:'flex' }]}>
              <Text style={[{ color: "white" , fontSize: 15 , fontFamily: 'poppins' }]}>Okay</Text>
            </TouchableOpacity>

          </View>
          
          

        </View>



    </View>
  )
}


export default Payment