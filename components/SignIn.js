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
        <Input onChangeText={emailInput} placeholder="Email" />
        <Text style={styles.none}>email wrong</Text>

        <Input
          onChangeText={passwordInput}
          secureTextEntry={true}
          placeholder="Password"
        />
      </View>
      <View style={styles.button}>
        <Button onPress={() => signIn(email, password)} title="Sign In" />
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

  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 8,
    width: "40%",
  },
  none: {
    display: "none",
  },
});
