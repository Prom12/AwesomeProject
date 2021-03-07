import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";
function Info(props) {
  const [profile, setProfile] = useState({
    name: "",
    userName: "",
    age: "",
    email: "",
    password: "",
  });
  return (
    <View style={styles.content}>
      <TextInput
        value={profile.name}
        style={styles.text}
        placeholder="Name : Akut3k Amos"
        onChangeText={(text) => setProfile({ ...profile, name: text })}
      ></TextInput>
      <TextInput
        value={profile.userName}
        style={styles.text}
        placeholder="User name : Amos"
        onChangeText={(text) => setProfile({ ...profile, userName: text })}
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
        placeholder="Email : amos@gmail.com"
        onChangeText={(text) => setProfile({ ...profile, email: text })}
      ></TextInput>
      <TextInput
        value={profile.password}
        style={styles.text}
        placeholder="Password : ***************"
        onChangeText={(text) => setProfile({ ...profile, password: text })}
      ></TextInput>
    </View>
  );
}
export default Info;

const styles = StyleSheet.create({
  image: {
    width: "30%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 40,
  },

  imageBody: {
    width: "100%",
    height: "30%",
    alignItems: "center",
    marginTop: 0,
    marginBottom: 5,
    padding: 4,
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
