import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Text,
  ScrollView,
} from "react-native";
import Head from "./RepeatedComponents/Head";
import Card from "./RepeatedComponents/Card";
import { AuthContext } from "../AuthContext";
import { categories } from "../constants/categories";
import axios from "../constants/axios";

function MainPage({ navigation }) {
  const { signOut } = React.useContext(AuthContext);
  const [info, setInfo] = useState([]);
  useEffect(() => {
    async function getData() {
      const data = await axios.get("/products");
      setInfo(data.data);
    }
    getData();
  });
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
    <View style={styles.body}>
      <ScrollView>
        <Head name="Categories"></Head>
        <FlatList
          data={info}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={(itemData) => (
            <TouchableOpacity
              keyExtractor={itemData.item.id}
              onPress={() => {
                navigation.navigate("H", {
                  id: itemData.item.key,
                  image: itemData.item.image,
                  title: itemData.item.title,
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

        <Head name="Favorites"></Head>
        <FlatList
          data={categories}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={(itemData) => (
            <TouchableOpacity
              keyExtractor={itemData.item.key.toString()}
              onPress={() => {
                navigation.navigate("H", {
                  id: itemData.item.key,
                  image: itemData.item.image,
                  title: itemData.item.title,
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

        <Head name="Something Else"></Head>
        <FlatList
          data={categories}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={(itemData) => (
            <TouchableOpacity
              keyExtractor={itemData.item.key.toString()}
              onPress={() => {
                navigation.navigate("H", {
                  id: itemData.item.key,
                  image: itemData.item.image,
                  title: itemData.item.title,
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
      </ScrollView>
    </View>
  );
}

export default MainPage;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
  },
});
