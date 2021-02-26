import React from "react";
import { View, FlatList, StyleSheet, TouchableOpacity,Dimensions,Text } from "react-native";
import Card from "./RepeatedComponents/Card";
import {AuthContext} from "../AuthContext";

const categories = [
  {key:1, image:require("../assets/internal.jpg"), title:"Food1", amount:"$230", detail:"detail"},
  {key:2, image:require("../assets/internal.jpg"), title:"Food2", amount:"$430", detail:"detail"},
  {key:3, image:require("../assets/internal.jpg"), title:"Food3", amount:"$240", detail:"detail"},
  {key:4, image:require("../assets/internal.jpg"), title:"Food4", amount:"$234", detail:"detail"},
  {key:5, image:require("../assets/internal.jpg"), title:"Food5", amount:"$530", detail:"detail"},
  {key:6, image:require("../assets/internal.jpg"), title:"Food6", amount:"$250", detail:"detail"},
  {key:7, image:require("../assets/internal.jpg"), title:"Food7", amount:"$235", detail:"detail"},
  {key:8, image:require("../assets/internal.jpg"), title:"Food8", amount:"$130", detail:"detail"},
  {key:9, image:require("../assets/internal.jpg"), title:"Food9", amount:"$210", detail:"detail"},
  {key:10, image:require("../assets/internal.jpg"), title:"Food10", amount:"$231", detail:"detail"},
]
function MainPage({ navigation }) {
  const {signOut} = React.useContext(AuthContext);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <TouchableOpacity style={{padding:5,margin:7,borderRadius:5,}} onPress={() =>signOut()}><Text style={{color:'red'}}>SignOut</Text></TouchableOpacity>,
    });
  }, [navigation]);
  return (
    <View>
      <FlatList data={categories} renderItem={itemData=>(
        <TouchableOpacity key={itemData.item.id} onPress={() => { navigation.navigate("H");}}> 
        <Card  
            image={itemData.item.image} 
            title={itemData.item.title} 
            amount={itemData.item.amount} 
            detail={itemData.item.detail}>
        </Card>
      </TouchableOpacity>
      )}>
      </FlatList>
    </View>
  );
}

export default MainPage;

const styles = StyleSheet.create({
  body: {
    backgroundColor: "gray",
    flex: 1,
    flexDirection: "row",
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
});
