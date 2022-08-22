import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
const Screen = () => {
  const { userToken } = useSelector((state) => state.authReducer);
  const { cart } = useSelector((state) => state.productReducer);
  //var prod = cart.filter((post) => post.detail == "detail");
  var carts = [
    ...new Map(cart.map((item) => [JSON.stringify(item), item])).values(),
  ];
  return (
    <SafeAreaView style={{ marginTop: 40 }}>
      {userToken ? (
        <TouchableOpacity>
          <FlatList
            data={carts}
            horizontal={false}
            numColumns={2}
            ListEmptyComponent={<Text>Loading Data.................</Text>}
            showsHorizontalScrollIndicator={false}
            renderItem={(itemData) => (
              <TouchableOpacity onPress={() => {}}>
                <Text>{itemData.item.title}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(itemData, index) => index.toString()}
          ></FlatList>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity>
          <Text>Screen1</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};
export default Screen;
