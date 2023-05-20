import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

const Input = props => {
  return (
    <View style={styles.textContainer}>
      <TextInput style={styles.text} autoCorrect={false} {...props} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  textContainer: {
    marginVertical: 5,
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 10,
    paddingLeft: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 2,
    borderColor: '#f5a623',
  },
  text: {
    color: 'black',
  },
});
