import React from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import Info from "./RepeatedComponents/Info";
function SignUp({ navigation }) {
  return (
    <View style={styles.body}>
      <View style={{ height: "15%", alignContent: "center", width: "100%" }}>
        <Image
          style={{
            height: "100%",
            width: "30%",
            alignSelf: "center",
            borderRadius: 50,
          }}
          source={{
            uri: "https://i.pinimg.com/236x/c2/7c/27/c27c277903bc87b329a29005a1a371b2--funny-facebook-picture-collection.jpg",
          }}
        ></Image>
      </View>

      <View style={{ height: "50%" }}>
        <Info></Info>
      </View>
      <View style={styles.button}>
        <Button
          title="Save"
          color="blue"
          onPress={() => {
            //function to send data to database

            //close edit after sending data
            navigation.navigate("SignIn");
          }}
        ></Button>
      </View>
    </View>
  );
}

export default SignUp;

const styles = StyleSheet.create({
  body: {
    marginTop: 30,
    height: "100%",
  },
  button: {
    width: "100%",
    alignItems: "center",
    height: "20%",
  },
});
