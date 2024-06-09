import { ScrollView, View, Text , Image ,TextInput , TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from '@expo/vector-icons/Fontisto'

const AddOrders = () => {
  return (
    <ScrollView>
    <View style={[{backgroundColor:'#eaf0ff' , height:'100%', paddingVertical:10 }]}>
        <View style={[{display:'flex', alignItems:'center', justifyContent:'center' , gap:15 , paddingHorizontal:20,paddingVertical:1}]}>
            <View style={[{display:'flex', alignItems:'center', justifyContent:'space-between', flexDirection:'row',height:50 , width:'100%', borderWidth:0.8 , fontWeight:500, fontSize:12 , paddingHorizontal:10 , backgroundColor: 'white' , borderRadius:5, fontSize:12 ,}]}>
                <TextInput
                        style={[{}]}
                        placeholder='Search Here'
                        placeholderTextColor='#0B233C'
            
                />
                <Icon name='search' size={17} color='white' style={[{backgroundColor:'#0B233C' , display:'flex', padding:12 , borderRadius:5}]}></Icon>
            </View>
            <View style={[{gap:10}]}>
                <TextInput
                    style={[{height:40 , width:320, borderWidth:0.8 , fontSize:10 , padding:10 , backgroundColor: 'white' , borderRadius:5,}]}
                    placeholder='Enter Client Name'
                />
                <TextInput
                    style={[{height:40 , width:320, borderWidth:0.8 , fontSize:10 , padding:10 , backgroundColor: 'white' , borderRadius:5,}]}
                    placeholder='Enter Client Address'
                />
                <TextInput
                    style={[{height:40 , width:320, borderWidth:0.8 , fontSize:10 , padding:10 , backgroundColor: 'white' , borderRadius:5,}]}
                    placeholder='Enter Product NAME (search bar)'
                />
                <TextInput
                    style={[{height:40 , width:320, borderWidth:0.8 , fontSize:10 , padding:10 , backgroundColor: 'white' , borderRadius:5,}]}
                    placeholder='MRP'
                />
                <TextInput
                    style={[{height:40 , width:320, borderWidth:0.8 , fontSize:10 , padding:10 , backgroundColor: 'white' , borderRadius:5,}]}
                    placeholder='No of Piece'
                />

            </View>
            <View style={[{height:330,width:'100%' , backgroundColor:'white' , borderRadius:20 ,display:'flex', flexDirection:'column'}]}>
                <View style={[{height:50, backgroundColor:'#0b233c' , borderTopLeftRadius:20 , borderTopRightRadius:20 ,display:'flex',justifyContent:'space-between', alignItems:'center', flexDirection:'row' , paddingHorizontal:20}]}>
                    <View>
                        <Text style={[{color:'white', fontSize:14, fontWeight:600}]}>DESCRIPTION</Text>
                    </View>
                    <View style={[{display:'flex', flexDirection:'row' , gap:20}]}>
                        <Text style={[{color:'white', fontSize:14, fontWeight:600}]}>Rate</Text>
                        <Text style={[{color:'white', fontSize:14, fontWeight:600}]}>QNTY</Text>
                        <Text style={[{color:'white', fontSize:14, fontWeight:600}]}>Total</Text>
                    </View>

                </View>
                <View style={[{height:280,justifyContent:'space-between', display:'flex', flexDirection:'column'}]}>
                    <View style={[{display:'flex',justifyContent:'space-between', alignItems:'center', flexDirection:'row' , paddingHorizontal:20 ,paddingVertical:10}]}>
                         <View style={[]}>
                            <Text style={[{color:'black', fontSize:14, fontWeight:600}]}>shirt</Text>
                        </View>
                        <View style={[{display:'flex', flexDirection:'row' , gap:30}]}>
                            <Text style={[{color:'black', fontSize:14, fontWeight:600}]}>120</Text>
                            <Text style={[{color:'black', fontSize:14, fontWeight:600}]}>10</Text>
                            <Text style={[{color:'black', fontSize:14, fontWeight:600}]}>1200</Text>
                        </View>

                    </View>
                </View>
                <View style={[{display:'flex', justifyContent:'center',alignItems:'center' , paddingVertical:10}]}>
                        <TouchableOpacity style={[{backgroundColor: '#0B233C' , height: 43 , width:120, borderRadius: 10, alignItems: 'center', justifyContent:'center', display:'flex',}]}>
                            <Text style={[{color:'white', fontSize: 15 , fontWeight:600, fontFamily: 'poppins' , paddingHorizontal:10, }]}>Save</Text>
                        </TouchableOpacity>
                </View>
            
            </View>
            <View style={[{display:'flex', justifyContent:'center',alignItems:'center'}]}>
                <TouchableOpacity style={[{backgroundColor: '#0B233C' , height: 43 , width:120, borderRadius: 10, alignItems: 'center', justifyContent:'center', display:'flex',}]}>
                            <Text style={[{color:'white', fontSize: 15 , fontWeight:600, fontFamily: 'poppins' , paddingHorizontal:10, }]}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
    </ScrollView>

  )
}

export default AddOrders