// In App.js in a new project

import React from "react";
import Navigation from "./NavigationPage";
import { StyleSheet } from "react-native";

export default () => {
  return <Navigation style={styles.main} />;
};

const styles = StyleSheet.create({
  main: {
    fontFamily: "Cambria",
    fontWeight: "bold",
    fontSize: 1,
  },
});
