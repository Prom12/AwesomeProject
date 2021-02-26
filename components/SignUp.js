import React from "react";
import { View,Button,Text, StyleSheet,Image, TouchableOpacity } from "react-native";
import Info from "./RepeatedComponents/Info";
function SignUp({ navigation }) {
  return (
    <View style={styles.body}>
        <View style={{height:'20%',alignContent:'center', width:'100%'}}>
            <Image style= {{height:'80%',width:'40%',alignSelf:'center',borderRadius:30,}} source={require('../assets/internal.jpg')}></Image>
        </View>

        <View style={{height:'50%'}}>
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
    height: '100%',
  },
  button: {
    width: "100%",
    alignItems: "center",
    height: "20%",
  },
});
