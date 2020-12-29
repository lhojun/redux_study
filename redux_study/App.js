import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import Count from './files/Count';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './files';

const App = () =>
{
    return (
    <Provider store={createStore(reducers)}>
      <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>React Native & Redux Example</Text>
        <Count/>
      </View>
    </Provider>
  );
};


export default App;
