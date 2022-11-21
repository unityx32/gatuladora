import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import Gatuladora from './views/Gatuladora';
import Equation from './views/Equation';
import { useEffect } from "react"
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

export default function App() {


  useEffect(() => {
    delay()
  }, [])

  const delay = async () => {
    await SplashScreen.preventAutoHideAsync()
    await new Promise(resolve => setTimeout(resolve, 1))
    await SplashScreen.hideAsync()
  }


  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen name="Gatuladora" component={Gatuladora} options={{ headerShown: false }} />
        <Stack.Screen name="Equações" component={Equation} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


