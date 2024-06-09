import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import Drawer from "react-native-drawer";
import DrawerNav from "../drawer/DrawerNav";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useFrameCallback } from 'react-native-reanimated';

const ProductDetails = ({ route, navigation }) => {
    const drawerRef = useRef(null);
    const { product } = route.params;

    const openDrawer = () => {
        drawerRef.current.open();
    };

    const closeDrawer = () => {
        drawerRef.current.close();
    };

    const [selectedColor, setSelectedColor] = useState(null); 
    const [selectedSize, setSelectedSize] = useState(null);

    const handleBuy = async () => {
        try {
            const userName = await AsyncStorage.getItem("userName");
            const { _id, storeName } = product;

            const res = await axios.post('https://gs-backend-2jo2.onrender.com/api/order/orderproduct', {
                _id,
                storeName,
                userName
            });

            if (res.status === 200) {
                alert('Product Ordered Successfully!');
                navigation.navigate('ListedProducts');
            } else if (res.status === 400) {
                alert("Product already ordered");
            } else {
                console.error('Error adding product:', res.data);
                alert('An error occurred. Please try again.');
            }
        } catch (error) {
            alert("Some error occurred, please try again later.");
            console.log(error.message);
        }
    };
    useEffect(() => {
        console.log(product)
    }, [])
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer
                ref={drawerRef}
                content={<DrawerNav closeDrawer={closeDrawer} />}
                tapToClose={true}
                onClose={() => console.log("Drawer closed!")}
                side="left"
            >
                <View style={{ flex: 1, backgroundColor: '#eaf0ff' }}>
                    <View
                        style={{
                            height: 90,
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
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        <View style={{ flex: 1, alignItems: 'center', padding: 20 }}>
                            {product.images.map((image, index) => (
                                <Image
                                    key={index}
                                    resizeMode='cover'
                                    source={{ uri: image }}
                                    style={{ width: '100%', height: 300, borderRadius: 20, marginBottom: 10 }}
                                />
                            ))}
                        </View>
                        <View style={{ flex: 1, paddingHorizontal: 35 }}>
                            <Text style={{ fontSize: 20, fontWeight: '700' }}>Brand Name</Text>
                            <View style={{ paddingBottom: 5 }}>
                                <Text style={{ fontSize: 16, fontWeight: '400' }}>{product.productName}</Text>
                                <Text style={{ fontSize: 16, fontWeight: '400' }}>{product.storeName}</Text>
                            </View>
                            <View style={{ paddingBottom: 5 }}>
                                <Text style={{ fontSize: 16, fontWeight: '400' }}>{product.description}</Text>
                                <Text style={{ fontSize: 16, fontWeight: '400' }}>Minimum Order: {product.styles?.[0]?.minOrder || 'N/A'}</Text>
                            </View>
                            {product.styles && product.styles.length > 0 && (
                                <View style={{ paddingBottom: 5 }}>
                                    <Text style={{ fontSize: 16, fontWeight: '400' }}>Colors:</Text>
                                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 5, padding: 5 }}>
                                        {product.styles[0].colors.map((color, index) => (
                                            <TouchableOpacity
                                                key={index}
                                                onPress={() => setSelectedColor(color)}
                                                style={{
                                                    backgroundColor: selectedColor === color ? '#ff8e00' : 'white',
                                                    height: 43,
                                                    borderRadius: 20,
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    borderWidth: 1,
                                                    borderColor: selectedColor === color ? '#0B233C' : 'black',
                                                    paddingHorizontal: 10
                                                }}
                                            >
                                                <Text style={{ color: selectedColor === color ? '#0B233C' : 'black', fontSize: 15 }}>{color}</Text>
                                            </TouchableOpacity>
                                        ))}
                                    </View>
                                </View>
                            )}
                            {product.styles && product.styles.length > 0 && (
                                <View style={{ paddingBottom: 5 }}>
                                    <Text style={{ fontSize: 16, fontWeight: '400' }}>Size - Prices:(in INR)</Text>
                                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 5, padding: 5 }}>
                                    {product.styles[0].price.map((sizePrice, index) => {
                                           const [size, price] = sizePrice.split('-');
                                            return (
                                                <TouchableOpacity
                                                    key={index}
                                                    onPress={() => setSelectedSize(size)}
                                                    style={{
                                                        backgroundColor: selectedSize === size ? '#ff8e00' : 'white',
                                                        height: 50,
                                                        width: 70,
                                                        borderRadius: 10,
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        borderWidth: 1,
                                                        borderColor: selectedSize === size ? '#0B233C' : 'black'
                                                    }}
                                                >
                                                    <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                                        <Text style={{ color: selectedSize === size ? '#0B233C' : 'black', fontSize: 15, fontWeight: '500' }}>{size}</Text>
                                                        <Text style={{ color: selectedSize === size ? '#0B233C' : 'black', fontSize: 12 }}>{price ? `INR${price}` : 'N/A'}</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            );
                                        })}
                                        </View>
                                </View>
                            )}
                            <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 10 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '80%' }}>
                                    <TouchableOpacity
                                        // onPress={() => navigation.navigate('')}
                                        style={{
                                            backgroundColor: '#0B233C',
                                            height: 43,
                                            width: 120,
                                            borderRadius: 10,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderWidth: 1,
                                            borderColor: 'black',
                                            marginHorizontal: 10
                                        }}
                                    >
                                        <Text style={{ color: 'white', fontSize: 15, fontWeight: '600', paddingHorizontal: 10 }}>Edit Details</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={handleBuy}
                                        style={{
                                            backgroundColor: '#0B233C',
                                            height: 43,
                                            width: 120,
                                            borderRadius: 10,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderWidth: 1,
                                            borderColor: 'black',
                                            marginHorizontal: 10
                                        }}
                                    >
                                        <Text style={{ color: 'white', fontSize: 15, fontWeight: '600', paddingHorizontal: 10 }}>Buy Now</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </Drawer>
        </GestureHandlerRootView>
    );
};

export default ProductDetails;
