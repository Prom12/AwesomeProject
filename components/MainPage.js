import React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Text,
} from "react-native";
import Card from "./RepeatedComponents/Card";
import { AuthContext } from "../AuthContext";
import { categories } from "./../constants/categories";

function MainPage({ navigation }) {
  const { signOut } = React.useContext(AuthContext);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{ padding: 5, margin: 7, borderRadius: 5 }}
          onPress={() => signOut()}
        >
          <Text style={{ color: "red" }}>SignOut</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <View>
      <Text style={styles.text}>Categories</Text>
      <FlatList
        data={categories}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={(itemData) => (
          <TouchableOpacity
            key={itemData.item.key.toString()}
            onPress={() => {
              navigation.navigate("H", {
                id: itemData.item.key,
                image: itemData.item.image,
                amount: itemData.item.amount,
                detail: itemData.item.detail,
              });
            }}
          >
            <Card
              image={itemData.item.image}
              title={itemData.item.title}
              amount={itemData.item.amount}
              detail={itemData.item.detail}
            ></Card>
          </TouchableOpacity>
        )}
      ></FlatList>
    </View>
  );
}

export default MainPage;

const styles = StyleSheet.create({
  body: {
    backgroundColor: "gray",
    flex: 1,
    flexDirection: "row",
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
  },
  text: {
    width: Dimensions.get("screen").width,
    fontSize: 20,
    fontWeight: "normal",
    margin: 5,
    padding: 3,
  },
});
