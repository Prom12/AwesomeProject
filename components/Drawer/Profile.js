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
  Modal,
  TouchableHighlight,
  Button,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

function Profile({ navigation }) {
  const [edit, setEdit] = useState(true);
  const [image, setImage] = useState(null);
  const [profile, setProfile] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
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
        setModalVisible(!modalVisible);
      })
      .catch((err) => {
        alert(err.message);
        setEdit(!edit);
        setModalVisible(!modalVisible);
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
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{ borderWidth: 1, padding: 5, margin: 7, borderRadius: 5 }}
          onPress={Edit}
          className={styles.none}
        >
          <Text>{edit ? "Edit" : "Save"}</Text>
        </TouchableOpacity>
      ),
    });
  });

  //Edit function
  const Edit = () => {
    if (edit) {
      setEdit(!edit);
      setModalVisible(!modalVisible);
    }
  };

  return (
    //Entire Body
    <View style={styles.body}>
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
      {/* Edit Section */}
      <View>
        <Modal animationType="fade" transparent={true} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity style={styles.imageBody} onPress={pickImage}>
                {image && (
                  <Image
                    style={styles.image}
                    alt="alt"
                    source={{ uri: image }}
                  />
                )}
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: "column",
                  alignContent: "space-between",
                }}
              >
                <View>
                  <TextInput
                    value={profile.name}
                    style={styles.TextInput}
                    placeholder="Name"
                    autoCapitalize="sentences"
                    onChangeText={(text) =>
                      setProfile({ ...profile, name: text })
                    }
                  ></TextInput>
                  <TextInput
                    value={profile.username}
                    style={styles.TextInput}
                    placeholder="User name"
                    textContentType="username"
                    onChangeText={(text) =>
                      setProfile({ ...profile, username: text })
                    }
                  ></TextInput>
                  <TextInput
                    value={profile.age}
                    style={styles.TextInput}
                    placeholder="Age"
                    onChangeText={(text) =>
                      setProfile({ ...profile, age: text })
                    }
                  ></TextInput>
                  <TextInput
                    value={profile.email}
                    style={styles.TextInput}
                    placeholder="Email"
                    autoCompleteType="email"
                    textContentType="emailAddress"
                    onChangeText={(text) =>
                      setProfile({ ...profile, email: text })
                    }
                  ></TextInput>
                  <TextInput
                    value={profile.number}
                    style={styles.TextInput}
                    placeholder="Phone number"
                    keyboardType="numeric"
                    onChangeText={(text) =>
                      setProfile({ ...profile, number: text })
                    }
                  ></TextInput>
                  <TextInput
                    value={profile.password}
                    style={styles.TextInput}
                    secureTextEntry={true}
                    placeholder="Password"
                    textContentType="password"
                    onChangeText={(text) =>
                      setProfile({ ...profile, password: text })
                    }
                  ></TextInput>
                  <Button onPress={() => saveProfile()} title="Save"></Button>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
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

  centeredView: {
    flex: 1,
    justifyContent: "center",
    margin: Dimensions.get("screen").width / 10,
  },
  modalView: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 5,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  TextInput: {
    width: "100%",
    fontSize: 20,
    padding: 10,
    borderBottomColor: "gray",
    marginVertical: 5,
    backgroundColor: "#D3D3D3",
    borderRadius: 5,
  },
});
