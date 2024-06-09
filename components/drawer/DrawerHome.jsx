import { View, Text , Image, Easing  } from "react-native";
import Icon1 from "@expo/vector-icons/MaterialIcons";
import Icon2 from "@expo/vector-icons/AntDesign";
import Icon3 from "@expo/vector-icons/MaterialIcons";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon4 from '@expo/vector-icons/Ionicons'
import React, { useEffect, useRef ,useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Navigation from '../Navigation'

const DrawerHome = ({ navigation  , closeDrawer , navigateToScreen1 }) => {
  const [email,setEmail]= useState('');
  const [storeName,setStoreName]= useState('');
  const handleButton1Press = () => {
    navigation.navigate("Payment");
  };
  const handleButton2Press = () => {
    navigation.navigate("Verification");
  };
  const handleLogout = async () => {
    try {
      await AsyncStorage.clear();
      console.log('AsyncStorage cleared');
      navigation.navigate('Navigation');  
    } catch (error) {
      console.error('Error clearing AsyncStorage:', error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try { 
        const storeName = await AsyncStorage.getItem('storeName');
        const email = await AsyncStorage.getItem('email');
        if (storeName || email) {
          setStoreName(storeName);
          setEmail(email);
        }
      } catch (error) {
        console.error('Error fetching data from AsyncStorage:', error);
      }
    }
    fetchData()
  }, []);
  return (
    <View style={{ backgroundColor: "#eaf0ff", flex: 1 , zIndex:1 }}>
      <View
        style={{
          height: "15%",
          backgroundColor: "#0b233c",
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
          gap: 20,
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            backgroundColor: "#ff8e00",
            borderRadius: 50,
            height: 55,
            width: 55,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: 500, color: "white" }}>
            SN
          </Text>
        </View>
        <View>
          <Text style={{ color: "white", fontSize: 20, fontWeight: 600 }}>
            {storeName}
          </Text>
          <Text style={{ color: "white", fontSize: 11, fontWeight: 500 }}>
            {email}
          </Text>
        </View>
      </View>
      <View style={{ gap: 30, paddingHorizontal: 40, paddingTop: 20 }}>
        <View>
          <TouchableOpacity
            onPress={handleButton1Press}
            style={{ flexDirection: "row", alignItems: "center", gap: 15 }}
          >
            <Icon2 size={24} name="profile" />
            <Text style={{ color: "black", fontSize: 21, fontWeight: 600 }}>
              Profile
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Verification')}
            style={{ flexDirection: "row", alignItems: "center", gap: 15 }}
          >
            <Icon1 size={24} name="verified" />
            <Text style={{ color: "black", fontSize: 21, fontWeight: 600 }}>
              Verfication
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={handleButton1Press}
            style={{ flexDirection: "row", alignItems: "center", gap: 15 }}
          >
            <Icon3 size={24} name="support-agent" />
            <Text style={{ color: "black", fontSize: 21, fontWeight: 600 }}>
              Support
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center", gap: 15 }}
          >
            <Icon2 size={24} name="logout" />
            <Text style={{ color: "black", fontSize: 21, fontWeight: 600 }}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Payment')}
            style={{ flexDirection: "row", alignItems: "center", gap: 15 }}
          >
            <Icon1 size={24} name="payment" />
            <Text style={{ color: "black", fontSize: 21, fontWeight: 600 }}>
              Payment
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DrawerHome;
