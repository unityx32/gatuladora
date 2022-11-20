import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Gatuladora from './views/Gatuladora';
import Equation from './views/Equation';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Gatuladora" component={Gatuladora} options={{ headerShown: false }} />
        <Stack.Screen name="Equações" component={Equation} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


