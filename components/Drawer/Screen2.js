import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { categories } from "../../constants/categories";

export default function Screen2({ route }) {
  let id = JSON.stringify(route.params.id);
  let cat = categories[0].key; // something is wrong here but code is running

  return (
    <View>
      <TouchableOpacity>
        {id === cat ? (
          <Text>{route.params.id}</Text>
        ) : (
          <Text>{cat} adfdfsdfsd</Text>
        )}
        <Text>{route.params.id}</Text>
        <Image
          width="40%"
          height="20%"
          source={{ uri: `${route.params.image}` }}
        ></Image>
        <Text>{route.params.title}</Text>
        <Text>{route.params.amount}</Text>
        <Text>{route.params.detail}</Text>
      </TouchableOpacity>
    </View>
  );
}
