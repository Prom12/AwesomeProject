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
  let ID = "60c8b2fff892811784201d97";
  useEffect(() => {
    async function getProfile() {
      const data = await axios.get(`/profiles/${ID}`);
      setProfile({
        name: data.data.name,
        username: data.data.username,
        age: data.data.age,
        email: data.data.email,
        password: data.data.password,
        image: data.data.image,
      });
    }
    getProfile();
  }, []);
  async function saveProfile() {
    const data = await axios.put(`/profiles/${ID}`, profile).then((dat) => {
      console.log(dat.data);
      setE(!e);
    });
  }
  const [profile, setProfile] = useState({
    name: "",
    username: "",
    age: "",
    email: "",
    password: "",
    image: "",
  });

  //added this
  React.useLayoutEffect(() => {
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
  }, [edit]);
  //Edit function
  const Edit = () => {
    if (edit) {
      console.log(profile);

      setEdit(!edit);
    } else {
      console.log(profile);
      saveProfile();
      console.log("profile");
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
              onChangeText={(text) => setProfile({ ...profile, name: text })}
            ></TextInput>
            <TextInput
              value={profile.username}
              style={styles.text}
              placeholder="User name"
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
              onChangeText={(text) => setProfile({ ...profile, email: text })}
            ></TextInput>
            <TextInput
              value={profile.password}
              style={styles.text}
              secureTextEntry={true}
              placeholder="Password"
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
});
