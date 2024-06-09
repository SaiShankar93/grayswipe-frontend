import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import Icon from "@expo/vector-icons/Fontisto";
import Swiper from "react-native-swiper";
import Icon1 from "react-native-vector-icons/MaterialIcons";
import Drawer from "react-native-drawer";
import DrawerNav from "../drawer/DrawerNav";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";
import axios from 'axios';

const ListedProducts = ({ navigation }) => {
  const drawerRef = useRef(null);
  const [products, setProducts] = useState([]);

  const openDrawer = () => {
    drawerRef.current.open();
  };

  const closeDrawer = () => {
    drawerRef.current.close();
  };
  const images = [
    { path: require("../../assets/img1.jpg"), text: "Image 1" },
    { path: require("../../assets/img1.jpg"), text: "Image 2" },
    // Add more images as needed
  ];

  const renderImage = (image, index) => (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}
      key={index}
    >
      <Image
        source={image.path}
        style={{ width: "100%", resizeMode: "cover" }}
      />
      <Text
        style={{
          position: "absolute",
          bottom: 20,
          left: 20,
          color: "#fff",
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        {image.text}
      </Text> 
    </View>
  );

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://gs-backend-2jo2.onrender.com/api/product/all');
        setProducts(response.data.allProducts);
        console.log(products)

      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        ref={drawerRef}
        content={<DrawerNav closeDrawer={closeDrawer} />}
        tapToClose={true}
        onClose={() => console.log("Drawer closed!")}
        side="left"
      >
        <View
          style={{
            height: 100,
            backgroundColor: "#eaf0ff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            paddingLeft: 35,
            paddingRight: 35,
          }}
        >
          <TouchableOpacity onPress={openDrawer}>
            <Image
              source={require("../../assets/settings.png")}
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: "500" }}>Grayswipe</Text>
          <Image
            source={require("../../assets/notification.png")}
            style={{ width: 30, height: 30 }}
          />
        </View>
        <View style={[{ backgroundColor: "#eaf0ff", height: "100%" }]}>
          <View
            style={[
              {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "60%",
                gap: 30,
                paddingHorizontal: 20,
                paddingVertical: 1,
              },
            ]}
          >
            <View
              style={[
                {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  height: 50,
                  width: "100%",
                  borderWidth: 0.8,
                  fontWeight: 500,
                  fontSize: 12,
                  paddingHorizontal: 10,
                  backgroundColor: "white",
                  borderRadius: 5,
                  fontSize: 12,
                },
              ]}
            >
              <TextInput
                style={[{}]}
                placeholder="Search Here"
                placeholderTextColor="#0B233C"
              />
              <Icon
                name="search"
                size={17}
                color="white"
                style={[
                  {
                    backgroundColor: "#0B233C",
                    display: "flex",
                    padding: 12,
                    borderRadius: 5,
                  },
                ]}
              ></Icon>
            </View>
            <View style={{ flex: 1 }}>
              <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                {products && products.map((product, index) => (
                  <View key={index} style={{ flex: 1 }}>
                    <View style={{ height: 250 }}>
                      <Swiper
                        style={{ borderRadius: 20 }}
                        loop={false}
                        showsButtons={true}
                        showsPagination={false}
                        nextButton={<Icon1 name="arrow-forward-ios" size={24} />}
                        prevButton={<Icon1 name="arrow-back-ios" size={24} />}
                      >
                        {product.images.map((i) => (
                          <View key={i}>
                            <Image
                              source={{ uri: product.images[0]}}
                              style={{ width: "100%", height: "100%", resizeMode: "cover", borderRadius: 20 }}
                            />
                          </View>
                        ))}
                      </Swiper> 
                    </View>
                    <View
                      style={{
                        backgroundColor: "#fff",
                        padding: 15,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                      }}
                    > 
                      <View style={{ backgroundColor: "#fff", alignItems: "center" }}>
                        <TouchableOpacity
                          onPress={() => navigation.navigate("ProductDetails", { product })}
                        >
                          <Text
                            style={{ color: "#000", fontSize: 15, fontWeight: 600 }}
                          >
                            See Details
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
        </View>
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default ListedProducts;
