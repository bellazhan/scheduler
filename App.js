import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CourseDetailScreen from './screens/CourseDetailScreen';
import ScheduleScreen from './screens/ScheduleScreen';
import Course from './components/Course';

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          component={ScheduleScreen}
          name="ScheduleScreen" 
          options={{title:'Schedule'}}
        />
        <Stack.Screen 
          component={CourseDetailScreen}
          name="CourseDetailScreen"
          options={{title:'Course Detail'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;