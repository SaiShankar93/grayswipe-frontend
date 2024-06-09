import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const OrderDetails = ({ route, navigation }) => {
  const { order } = route.params;

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  };

  return (
    <ScrollView style={{ backgroundColor: '#eaf0ff', paddingVertical: 10 }}>
      <View style={{ display: 'flex', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 10 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 10, marginTop: 50 }}>Product Image</Text>

      {order.images && order.images.length > 0 && ( 
          <View style={{ width: '100%', borderWidth: 0.8, borderRadius: 5, backgroundColor: 'white', padding: 10, marginTop: 10 }}>
            <Image source={{ uri: order.images[0] }} style={{ width: '100%', height: 200,paddingBottom:50, borderRadius: 10 }} />
          </View>
        )}

        <View style={{ width: '100%', borderWidth: 0.8, borderRadius: 5, backgroundColor: 'white', padding: 10 }}>
          <Text style={{ fontWeight: '500', fontSize: 18, marginBottom: 10 }}>Order Details</Text>
          <Text style={{ fontSize: 16, marginBottom: 5 }}>Store Name: {order.storeName}</Text>
          <Text style={{ fontSize: 16, marginBottom: 5 }}>Client Name: {order.user.userName}</Text>
          <Text style={{ fontSize: 16, marginBottom: 5 }}>Client Address: {order.user.address}</Text>
          <Text style={{ fontSize: 16, marginBottom: 5 }}>Product Name: {order.productName}</Text>
          <Text style={{ fontSize: 16, marginBottom: 5 }}>Description: {order.description}</Text>
          <Text style={{ fontSize: 16, marginBottom: 5 }}>Order Date: {formatDate(order.orderDate)}</Text>
          <Text style={{ fontSize: 16, marginBottom: 5 }}>Total Order Value: {order.value}</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ backgroundColor: '#0B233C', height: 43, borderRadius: 10, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 10 }}>
            <Text style={{ color: 'white', fontSize: 15, fontWeight: '600' }}>Back</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
};

export default OrderDetails;
