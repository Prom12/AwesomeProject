import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import axios from "../constants/axios.js";

function SignUp({ navigation }) {
  const [profile, setProfile] = useState({
    name: "",
    username: "",
    age: "",
    number: "",
    password: "",
    email: "",
  });
  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity
        style={{ borderWidth: 1, padding: 5, margin: 7, borderRadius: 5 }}
        onPress={Save}
      >
        <Text>Save</Text>
      </TouchableOpacity>
    ),
  });
  async function Save() {
    if (
      profile.name == null ||
      profile.username == null ||
      profile.email == null ||
      profile.age == null ||
      profile.password == null ||
      profile.number.length < 7
    ) {
      alert("Please, no field can be left empty");
    } else {
      await axios
        .post("/profiles", profile)
        .then(() => {
          alert("Saved");
          navigation.navigate("SignIn");
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  }
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
        <View style={styles.content}>
          <TextInput
            value={profile.name}
            style={styles.text}
            placeholder="Name : Akut3k Amos"
            onChangeText={(text) => setProfile({ ...profile, name: text })}
          ></TextInput>
          <TextInput
            value={profile.username}
            style={styles.text}
            textContentType="username"
            placeholder="User name : Amos"
            onChangeText={(text) => setProfile({ ...profile, username: text })}
          ></TextInput>
          <TextInput
            value={profile.age}
            style={styles.text}
            placeholder="Age : 15"
            onChangeText={(text) => setProfile({ ...profile, age: text })}
          ></TextInput>
          <TextInput
            value={profile.email}
            style={styles.text}
            textContentType="emailAddress"
            placeholder="Email : amos@gmail.com"
            onChangeText={(text) => setProfile({ ...profile, email: text })}
          ></TextInput>
          <TextInput
            value={profile.number}
            style={styles.text}
            textContentType="telephoneNumber"
            keyboardType="numeric"
            placeholder="Phone Number : 020xxxxxxx"
            onChangeText={(text) => setProfile({ ...profile, number: text })}
          ></TextInput>
          <TextInput
            value={profile.password}
            style={styles.text}
            secureTextEntry={true}
            placeholder="Password : ***************"
            onChangeText={(text) => setProfile({ ...profile, password: text })}
          ></TextInput>
        </View>
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
  content: {
    marginTop: "10%",
    width: "100%",
    alignItems: "center",
    height: "65%",
  },
  text: {
    width: "90%",
    fontSize: 20,
    borderBottomWidth: 1,
    padding: 10,
    borderBottomColor: "gray",
    margin: 5,
    backgroundColor: "#D3D3D3",
    borderRadius: 5,
  },
});
