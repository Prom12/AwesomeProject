import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
const Screen = () => {
  const { userToken } = useSelector((state) => state.authReducer);
  const { cart } = useSelector((state) => state.productReducer);
  //var prod = cart.filter((post) => post.detail == "detail");

  return (
    <View>
      {userToken ? (
        <TouchableOpacity>
          <FlatList
            data={cart}
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
    </View>
  );
};
export default Screen;
