import axios from "../../constants/axios.js";
import React, { useState, useEffect } from "react";
import {
  StatusBar,
  View,
  Platform,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button,
  TextInput,
} from "react-native";

function Profile({ navigation }) {
  const [edit, setEdit] = useState(true);
  let ID = "60d8add9e49e43259871ef88";
  useEffect(() => {
    async function getProfile() {
      const data = await axios.get(`/profiles/${ID}`);
      setProfile({
        name: data.data.name,
        username: data.data.username,
        age: data.data.age,
        email: data.data.email,
        number: data.data.number,
        password: data.data.password,
        image: data.data.image,
      });
    }
    getProfile();
  }, [profile]);

  async function saveProfile() {
    const data = await axios.put(`/profiles/${ID}`, profile).then((dat) => {
      console.log(dat.data);
    });
  }

  const [profile, setProfile] = useState({});

  //added this

  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity
        style={{ borderWidth: 1, padding: 5, margin: 7, borderRadius: 5 }}
        onPress={Edit}
      >
        <Text>{edit ? "Edit" : "Save"}</Text>
      </TouchableOpacity>
    ),
  });

  //Edit function
  const Edit = () => {
    if (edit) {
      setEdit(!edit);
    } else {
      saveProfile();
      setEdit(!edit);
    }
  };

  return (
    //Entire Body
    <View style={styles.body}>
      <View style={styles.imageBody}>
        <Image
          style={styles.image}
          alt="alt"
          source={{ uri: `${profile.image}` }}
        />
      </View>
      {edit ? (
        <View style={styles.content}>
          <Text style={styles.text}>{profile.name}</Text>
          <Text style={styles.text}>{profile.username}</Text>
          <Text style={styles.text}>{profile.age}</Text>
          <Text style={styles.text}>{profile.email}</Text>
          <Text style={styles.text}>{profile.number}</Text>
        </View>
      ) : (
        <View
          style={{ flexDirection: "column", alignContent: "space-between" }}
        >
          <View style={styles.content}>
            <TextInput
              value={profile.name}
              style={styles.text}
              placeholder="Name"
              autoCapitalize="sentences"
              onChangeText={(text) => setProfile({ ...profile, name: text })}
            ></TextInput>
            <TextInput
              value={profile.username}
              style={styles.text}
              placeholder="User name"
              textContentType="username"
              onChangeText={(text) =>
                setProfile({ ...profile, username: text })
              }
            ></TextInput>
            <TextInput
              value={profile.age}
              style={styles.text}
              placeholder="Age"
              onChangeText={(text) => setProfile({ ...profile, age: text })}
            ></TextInput>
            <TextInput
              value={profile.email}
              style={styles.text}
              placeholder="Email"
              autoCompleteType="email"
              textContentType="emailAddress"
              onChangeText={(text) => setProfile({ ...profile, email: text })}
            ></TextInput>
            <TextInput
              value={profile.number}
              style={styles.text}
              placeholder="Phone number"
              keyboardType="numeric"
              onChangeText={(text) => setProfile({ ...profile, number: text })}
            ></TextInput>
            <TextInput
              value={profile.password}
              style={styles.text}
              secureTextEntry={true}
              placeholder="Password"
              textContentType="password"
              onChangeText={(text) =>
                setProfile({ ...profile, password: text })
              }
            ></TextInput>
          </View>
        </View>
      )}
    </View>
  );
}
export default Profile;

const styles = StyleSheet.create({
  image: {
    width: "30%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 50,
  },
  body: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    height: Dimensions.get("screen").height,
    height: Dimensions.get("screen").width,
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
  button: {
    marginTop: "5%",
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

  buttonInfo: {
    borderRadius: 20,
    backgroundColor: "white",
  },
  none: {
    display: "none",
  },
  block: {
    display: "block",
  },
});
