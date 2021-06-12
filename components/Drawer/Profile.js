import React, { useState } from "react";
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
  const [profile, setProfile] = useState({
    name: "Prom Alo",
    userName: "prom",
    age: "12",
    email: "prom@gmail.com",
    password: "12345",
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
      setEdit(!edit);
    } else {
      setEdit(!edit);
    }
  };

  return (
    //Entire Body
    <View style={styles.body}>
      <View style={styles.imageBody}>
        <Image
          style={styles.image}
          source={{
            uri: "https://images.squarespace-cdn.com/content/v1/54b7b93ce4b0a3e130d5d232/1519987020970-8IQ7F6Z61LLBCX85A65S/ke17ZwdGBToddI8pDm48kGfiFqkITS6axXxhYYUCnlRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxQ1ibo-zdhORxWnJtmNCajDe36aQmu-4Z4SFOss0oowgxUaachD66r8Ra2gwuBSqM/icon.png?format=1000w",
          }}
        />
      </View>
      {edit ? (
        <View style={styles.content}>
          <Text style={styles.text}>{profile.name}</Text>
          <Text style={styles.text}>{profile.userName}</Text>
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
              value={profile.userName}
              style={styles.text}
              placeholder="User name"
              onChangeText={(text) =>
                setProfile({ ...profile, userName: text })
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
