import React, { useState } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ImageUploadComponent = () => {
  const [images, setImages] = useState([null, null, null, null]);

  const pickImage = async (index) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      let newImages = [...images];
      newImages[index] = result.assets[0].uri;
      setImages(newImages);
    }
  };

  const deleteImage = (index) => {
    let newImages = [...images];
    newImages[index] = null;
    setImages(newImages);
  };

  return (
    <View>
      {images.map((image, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => pickImage(index)}
          onLongPress={() => deleteImage(index)}
        >
          {image ? (
            <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
          ) : (
            <View style={{ width: 100, height: 100, backgroundColor: 'lightgray' }} />
          )}
        </TouchableOpacity>
      ))}
      {images.map((image, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => pickImage(index)}
          onLongPress={() => deleteImage(index)}
        >
          {image ? (
            <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
          ) : (
            <View style={{ width: 100, height: 100, backgroundColor: 'lightgray' }} />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ImageUploadComponent;
