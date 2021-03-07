import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { categories } from "../../constants/categories";

export default function Screen2({ route }) {
  let id = JSON.stringify(route.params.id);
  let cat = id; //categories[0].key);

  return (
    <View>
      <TouchableOpacity>
        {id === cat ? <Text>{route.params.id}</Text> : cat}
        <Text>{route.params.id}</Text>
        <Text>{route.params.image}</Text>
        <Text>{route.params.amount}</Text>
        <Text>{route.params.detail}</Text>
      </TouchableOpacity>
    </View>
  );
}
