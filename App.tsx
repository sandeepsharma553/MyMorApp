import React, { useEffect, useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, } from 'react-native';
import {
  Colors,
  Header,
} from 'react-native/Libraries/NewAppScreen';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Login';
import SignUp from './src/Signup';
const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
  const [login, setLogin] = useState(true);
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const safePadding = '5%';
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  return (
    <View style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        style={backgroundStyle}>
        <View style={{ paddingRight: safePadding }}>
        </View>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            paddingHorizontal: safePadding,
            paddingBottom: safePadding,
          }}>
          <Header />
          <NavigationContainer>
            <Stack.Navigator>

              <Stack.Screen
                name="Login"
                component={Login}
                options={{
                  headerShown: true
                }}
              />
              

            </Stack.Navigator>
          </NavigationContainer>

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
