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
  TextInput,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

function Profile({ navigation }) {
  const [edit, setEdit] = useState(true);
  const [image, setImage] = useState(null);
  const [profile, setProfile] = useState({});
  let ID = "60d8add9e49e43259871ef88";

  //Loading Data on Load
  useEffect(() => {
    (async () => {
      await axios
        .get(`/profiles/${ID}`)
        .then((data) => {
          setProfile(data.data);
        })
        .catch((err) => alert(err.message));
    })();
  }, []);

  //Asking for camera permissions
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, you need to accept camera permissions");
        }
      }
    })();
  }, []);

  //Function to move from Edit to Save
  async function saveProfile() {
    await axios
      // url
      .put(`/profiles/${ID}`, profile)
      .then((dat) => {
        setProfile(dat.data);
        alert("Saved");
        setEdit(!edit);
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  // Image Selection Function
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  //Top section of navBar Edit and Save
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
    }
  };

  return (
    //Entire Body
    <View style={styles.body}>
      {edit ? (
        <>
          {/* Normal Section  */}
          <View style={styles.imageBody}>
            <Image
              style={styles.image}
              alt="alt"
              source={{ uri: `${profile.image}` }}
            />
          </View>
          <View style={styles.content}>
            <Text style={styles.text}>{profile.name}</Text>
            <Text style={styles.text}>{profile.username}</Text>
            <Text style={styles.text}>{profile.age}</Text>
            <Text style={styles.text}>{profile.email}</Text>
            <Text style={styles.text}>{profile.number}</Text>
          </View>
        </>
      ) : (
        <>
          {/* Edit Section */}
          <TouchableOpacity style={styles.imageBody} onPress={pickImage}>
            {image && (
              <Image style={styles.image} alt="alt" source={{ uri: image }} />
            )}
          </TouchableOpacity>
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
                onChangeText={(text) =>
                  setProfile({ ...profile, number: text })
                }
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
        </>
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
});
