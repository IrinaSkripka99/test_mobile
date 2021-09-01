import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import RootNavigator from './modules/navigation';
import {navigationRef} from './modules/navigation/RootNavigation';
import store from './store/store'; // You can also use a regular ref with `React.useRef()`

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
