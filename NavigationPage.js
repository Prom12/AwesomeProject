// In App.js in a new project

import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import MainPage from "./components/MainPage";

import Profile from "./components/Drawer/Profile";
import Item from "./components/Drawer/Item";
import Screen3 from "./components/Drawer/Screen3";

import { AuthContext } from "./AuthContext";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const DrawerStack2 = createStackNavigator();
const DrawerStack2Screen = () => (
  <DrawerStack2.Navigator>
    <DrawerStack2.Screen
      name="MainPage"
      component={MainPage}
      options={{
        headerShown: true,
        title: "",
        textAlign: "center",
      }}
    />
    <DrawerStack2.Screen
      name="Item"
      options={{
        headerShown: false,
      }}
      component={Item}
    />
  </DrawerStack2.Navigator>
);

const nav = () => {
  const [userToken, setUserToken] = useState(null);

  const authMemo = React.useMemo(() => {
    return {
      signIn: (email, password) => {
        if (email == null && password == null) {
          setUserToken("id");
        } else {
          console.log("email and password not valid");
        }
      },
      signUp: () => {
        setUserToken("id");
      },
      signOut: () => {
        setUserToken(null);
      },
    };
  }, []);

  return (
    <NavigationContainer>
      <AuthContext.Provider value={authMemo}>
        {userToken ? (
          <Drawer.Navigator initialRouteName="Main">
            <Drawer.Screen
              name="Profile"
              component={Profile}
              options={{
                headerShown: true,
              }}
            />
            <Drawer.Screen name="Main" component={DrawerStack2Screen} />
            <Drawer.Screen
              name="Something"
              component={Screen3}
              options={{ headerShown: true }}
            />
          </Drawer.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              name="SignIn"
              options={{ headerShown: false }}
              component={SignIn}
            />
            <Stack.Screen name="SignUp" component={SignUp} />
          </Stack.Navigator>
        )}
      </AuthContext.Provider>
    </NavigationContainer>
  );
};
export default nav;
