import SplashScreen from 'react-native-splash-screen'
import React, { useEffect } from 'react';
import { View, Text } from 'react-native'

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  return (
    <View></View>
  );
}

export default App