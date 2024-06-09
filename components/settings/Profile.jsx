import React from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Your content goes here */}
      <StatusBar
        backgroundColor="#ffffff" // Background color of the status bar
        barStyle="dark-content" // Text color of the status bar (dark or light)
        translucent={false} // Whether the status bar is translucent
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Background color for the whole screen
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
