import React, { useState } from "react";
import {
  View,
  Button,
  StyleSheet,
  Image,
  Text,
  Dimensions,
} from "react-native";
import Input from "./RepeatedComponents/Input";
import { AuthContext } from "../AuthContext";

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
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
        width="40"
        height="40"
        source={require("../assets/favicon.png")}
      />
      <View style={{ width: "80%" }}>
        {!email ? <Text style={styles.block}>Incorrect Credentials</Text> : ""}
        <Input onChangeText={emailInput} placeholder="Email" />
        <Input
          onChangeText={passwordInput}
          secure="true"
          placeholder="Password"
        />
      </View>
      <View style={styles.buttons}>
        <Button
          style={{ borderRadius: 15 }}
          onPress={() => signIn(email, password)}
          title="Sign In"
        />
        <Button onPress={() => navigation.push("SignUp")} title="Sign Up" />
      </View>
    </View>
  );
};
export default SignIn;

const styles = StyleSheet.create({
  page: {
    alignItems: "center",
    paddingTop: "50%",
    margin: 1,
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
  },

  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 8,
    width: "40%",
    borderRadius: 5,
  },
  block: {
    display: "block",
    backgroundColor: "red",
    color: "white",
    weight: "bold",
    textAlign: "center",
    borderRadius: 5,
    padding: 5,
  },
});
