import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Card = (props) => (
  <View style={styles.card}>
    <Image
      style={styles.image}
      source={{
        uri: `${props.image}`,
      }}
    ></Image>
    <View style={styles.textCard}>
      <Text style={styles.food}>{props.title}</Text>
    </View>
  </View>
);
export default Card;

const styles = StyleSheet.create({
  card: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#D3D3D3",
    height: "auto",
    backgroundColor: "white",
    margin: 10,
    borderRadius: 7,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 155,
    resizeMode: "cover",
  },
  textCard: {
    padding: 5,
  },
  food: {
    fontWeight: "500",
    fontSize: 20,
    textAlign: "center",
  },
});
