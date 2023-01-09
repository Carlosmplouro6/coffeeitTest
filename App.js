import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import {MainScreen} from './src/screens/MainScreen';
import {SelectStyleScreen} from './src/screens/SelectStyleScreen';
import {SelectSizeScreen} from './src/screens/SelectSizeScreen';
import {SelectExtrasScreen} from './src/screens/SelectExtrasScreen';
import {OverviewScreen} from './src/screens/OverviewScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            contentStyle: {
              backgroundColor: '#FFFFFF',
            },
            headerShadowVisible: false,
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 16,
            },
          }}>
          <Stack.Screen
            name="Home"
            component={MainScreen}
            options={{title: 'Dark Roasted Beans'}}
          />
          <Stack.Screen
            name="styleScreen"
            component={SelectStyleScreen}
            options={{title: 'Brew with Lex', headerBackVisible: false}}
          />
          <Stack.Screen
            name="sizeScreen"
            component={SelectSizeScreen}
            options={{title: 'Brew with Lex'}}
          />
          <Stack.Screen
            name="extraScreen"
            component={SelectExtrasScreen}
            options={{title: 'Brew with Lex'}}
          />
          <Stack.Screen
            name="overviewScreen"
            component={OverviewScreen}
            options={{title: 'Brew with Lex'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
