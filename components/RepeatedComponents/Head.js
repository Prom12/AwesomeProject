import React from "react";
import { Text, StyleSheet, Dimensions } from "react-native";

function head({ name }) {
  return <Text style={styles.text}>{name}</Text>;
}

export default head;

const styles = StyleSheet.create({
  text: {
    width: Dimensions.get("screen").width,
    fontSize: 20,
    fontWeight: "normal",
    margin: 5,
    padding: 3,
    textAlign: "center",
  },
});
