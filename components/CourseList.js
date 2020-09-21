import Course from './Course';
import TermSelector from './TermSelector';
import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

const termMap = { F: 'Fall', W: 'Winter', S: 'Spring'};

const getCourseTerm = course => (
	termMap[course.id.charAt(0)]
);

const CourseList = ({courses}) => {
	const [selectedTerm, setSelectedterm] = useState('Fall');
	const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));

	return(
		<View>
			<TermSelector selectedTerm={selectedTerm} setSelectedTerm={setSelectedterm}/>
			<ScrollView>
				<View style={styles.courseList}>
					{termCourses.map(course => <Course key={course.id} course={course} />)}
				</View>
			</ScrollView>
		</View>
	)
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