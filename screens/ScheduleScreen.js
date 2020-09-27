import CourseList from "../components/CourseList";
import CourseEditScreen from "./CourseEditScreen";
import UserContext from "../UserContext";
import firebase from "../firebase";
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

const Banner = ({ title }) => (
  <Text style={styles.bannerStyle}>{title || "[loading...]"}</Text>
);

const fixCourses = (json) => ({
  ...json,
  courses: Object.values(json.courses),
});

const ScheduleScreen = ({ navigation }) => {
  const user = useContext(UserContext);
  const [schedule, setSchedule] = useState({ title: "", courses: [] });
  const canEdit = user && user.role === "admin";

  useEffect(() => {
    const db = firebase.database().ref();
    const handleData = (snap) => {
      if (snap.val()) setSchedule(fixCourses(snap.val()));
    };
    db.on("value", handleData, (error) => alert(error));
    return () => {
      db.off("value", handleData);
    };
  }, []);

  const view = (course) => {
    navigation.navigate(canEdit ? "CourseEditScreen" : "CourseDetailScreen", {
      course,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Banner title={schedule.title} />
      <CourseList courses={schedule.courses} view={view} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bannerStyle: {
    color: "#888",
    fontSize: 32,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
});

export default ScheduleScreen;
