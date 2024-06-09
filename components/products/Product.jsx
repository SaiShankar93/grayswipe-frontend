import { ScrollView, View, Text, TouchableOpacity, SafeAreaView, Image, StatusBar, TextInput, Modal, Button } from 'react-native'
import React, { useState, useEffect } from 'react';
import Icons from '@expo/vector-icons/AntDesign'
import Ionicons from '@expo/vector-icons/Ionicons'
import Icon1 from '@expo/vector-icons/MaterialIcons'
import Icon2 from '@expo/vector-icons/Entypo'
import AddImage from '../AddImage'
import * as ImagePicker from 'expo-image-picker';
import Icons1 from '@expo/vector-icons/Feather'
import Sample4 from '../Sample4'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Product = ({ navigation }) => {
  const [firstModalVisible, setFirstModalVisible] = useState(false);
  const [secondModalVisible, setSecondModalVisible] = useState(false);
  const [thirdModalVisible, setThirdModalVisible] = useState(false);
  const [forthModalVisible, setForthModalVisible] = useState(false);

  const [styleInput, setStyleInput] = useState('');

  const openModal = () => setFirstModalVisible(true);
  const closeModal = () => setFirstModalVisible(false);

  const openSecondModal = () => setSecondModalVisible(true);
  const closeSecondModal = () => setSecondModalVisible(false);

  const openThirdModal = () => setThirdModalVisible(true);
  const closeThirdModal = () => setThirdModalVisible(false);

  const openForthModal = () => setForthModalVisible(true);
  const closeForthModal = () => setForthModalVisible(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [description, setDescription] = useState('');
  const [textInputList, setTextInputList] = useState([{ id: 1, colors: [], sizes: [], prices: [], minOrder: 0, artNo: 0 }]);
  const [colorInputList, setcolorInputList] = useState([{ id: 1, value: 'Red' }]);
  const [sizeInputList, setsizeInputList] = useState([{ id: 1, value: '26' }]);
  const [priceInputList, setpriceInputList] = useState([{ id: 1, value: '26 - 500' }]);
  const [minOrder, setMinOrder] = useState('');
  const [artNo, setArtNo] = useState('');
  const [image, setImage] = useState(null);
  const [showDeleteIcon, setShowDeleteIcon] = useState(false);
  const [productName, setProductName] = useState('');
  const [storeName, setStoreName] = useState('');
  const [images, setImages] = useState([]);

  const addImage = (uri) => {
    setImages((prevImages) => [...prevImages, uri]);
  };

  const handleChange = (text) => {
    setDescription(text);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const deleteImage = () => {
    setImage(null);
    setShowDeleteIcon(false);
  };

  const addNewTextInput = () => {
    const newId = textInputList.length + 1;
    setTextInputList([...textInputList, { id: newId, value: '' }]);
  };

  const removeTextInput = (idToRemove) => {
    const updatedList = textInputList.filter((textInput) => textInput.id !== idToRemove);
    setTextInputList(updatedList);
  };

  const addNewColorInput = () => {
    const newId = colorInputList.length + 1;
    setcolorInputList([...colorInputList, { id: newId, value: '' }]);
  };

  const removeColorInput = (idToRemove) => {
    const updatedList = colorInputList.filter((textInput) => textInput.id !== idToRemove);
    setcolorInputList(updatedList);
  };
  const handleColorChange = (id, newValue) => {
    setcolorInputList(colorInputList.map(item => item.id === id ? { ...item, value: newValue } : item));
  };
  const addNewSizeInput = () => {
    const newId = sizeInputList.length + 1;
    setsizeInputList([...sizeInputList, { id: newId, value: '' }]);
  };

  const removeSizeInput = (idToRemove) => {
    const updatedList = sizeInputList.filter((textInput) => textInput.id !== idToRemove);
    setsizeInputList(updatedList);
  };
  const handleSizeChange = (id, newValue) => {
    setsizeInputList(sizeInputList.map(item => item.id === id ? { ...item, value: newValue } : item));
  };
  const addNewPriceInput = () => {
    const newId = priceInputList.length + 1;
    setpriceInputList([...priceInputList, { id: newId, value: '' }]);
  };

  const removePriceInput = (idToRemove) => {
    const updatedList = priceInputList.filter((textInput) => textInput.id !== idToRemove);
    setpriceInputList(updatedList);
  };
  const handlePriceChange = (id, newValue) => {
    setpriceInputList(priceInputList.map(item => item.id === id ? { ...item, value: newValue } : item));
  };
  const handleInputChange = (id, text) => {
    const updatedList = textInputList.map((textInput) => {
      if (textInput.id === id) {
        return { ...textInput, value: text };
      }
      return textInput;
    });
    setTextInputList(updatedList);
  };
  const handleStyleSave = async() => {
    const updatedTextInputList = textInputList.map(textInput => {
      const colors = colorInputList.map(color => color.value);
      const sizes = sizeInputList.map(size => size.value);
      const prices = priceInputList.map(price => price.value);
      return {
        ...textInput,
        colors,
        sizes,
        prices,
        artNo: parseInt(artNo),
        minOrder: parseInt(minOrder),  // Ensure minOrder is a number
      };
    });
    setTextInputList(updatedTextInputList);
    console.log(textInputList)
    setModalVisible(false);
  };
  const handleSubmit = async () => {
    if(!storeName){
      alert("to add a product , please create a store first!");
      return ;
    }
    try {
      const storedStoreName = await AsyncStorage.getItem('storeName');
      setStoreName(storedStoreName);
      if (!productName || !description || textInputList.length === 0) {
        alert('Please fill in all required fields');
        return;
      }
      const styles = textInputList.map((textInput) => ({
        id: textInput.id,
        colors: textInput.colors,
        sizes: textInput.sizes,
        minOrder: textInput.minOrder,
        price: textInput.prices,
        artNo: textInput.artNo,
      }));
  
      const formData = new FormData();
      formData.append('productName', productName);
      formData.append('description', description);
      formData.append('storeName', storedStoreName);
      formData.append('styles', JSON.stringify(styles));

      images.forEach((imageUri, index) => {
        const uriParts = imageUri.split('/');
        const fileName = uriParts[uriParts.length - 1];
        const fileType = imageUri.substring(imageUri.lastIndexOf('.') + 1);
        formData.append('images', {
          uri: imageUri,
          name: fileName,
          type: `image/${fileType}`,
        });
      });
      const response = await axios.post('https://gs-backend-2jo2.onrender.com/api/product/newproduct', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 200) {
        alert('Product added successfully!');
        navigation.navigate('ListedProducts');
      } else {
        console.error('Error adding product:', response.data);
        alert('An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };
  useEffect(() => {
    console.log(textInputList)
    const getStoreName = async () => {
      const storedStoreName = await AsyncStorage.getItem('storeName');
      setStoreName(storedStoreName);
    };

    getStoreName();
  }, []);
  const colorString = colorInputList.map(item => item.value).join(', ');
  const sizeString = sizeInputList.map(item => item.value).join(', ');
  const priceString = priceInputList.map(item => item.value).join(', ');

  return (

    <ScrollView style={[{ backgroundColor: 'white' }]}>
      <View style={[{ height: '100%' }]}>
        <Modal
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={[{ backgroundColor: '#000000aa', flex: 1, }]}>
            <View style={[{ backgroundColor: 'white', margin: 40, height: 450, padding: 8, borderRadius: 15, marginTop: 170, gap: 10 }]}>
              <Text style={[{ paddingHorizontal: 10, paddingVertical: 5, fontSize: 15, fontWeight: 500 }]}>Add Item</Text>
              <View style={[{ paddingLeft: 10, marginBottom: 10, borderWidth: 1, borderRadius: 5, borderStyle: 'dashed', borderColor: '#9747FF', borderTopColor: 'white', padding: 17, gap: 20 }]}>
                <TextInput
                  style={[{ height: 40, width: 'auto', borderWidth: 0.8, fontSize: 10, padding: 10, backgroundColor: 'white', borderRadius: 5, fontSize: 12 }]}
                  onFocus={() => setSecondModalVisible(true)}
                  value={`[${colorString}]`}
                />
                <TextInput
                  style={[{ height: 40, width: 'auto', borderWidth: 0.8, fontSize: 10, padding: 10, backgroundColor: 'white', borderRadius: 5, fontSize: 12 }]}
                  value={minOrder}
                  placeholder='Minimum Order'
                  onChangeText={text => setMinOrder(text)}
                />
                <TextInput
                  style={[{ height: 40, width: 'auto', borderWidth: 0.8, fontSize: 10, padding: 10, backgroundColor: 'white', borderRadius: 5, fontSize: 12 }]}
                  placeholder='Sizes'
                  onFocus={() => setThirdModalVisible(true)}
                  value={`[${sizeString}]`}
                />
                <TextInput
                  style={[{ height: 40, width: 'auto', borderWidth: 0.8, fontSize: 10, padding: 10, backgroundColor: 'white', borderRadius: 5, fontSize: 12 }]}
                  value={artNo}
                  onChangeText={text => setArtNo(text)}
                  placeholder='Art No.'
                />
                <TextInput
                  style={[{ height: 40, width: 'auto', borderWidth: 0.8, fontSize: 10, padding: 10, backgroundColor: 'white', borderRadius: 5, fontSize: 12 }]}
                  placeholder='Prices'
                  onFocus={() => setForthModalVisible(true)}
                  value={`[${priceString}]`}
                />
              </View>
              <View style={[{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row' }]}>
                <TouchableOpacity style={[{ backgroundColor: "#00060C", width: 120, height: 43, borderRadius: 10, alignItems: 'center', justifyContent: 'space-between', display: 'flex', flexDirection: 'row', paddingHorizontal: 15 }]} onPress={handleStyleSave}>
                  <Text style={[{
                    color: "white", fontSize: 15
                    , fontFamily: 'poppins', fontWeight: 600
                  }]}>Save</Text>
                  <Icon1 name='check' size={26} color='white'></Icon1>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalVisible(false)} style={[{ backgroundColor: "#00060C", width: 120, height: 43, borderRadius: 10, alignItems: 'center', justifyContent: 'space-between', display: 'flex', flexDirection: 'row', paddingHorizontal: 15 }]}>
                  <Text style={[{
                    color: "white", fontSize: 15
                    , fontFamily: 'poppins', fontWeight: 600
                  }]}>Cancel</Text>
                  <Icon2 name='cross' size={26} color='white'></Icon2>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <Modal
          transparent={true}
          visible={secondModalVisible}
          onRequestClose={closeSecondModal}
        >
          <View style={[{ backgroundColor: '#000000aa', flex: 1, }]}>
            <View style={[{ backgroundColor: 'white', margin: 30, height: 450, padding: 8, borderRadius: 15, marginTop: 170, gap: 10 }]}>
              <Text style={[{ paddingHorizontal: 10, paddingVertical: 5, fontSize: 15, fontWeight: 500 }]}>Add Item</Text>
              {colorInputList.map((textInput, index) => (
                <View style={{ flexDirection: 'row', display: 'flex', gap: 15, alignItems: 'center', justifyContent: 'space-between', paddingVertical: 10 }}>
                  <View key={textInput.id} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 40, width: 250, borderWidth: 0.8, fontSize: 10, padding: 10, backgroundColor: 'white', borderRadius: 5, }}>
                    <TextInput
                      placeholder={`Color${textInput.id}`}
                      style={{ flex: 1 }}
                      value={textInput.value}
                      onChangeText={(newValue) => handleColorChange(textInput.id, newValue)}
                    />
                    <TouchableOpacity onPress={() => removeColorInput(textInput.id)}>
                      <Image source={require('../../assets/delete.png')} style={{ width: 30, height: 25, resizeMode: 'contain', marginRight: 10 }} />
                    </TouchableOpacity>
                  </View>
                  {index === colorInputList.length - 1 && (
                    <TouchableOpacity onPress={addNewColorInput}>
                      <Ionicons name='add-circle-outline' size={26} color='#20b038' />
                    </TouchableOpacity>
                  )}
                </View>
              ))}
              <View style={[{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row' }]}>
                <TouchableOpacity style={[{ backgroundColor: "#00060C", width: 120, height: 43, borderRadius: 10, alignItems: 'center', justifyContent: 'space-between', display: 'flex', flexDirection: 'row', paddingHorizontal: 15 }]}
                  onPress={closeSecondModal}
                >
                  <Text style={[{
                    color: "white", fontSize: 15
                    , fontFamily: 'poppins', fontWeight: 600
                  }]}>Save</Text>
                  <Icon1 name='check' size={26} color='white'></Icon1>

                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSecondModalVisible(false)} style={[{ backgroundColor: "#00060C", width: 120, height: 43, borderRadius: 10, alignItems: 'center', justifyContent: 'space-between', display: 'flex', flexDirection: 'row', paddingHorizontal: 15 }]}>
                  <Text style={[{
                    color: "white", fontSize: 15
                    , fontFamily: 'poppins', fontWeight: 600
                  }]}>Cancel</Text>
                  <Icon2 name='cross' size={26} color='white'></Icon2>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        {/* thirdmodal */}
        <Modal
          transparent={true}
          visible={thirdModalVisible}
          onRequestClose={closeThirdModal}
        >
          <View style={[{ backgroundColor: '#000000aa', flex: 1, }]}>
            <View style={[{ backgroundColor: 'white', margin: 30, height: 450, padding: 8, borderRadius: 15, marginTop: 170, gap: 10 }]}>
              <Text style={[{ paddingHorizontal: 10, paddingVertical: 5, fontSize: 15, fontWeight: 500 }]}>Add Item</Text>
              {sizeInputList.map((textInput, index) => (
                <View style={{ flexDirection: 'row', display: 'flex', gap: 15, alignItems: 'center', justifyContent: 'space-between', paddingVertical: 10 }}>
                  <View key={textInput.id} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 40, width: 250, borderWidth: 0.8, fontSize: 10, padding: 10, backgroundColor: 'white', borderRadius: 5, }}>
                    <TextInput
                      placeholder={`size ${textInput.id}`}
                      style={{ flex: 1 }}
                      value={textInput.value}
                      onChangeText={(newValue) => handleSizeChange(textInput.id, newValue)}
                    />
                    <TouchableOpacity onPress={() => removeSizeInput(textInput.id)}>
                      <Image source={require('../../assets/delete.png')} style={{ width: 30, height: 25, resizeMode: 'contain', marginRight: 10 }} />
                    </TouchableOpacity>
                  </View>
                  {index === sizeInputList.length - 1 && (
                    <TouchableOpacity onPress={addNewSizeInput}>
                      <Ionicons name='add-circle-outline' size={26} color='#20b038' />
                    </TouchableOpacity>
                  )}
                </View>
              ))}
              <View style={[{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row' }]}>
                <TouchableOpacity style={[{ backgroundColor: "#00060C", width: 120, height: 43, borderRadius: 10, alignItems: 'center', justifyContent: 'space-between', display: 'flex', flexDirection: 'row', paddingHorizontal: 15 }]} onPress={closeThirdModal}>
                  <Text style={[{
                    color: "white", fontSize: 15
                    , fontFamily: 'poppins', fontWeight: 600
                  }]}>Save</Text>
                  <Icon1 name='check' size={26} color='white'></Icon1>
                </TouchableOpacity>
                <TouchableOpacity onPress={closeThirdModal} style={[{ backgroundColor: "#00060C", width: 120, height: 43, borderRadius: 10, alignItems: 'center', justifyContent: 'space-between', display: 'flex', flexDirection: 'row', paddingHorizontal: 15 }]}>
                  <Text style={[{
                    color: "white", fontSize: 15
                    , fontFamily: 'poppins', fontWeight: 600
                  }]}>Cancel</Text>
                  <Icon2 name='cross' size={26} color='white'></Icon2>

                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        {/* forthmodal */}
        <Modal
          transparent={true}
          visible={forthModalVisible}
          onRequestClose={closeForthModal}
        >
          <View style={[{ backgroundColor: '#000000aa', flex: 1, }]}>
            <View style={[{ backgroundColor: 'white', margin: 30, height: 450, padding: 8, borderRadius: 15, marginTop: 170, gap: 10 }]}>
              <Text style={[{ paddingHorizontal: 10, paddingVertical: 5, fontSize: 15, fontWeight: 500 }]}>Add Item</Text>
              {priceInputList.map((textInput, index) => (
                <View style={{ flexDirection: 'row', display: 'flex', gap: 15, alignItems: 'center', justifyContent: 'space-between', paddingVertical: 10 }}>
                  <View key={textInput.id} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 40, width: 250, borderWidth: 0.8, fontSize: 10, padding: 10, backgroundColor: 'white', borderRadius: 5, }}>
                    <TextInput
                      placeholder={`Price ${textInput.id}`}
                      style={{ flex: 1 }}
                      value={textInput.value}
                      onChangeText={(newValue) => handlePriceChange(textInput.id, newValue)}
                    />
                    <TouchableOpacity onPress={() => removePriceInput(textInput.id)}>
                      <Image source={require('../../assets/delete.png')} style={{ width: 30, height: 25, resizeMode: 'contain', marginRight: 10 }} />
                    </TouchableOpacity>
                  </View>
                  {index === priceInputList.length - 1 && (
                    <TouchableOpacity onPress={addNewPriceInput}>
                      <Ionicons name='add-circle-outline' size={26} color='#20b038' />
                    </TouchableOpacity>
                  )}
                </View>
              ))}
              <View style={[{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row' }]}>
                <TouchableOpacity style={[{ backgroundColor: "#00060C", width: 120, height: 43, borderRadius: 10, alignItems: 'center', justifyContent: 'space-between', display: 'flex', flexDirection: 'row', paddingHorizontal: 15 }]} onPress={closeForthModal}>
                  <Text style={[{
                    color: "white", fontSize: 15
                    , fontFamily: 'poppins', fontWeight: 600
                  }]}>Save</Text>
                  <Icon1 name='check' size={26} color='white'></Icon1>

                </TouchableOpacity>
                <TouchableOpacity onPress={closeForthModal} style={[{ backgroundColor: "#00060C", width: 120, height: 43, borderRadius: 10, alignItems: 'center', justifyContent: 'space-between', display: 'flex', flexDirection: 'row', paddingHorizontal: 15 }]}>
                  <Text style={[{
                    color: "white", fontSize: 15
                    , fontFamily: 'poppins', fontWeight: 600
                  }]}>Cancel</Text>
                  <Icon2 name='cross' size={26} color='white'></Icon2>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <Text style={[{ fontSize: 12, fontWeight: 500, padding: 15, paddingLeft: 55, }]}>
          Add Images
        </Text>
        <View style={[{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }]}>
          <View style={[{ gap: 15, flexDirection: 'row' }]}>
            <View style={[{ gap: 15 }]} >
              <Sample4 addImage={addImage} />
              <Sample4 addImage={addImage} />
            </View>
            <View style={[{ gap: 15 }]} >
              <Sample4 addImage={addImage} />
              <Sample4 addImage={addImage} />
            </View>
          </View>
          <View style={[{ gap: 10, paddingVertical: 15 }]}>
            <View style={[{}]}>
              <TextInput
                style={[{ height: 40, width: 320, borderWidth: 0.8, fontSize: 10, padding: 10, backgroundColor: 'white', borderRadius: 5, }]}
                placeholder='Product Name'
                value={productName}
                onChangeText={setProductName}
              />
            </View>
            <View style={[{}]}>
              <TextInput
                style={[{ minHeight: 100, borderWidth: 0.8, padding: 10, borderRadius: 5, backgroundColor: 'white' }]}
                multiline={true}
                numberOfLines={6} // Adjust as needed
                placeholder="Enter description..."
                onChangeText={handleChange}
                value={description}
              />
            </View>
            <View style={[{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }]}>
              {textInputList.map((textInput, index) => (
                <View style={{ flexDirection: 'row', display: 'flex', gap: 15, alignItems: 'center', justifyContent: 'space-between', paddingVertical: 10 }}>
                  <View key={textInput.id} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 40, width: 250, borderWidth: 0.8, fontSize: 10, padding: 10, backgroundColor: 'white', borderRadius: 5, }}>
                    <TextInput
                      placeholder={`Style${textInput.id}`}
                      onFocus={() => setModalVisible(true)}
                      style={{ flex: 1 }}
                      value={textInput.minOrder ? `Style : [${textInput.colors}] : ${textInput.minOrder} Qtd: [${textInput.sizes}]` : ''}
                      />
                    <TouchableOpacity onPress={() => removeTextInput(textInput.id)}>
                      <Image source={require('../../assets/delete.png')} style={{ width: 30, height: 25, resizeMode: 'contain', marginRight: 10 }} />
                    </TouchableOpacity>
                  </View>
                  {/* {index === textInputList.length - 1 && (
                    <TouchableOpacity onPress={addNewTextInput}>
                      <Ionicons name='add-circle-outline' size={26} color='#20b038' />
                    </TouchableOpacity>
                  )} */}
                </View>
              ))}
            </View>
            <View style={[{ display: 'flex', alignItems: 'center', justifyContent: 'center' }]}>
              <TouchableOpacity onPress={handleSubmit} style={[{ backgroundColor: "#0b233c", width: 100, height: 43, borderRadius: 10, alignItems: 'center', justifyContent: 'space-between', display: 'flex', flexDirection: 'row', paddingHorizontal: 15 }]}>
                <Text style={[{
                  color: "white", fontSize: 15
                  , fontFamily: 'poppins', fontWeight: 600
                }]}>Save</Text>
                <Icon1 name='check' size={26} color='#ff8e00'></Icon1>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>

  )
}
export default Product