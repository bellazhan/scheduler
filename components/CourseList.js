import CourseSelector from './CourseSelector';
import TermSelector from './TermSelector';
import React, {useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';

const termMap = { F: 'Fall', W: 'Winter', S: 'Spring'};

const getCourseTerm = course => (
	termMap[course.id.charAt(0)]
);

const CourseList = ({courses}) => {
	const [selectedTerm, setSelectedTerm] = useState('Fall');
	const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));

	return (
    <ScrollView>
      <TermSelector selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm} />
      <CourseSelector courses={termCourses} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
	courseList: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
})

export default CourseList;