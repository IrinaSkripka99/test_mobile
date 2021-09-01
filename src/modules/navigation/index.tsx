import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EventsListScreen from '../events/ui/pages/main';
import screenNames from './screen-names';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ShowEventScreen from '../events/ui/pages/show';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={screenNames.EVENTS} component={EventsListScreen} />
      <Stack.Screen
        name={screenNames.SHOW_EVENTS}
        component={ShowEventScreen}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
