import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const termMap = { F: 'Fall', W: 'Winter', S: 'Spring'};
const terms = Object.values(termMap);

const TermButton = ({isActive, setSelectedTerm, term}) => (
    <TouchableOpacity 
        onPress={() => setSelectedTerm(term)}
        style={styles[isActive ? 'termButtonActive' : 'termButton']}
    >
      <Text style={styles.termText}>{term}</Text>
    </TouchableOpacity>
  );
  
const TermSelector = ({selectedTerm, setSelectedTerm}) => (
    <View style={styles.termSelector}>
        {terms.map(term => (
            <TermButton 
                isActive={term === selectedTerm} 
                key={term} 
                setSelectedTerm={setSelectedTerm} 
                term={term}
            />
        ))}
    </View>
);

const termButtonBase = {
    alignItems: 'center',
    backgroundColor: '#4f9f64',
    borderRadius: 5,
    flex: 1,
    height: 40,
    justifyContent: 'center',
    margin: 10,
    maxWidth: 90,
    minWidth: 90,
    padding: 10,
};
  
const styles = StyleSheet.create({
    termButton: {
        ...termButtonBase,
        backgroundColor: '#4f9f64',
    },
    termButtonActive: {
        ...termButtonBase,
        backgroundColor: '#105f25',
    },
    termSelector: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 350,
    },
    termText: {
      color: '#fff',
      fontSize: 15,
    },
  });
  
  export default TermSelector;
  