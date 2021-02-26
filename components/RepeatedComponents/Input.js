import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = (props) => {
  return (
    <TextInput style={styles.input} placeholder={props.placeholder}></TextInput>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 4,
    borderBottomWidth: 2,
    borderBottomColor: "gray",
    marginBottom: 5,
    marginTop: 3,
  },
});

export default Input;
