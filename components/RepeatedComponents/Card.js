import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Card(props) {
  const { image } = props;
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image}></Image>
      <View style={styles.textCard}>
        <Text style={styles.food}>{props.title}</Text>
        <Text style={styles.amount}>{props.amount}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#D3D3D3",
    height: 210,
    backgroundColor: "white",
    margin: 10,
    borderRadius: 7,
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  textCard: {
    padding: 3,
    height: 60,
  },
  food: {
    fontWeight: "500",
    fontSize: 20,
    textAlign: "left",
  },
  amount: {
    fontWeight: "500",
    fontSize: 15,
    textAlign: "left",
  },
});
