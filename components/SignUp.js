import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function SignUp({ navigation }) {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SignIn");
        }}
      >
        <Text>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SignUp;

const styles = StyleSheet.create({
  body: {
    marginTop: 30,
  },
});
