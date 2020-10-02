import Course from "./components/Course";
import CourseDetailScreen from "./screens/CourseDetailScreen";
import CourseEditScreen from "./screens/CourseEditScreen";
import firebase from "./firebase";
import ScheduleScreen from "./screens/ScheduleScreen";
import SignInScreen from "./screens/SignInScreen";
import UserContext from "./UserContext";
import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const SignInButton = ({ navigation, user }) =>
  user && user.uid ? (
    <Button
      title="Logout"
      color="#448aff"
      onPress={() => firebase.auth().signOut()}
    />
  ) : (
    <Button
      title="SignIn"
      color="#448aff"
      onPress={() => navigation.navigate("SignInScreen")}
    />
  );
const App = () => {
  const [user, setUser] = useState();
  const [auth, setAuth] = useState();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((auth) => {
      setAuth(auth);
    });
  }, []);

  useEffect(() => {
    if (auth && auth.uid) {
      const db = firebase.database().ref("users").child(auth.uid);
      const handleData = (snap) => {
        setUser({ uid: auth.uid, ...snap.val() });
      };
      db.on("value", handleData, (error) => alert(error));
      return () => {
        db.off("value", handleData);
      };
    } else {
      setUser(null);
    }
  }, [auth]);

  return (
    <UserContext.Provider value={user}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            component={ScheduleScreen}
            name="ScheduleScreen"
            options={({ navigation }) => ({
              title: "Schedule",
              headerRight: () => (
                <SignInButton navigation={navigation} user={user} />
              ),
            })}
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
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
};

export default App;
