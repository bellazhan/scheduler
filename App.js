import Course from "./components/Course";
import CourseDetailScreen from "./screens/CourseDetailScreen";
import CourseEditScreen from "./screens/CourseEditScreen";
import ScheduleScreen from "./screens/ScheduleScreen";
import UserContext from "./UserContext";
import "react-native-gesture-handler";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const App = () => {
  const [user, setUser] = useState({ role: "admin" });
  return (
    <UserContext.Provider value={user}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            component={ScheduleScreen}
            name="ScheduleScreen"
            options={{ title: "Schedule" }}
          />
          <Stack.Screen
            component={CourseDetailScreen}
            name="CourseDetailScreen"
            options={{ title: "Course Detail" }}
          />
          <Stack.Screen
            component={CourseEditScreen}
            name="CourseEditScreen"
            options={{ title: "Course Editor" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
};

export default App;
