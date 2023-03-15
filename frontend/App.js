import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Profile from './screens/Profile';
import SingleGame from './screens/SingleGame';
import { useState } from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
  const [score, setScore] = useState(0);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SingleGame">
        <Stack.Screen name="Home" component={HomeScreen} 
        options={{
          headerShown:false
        }}
        />
        <Stack.Screen name="SingleGame" component={SingleGame}
        
         options={{
          headerShown:false
        }}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
