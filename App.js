import { StyleSheet, Text, View } from 'react-native';
import Navigation from './components/Navigation';
import 'react-native-gesture-handler'
import Login from './components/login Scrrens/Login';
import Navtag from './components/products/Navtag'
import AddImage from './components/AddImage'
import Sample from './components/Sample'
import DrawerHome from './components/drawer/DrawerHome';
import Header from './components/Header'
import Header1 from './components/Header1';
import Sample2 from './components/sample2'
import Product from './components/products/Product';
import Sample3 from './components/Sample3'
import Sample4 from './components/Sample4'
import HomePage from './components/products/HomePage';
import Sample5 from './components/Sample5'
import DrawerNav from './components/drawer/DrawerNav'
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const isLoggedInValue = await AsyncStorage.getItem('isLoggedIn');
        if (isLoggedInValue !== null && isLoggedInValue === 'true') {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error('Error fetching data from AsyncStorage:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {isLoggedIn ? <Navtag /> : <Navigation />}
    </View>
  );
}
