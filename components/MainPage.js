import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Text,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Head from "./RepeatedComponents/Head";
import Card from "./RepeatedComponents/Card";
import { AuthContext } from "../AuthContext";
//import { categories } from "../constants/categories";
import axios from "../constants/axios";

function MainPage({ navigation }) {
  const { signOut } = React.useContext(AuthContext);
  const [info, setInfo] = useState();
  useEffect(() => {
    async function getData() {
      await axios
        .get("/products")
        .then((data) => setInfo(data.data))
        .catch((err) => alert(err.message));
    }
    getData();
  }, []);
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
          horizontal={false}
          numColumns={2}
          ListEmptyComponent={<Text>Loading Data.................</Text>}
          showsHorizontalScrollIndicator={false}
          renderItem={(itemData) => (
            <TouchableOpacity
              keyExtractor={(item) => item.item.key.toString()}
              onPress={() => {
                navigation.navigate("Item", {
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
    justifyContent: "center",
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
  },
});
