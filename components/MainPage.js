import React, { useEffect } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Text,
} from "react-native";
import Head from "./RepeatedComponents/Head";
import Card from "./RepeatedComponents/Card";
import { AuthContext } from "../AuthContext";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../constants/getAxios";

function MainPage({ navigation }) {
  const { signOut } = React.useContext(AuthContext);
  const { products } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  const fetchProducts = () => dispatch(getProducts());
  useEffect(() => {
    fetchProducts();
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
      <Head name="Categories"></Head>
      <FlatList
        data={products}
        horizontal={false}
        numColumns={2}
        ListEmptyComponent={<Text>Loading Data.................</Text>}
        showsHorizontalScrollIndicator={false}
        renderItem={(itemData) => (
          <TouchableOpacity
            style={styles.card}
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
        keyExtractor={(itemData, index) => index.toString()}
      ></FlatList>
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
  card: {
    width: Dimensions.get("screen").width / 2,
  },
});
