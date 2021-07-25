// In App.js in a new project

import React from "react";
import Navigation from "./NavigationPage";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { StyleSheet } from "react-native";

export default () => {
  return (
    <Provider store={store}>
      <Navigation style={styles.main} />
    </Provider>
  );
};

const styles = StyleSheet.create({
  main: {
    fontFamily: "Cambria",
    fontWeight: "bold",
    fontSize: 1,
  },
});
