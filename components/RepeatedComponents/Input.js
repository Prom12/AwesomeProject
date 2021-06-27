import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = (props) => {
  return (
    <TextInput
      onChangeText={props.onChangeText}
      style={styles.input}
      secureTextEntry={props.secure}
      placeholder={props.placeholder}
    ></TextInput>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 4,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 5,
    marginTop: 3,
    borderRadius: 5,
  },
});

export default Input;
