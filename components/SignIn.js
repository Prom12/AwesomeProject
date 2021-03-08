import React, { useState } from "react";
import { View, Button, StyleSheet, Image } from "react-native";
import Input from "./RepeatedComponents/Input";
import { AuthContext } from "../AuthContext";

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = React.useContext(AuthContext);

  const emailInput = (enteredText) => {
    setEmail(enteredText);
  };
  const passwordInput = (enteredText) => {
    setPassword(enteredText);
  };

  return (
    <View style={styles.page}>
      <Image
        style={{ resizeMode: "contain" }}
        width="30"
        height="40"
        source={require("../assets/favicon.png")}
      />
      <View style={{ width: "80%" }}>
        <Input onChangeText={emailInput} placeholder="Email" />

        <Input
          onChangeText={passwordInput}
          secureTextEntry={true}
          placeholder="Password"
        />
      </View>
      <View style={styles.button}>
        <Button onPress={() => signIn()} title="Sign In" />
        <Button onPress={() => navigation.push("SignUp")} title="Sign Up" />
      </View>
    </View>
  );
};
export default SignIn;

const styles = StyleSheet.create({
  page: {
    alignItems: "center",
    paddingTop: "45%",
    margin: 1,
  },

  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 8,
    width: "40%",
  },
});
