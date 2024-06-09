import React, { useState } from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Icons1 from 'react-native-vector-icons/Feather';

const ImageContainer = ({ addImage }) => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.assets[0].uri);
      addImage(result.assets[0].uri); // Pass the image URI to the parent component

    }
  };

  const deleteImage = () => {
    setImage(null);
  };

  return (
    <TouchableOpacity
      onPress={pickImage}
      style={{
        height: 130,
        width: 130,
        backgroundColor: '#e7e7e7',
        borderRadius: 11,
        position: 'relative',
      }}
    >
      {image ? (
        <View style={{ flex: 1 }}>
          <Image source={{ uri: image }} style={{ flex: 1, borderRadius: 11 }} />
          <TouchableOpacity
            onPress={deleteImage}
            style={{ position: 'absolute', top: '50%', left: '50%', marginTop: -16, marginLeft: -16 }}
          >
            <Icons1 name="trash-2" size={24} color="#e7e7e7" />
          </TouchableOpacity>
        </View>
      ) : (
        <Icons1 style={{ position: 'absolute', top: '50%', left: '50%', marginTop: -16, marginLeft: -16 }} name="plus" size={32} color="#777777" />
      )}
    </TouchableOpacity>
  );
};

export default ImageContainer;