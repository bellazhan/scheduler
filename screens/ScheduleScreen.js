import CourseList from "../components/CourseList";
import CourseEditScreen from "./CourseEditScreen";
import UserContext from "../UserContext";
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

const Banner = ({ title }) => (
  <Text style={styles.bannerStyle}>{title || "[loading...]"}</Text>
);

const ScheduleScreen = ({ navigation }) => {
  const user = useContext(UserContext);
  const [schedule, setSchedule] = useState({ title: "", courses: [] });
  const canEdit = user && user.role === "admin";

  const view = (course) => {
    navigation.navigate(canEdit ? "CourseEditScreen" : "CourseDetailScreen", {
      course,
    });
  };
  const url = "https://courses.cs.northwestern.edu/394/data/cs-courses.php";

  useEffect(() => {
    const fetchSchedule = async () => {
      const response = await fetch(url);
      if (!response.ok) throw response;
      const json = await response.json();
      setSchedule(json);
    };
    fetchSchedule();
  }, []);

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