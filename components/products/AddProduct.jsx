import { View, Text , Image, TextInput , StyleSheet, TouchableOpacity , ScrollView, } from 'react-native'
import React, { useState , useRef } from 'react';
import Icon from '@expo/vector-icons/Fontisto'
import Swiper from 'react-native-swiper';
import Icon1 from 'react-native-vector-icons/MaterialIcons';

const AddProduct = () => {
    const images = [
        { path: require('../../assets/img1.jpg'), text: 'Image 1' },
        { path: require('../../assets/img1.jpg'), text: 'Image 2' },
        // Add more images as needed
      ];
    
      const renderImage = (image, index) => (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , borderTopLeftRadius:20 , borderTopRightRadius:20   }} key={index}>
            <Image source={image.path} style={{ width: '100%', resizeMode: 'cover' , }} />
            <Text style={{ position: 'absolute', bottom: 20, left: 20, color: '#fff', fontSize: 24, fontWeight: 'bold' }}>{image.text}</Text>
        </View>
      );

  return (
    <View style={[{backgroundColor:'#eaf0ff' , height:'100%', }]}>
            <View style={[{ display:'flex', alignItems:'center', justifyContent:'space-between' , flexDirection:'row', paddingLeft:35,paddingRight:35}]}>
                <Image source={require('../../assets/settings.png')} style={[{}]}></Image>
                <Text style={[{fontSize:20 , fontWeight:500}]}>
                    Grayswipe
                </Text>
                <Image source={require('../../assets/notification.png')} style={[{}]}></Image>
            </View>
            <View style={[{ justifyContent:'flex-end' , display:'flex' , alignItems:'flex-end', paddingHorizontal:22 ,paddingVertical:10 }]}>
                <TouchableOpacity style={[{ height:50 , width:60 ,backgroundColor: "#0B233C" , height: 43 , borderRadius: 10, alignItems: 'center', justifyContent:'center', display:'flex' }]}>
                    <Text style={[{ color: "white" , fontSize: 20 , fontFamily: 'poppins' , fontWeight:600 }]}>Add</Text>
                </TouchableOpacity>
            </View>
            <View style={[{display:'flex', alignItems:'center', justifyContent:'center', height:'60%' , gap:30 , paddingHorizontal:20,paddingVertical:1}]}>
                <View style={{ flex: 1 ,  }}>
                    <View style={[{ height: 250 ,  }]}>
                        <Swiper
                            style={{borderRadius:20}}
                            loop={false}
                            showsButtons={true}
                            showsPagination={false}
                            nextButton={<Icon1 name='arrow-forward-ios' size={24}></Icon1>}
                            prevButton={<Icon1 name='arrow-back-ios' size={24}></Icon1>}
                         >
                            {images.map((image, index) => renderImage(image, index))}
                        </Swiper>
                    </View>
      
                    <View style={{ backgroundColor: '#fff', padding: 15 , borderBottomLeftRadius:20 , borderBottomRightRadius:20 }}>
                        <View style={{ backgroundColor: '#fff', alignItems: 'center' }}>
                            <Text style={{ color: '#000', fontSize: 15 , fontWeight:600 }}>See Details</Text>
                        </View>
                    </View>
                </View>

                    
            

            </View>
       

        </View>
  )
}

export default AddProduct