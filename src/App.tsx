import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

//Navigation
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

//screens
import Login from './screens/Login';

export type RootStackParamList = {
  Login: undefined;
  Details: { productId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.myCustomSafeArea}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen
            name='Login'
            component={Login}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  myCustomSafeArea: {
    flex: 1,
    backgroundColor: 'lightgray',
    // Add any other custom styles here
  },
});

export default App;
