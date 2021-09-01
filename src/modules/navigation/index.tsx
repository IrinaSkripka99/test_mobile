import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import EventsListScreen from '../public-events/ui/pages/main';
import ShowEventScreen from '../public-events/ui/pages/show';
import screenNames from './screen-names';

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
