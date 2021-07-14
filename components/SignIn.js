import React, { useState } from "react";
import { View, StyleSheet, Image, Text, Dimensions } from "react-native";
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
      <View style={{ width: "90%" }}>
        {!email ? (
          <Text style={styles.block}>Incorrect Credentials</Text>
        ) : (
          <Text></Text>
        )}
        <Input onChangeText={emailInput} placeholder="Email" />
        <Input onChangeText={passwordInput} secure placeholder="Password" />
      </View>
      <View style={styles.buttons}>
        <Text
          style={{
            borderRadius: 5,
            color: "#1A6761",
            padding: 10,
            borderWidth: 1,
            fontSize: 15,
            borderColor: "gray",
            backgroundColor: "white",
          }}
          onPress={() => signIn(email, password)}
        >
          Sign In
        </Text>
      </View>
      <Text
        onPress={() => navigation.push("SignUp")}
        style={{ color: "gray", fontSize: 15 }}
      >
        Already registered? SignUp
      </Text>
    </View>
  );
};
export default SignIn;

const styles = StyleSheet.create({
  page: {
    fontFamily: "Cambria",
    alignItems: "center",
    paddingTop: "50%",
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
  },

  buttons: {
    flexDirection: "row",
    margin: 8,
    width: "40%",
    borderRadius: 5,
    justifyContent: "center",
  },
  block: {
    display: "flex",
    backgroundColor: "red",
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    borderRadius: 5,
    padding: 5,
  },
});
