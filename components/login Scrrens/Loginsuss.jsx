import { View, Animated, StyleSheet, TouchableOpacity, Image , Text  } from 'react-native';
import React ,{useEffect,useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Loginsuss = ({ navigation }) => {
  const [storeName, setStoreName] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sname = await AsyncStorage.getItem('storeName');
        const uname = await AsyncStorage.getItem('userName');
        if (sname || uname) {
          setStoreName(sname);
          setUserName(uname);
        }
      } catch (error) {
        console.error('Error fetching data from AsyncStorage:', error);
      }
    };
    fetchData();
  }, []); 
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
              You have successfully Logged In 
            </Text>
        </View>
        <View>
          <Text style={[{fontSize:20 , color:'white', fontWeight:400, textAlign: 'center' , padding: 3}]}>
            {storeName}
          </Text>
          <Text style={[{fontSize:14 , color:'white', fontWeight:400 , textAlign: 'center'}]}>
            {userName}
          </Text>
          <View style={[{paddingTop:20}]}>
            <TouchableOpacity onPress={() => navigation.navigate('Navtag')} style={[{ backgroundColor: "#ff8e00" , height: 43 , width: 301 , borderRadius: 50, alignItems: 'center', justifyContent:'center', display:'flex' }]}>
              <Text style={[{ color: "white" , fontSize: 15 , fontFamily: 'poppins' }]}>Explore</Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  )
}

export default Loginsuss