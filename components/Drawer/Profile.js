import React, { useState, useContext } from "react";
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
  const [edit, setEdit] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
    userName: "",
    age: "",
    email: "",
    password: "",
  });

  //added this
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button onPress={() => setEdit(true)} title="Edit" />,
    });
  }, [navigation]);

  return (
    //Entire Body
    <View style={styles.body}>
      {/* <View style={styles.header}>
        <View style={{ width: "15%" }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("MainPage");
            }}
          >
            <View style={{ padding: "10%", margin: "5%" }}>
              <Text style={{ textAlign: "center" }}>GoBack</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "70%",
            alignContent: "center",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              paddingTop: "3%",
              textTransform: "capitalize",
              fontSize: 20,
              fontWeight: "900",
            }}
          >
            profile
          </Text>
        </View>
        <View
          style={{ width: "15%", alignItems: "center", alignSelf: "center" }}
        >
          <View
            style={{
              padding: "10%",
              margin: "5%",
              borderWidth: 2,
              borderRadius: 5,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setProfile(null);
              }}
            >
              <Text style={{ textAlign: "center" }}>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View> */}
      <View style={styles.imageBody}>
        <Image
          style={styles.image}
          source={require("../../assets/internal.jpg")}
        />
      </View>
      {!edit ? (
        <View style={styles.content}>
          <Text style={styles.text}>Name : Akut3k Amos</Text>
          <Text style={styles.text}>User name : Amos</Text>
          <Text style={styles.text}>Age : 15</Text>
          <Text style={styles.text}>Email : amos@gmail.com</Text>
          <Text style={styles.text}>Password : ***************</Text>
        </View>
      ) : (
        <View style={styles.content}>
          <TextInput
            style={styles.text}
            placeholder="Name : Akut3k Amos"
            onChangeText={(text) => setProfile({ ...profile, name: text })}
          ></TextInput>
          <TextInput
            style={styles.text}
            placeholder="User name : Amos"
          ></TextInput>
          <TextInput
            style={styles.text}
            placeholder="Age : 15"
            onChangeText={(text) => setProfile({ ...profile, age: text })}
          ></TextInput>
          <TextInput
            style={styles.text}
            placeholder="Email : amos@gmail.com"
            onChangeText={(text) => setProfile({ ...profile, email: text })}
          ></TextInput>
          <TextInput
            style={styles.text}
            placeholder="Password : ***************"
            onChangeText={(text) => setProfile({ ...profile, password: text })}
          ></TextInput>
          <View style={{ marginTop: 9, shadowOpacity: 1 }}>
            <Button
              title="Save"
              color="blue"
              onPress={() => {
                //function to send data to database

                //close edit after sending data
                setEdit(false);
              }}
            ></Button>
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
    borderRadius: 40,
  },
  body: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    height: Dimensions.get("screen").height,
    height: Dimensions.get("screen").width,
  },
  header: {
    shadowOpacity: 10,
    height: "15%",
    width: "100%",
    flexDirection: "row",
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "white",
  },
  imageBody: {
    width: "100%",
    height: "20%",
    alignItems: "center",
    marginTop: 10,
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

  buttonInfo: {
    borderRadius: 20,
    backgroundColor: "white",
  },
});
