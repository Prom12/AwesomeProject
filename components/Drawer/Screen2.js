import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";

export default function Screen2({ route }) {
  return (
    <View style={styles.body}>
      <View style={styles.topView}>
        <Image
          style={styles.image}
          source={{
            uri: `${route.params.image}`,
          }}
        />
      </View>
      <View style={styles.bottomView}>
        <Text>{route.params.title}</Text>
        <Text>{route.params.amount}</Text>
        <Text>Quantity</Text>
        <View style={styles.detail}>
          <Text>{route.params.detail}</Text>
          <View style={styles.add}>
            <Text>+</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    backgroundColor: "white",
    height: Dimensions.get("screen").height,
    width: Dimensions.get("screen").width,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  topView: {
    marginTop: -40,
    height: "50%",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  bottomView: {
    height: "50%",
    paddingHorizontal: 10,
    borderRadius: 5,
    position: "relative",
  },
  detail: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    marginTop: 2,
  },
  add: {
    padding: 5,
    backgroundColor: "blue",
    borderRadius: 10,
    bottom: 0,
    right: 0,
    position: "absolute",
    maxHeight: 30,
    marginRight: 2,
    minWidth: 30,
  },
});
