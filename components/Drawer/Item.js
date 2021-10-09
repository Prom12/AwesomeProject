import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Products } from "../../redux/actions/product";

export default function Item({ route, navigation }) {
  const dispatch = useDispatch();
  return (
    <View style={styles.body}>
      <Image
        style={styles.image}
        source={{
          uri: `${route.params.image}`,
        }}
      />
      <View style={styles.title}>
        <View></View>
        <View>
          <Text
            style={{
              fontSize: 25,
              color: "white",
              fontWeight: "bold",
              marginRight: 5,
              textAlign: "center",
            }}
          >
            {route.params.title}
          </Text>
          <Text
            style={{
              fontSize: 25,
              color: "white",
              fontWeight: "bold",
              margin: 5,
              textAlign: "right",
            }}
          >
            {route.params.amount}
          </Text>
        </View>
      </View>

      <View style={styles.bottomView}>
        <Text style={{ fontSize: 20, padding: 5 }}>Ingredients</Text>
        {/* <Text>{route.params.detail}</Text> */}
        <View style={styles.button}>
          <TouchableOpacity>
            <View style={styles.add}>
              <Text
                onPress={() => {
                  dispatch({ type: Products.CART, payload: route.params });
                  navigation.navigate("MainPage");
                }}
                style={{
                  color: "#10F1E1",
                  fontSize: 30,
                  textAlign: "center",
                }}
              >
                Add To Cart
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    height: Dimensions.get("screen").height,
    width: Dimensions.get("screen").width,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    position: "relative",
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    opacity: 0.8,
  },
  bottomView: {
    height: "18%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "white",
    opacity: 0.7,
    borderWidth: 1,
    bottom: 0,
    width: Dimensions.get("screen").width,
    position: "absolute",
  },
  button: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    alignSelf: "center",
    textAlign: "center",
    alignContent: "center",
    marginTop: 2,
    width: "90%",
  },
  add: {
    fontWeight: "bold",
    backgroundColor: "blue",
    borderRadius: 10,
    padding: 10,
  },
  title: {
    marginTop: "5%",
    flex: 1,
    justifyContent: "center",
    width: Dimensions.get("screen").width,
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: 0,
  },
});
