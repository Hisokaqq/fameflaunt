import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import StreamingScreen from './screens/StreamingScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const globalScreenOptions = {
  headerStyle: {
    backgroundColor: '#000',
  },
}


const Stack = createNativeStackNavigator();
export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'  screenOptions={globalScreenOptions}>
        <Stack.Screen name="Home" component={HomeScreen} 
          options={{ headerShown: false}}

        />
        <Stack.Screen name="Streaming" component={StreamingScreen} 
          // options={{presentation: "modal", headerShown: false}}
          options={{ headerShown: false}}
        />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
