// In App.js in a new project

import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import MainPage from "./components/FirstPage";

import Profile from "./components/Drawer/Profile";
import Screen2 from "./components/Drawer/Screen2";
import Screen3 from "./components/Drawer/Screen3";

import { AuthContext } from "./AuthContext";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default nav = () => {
  const [userToken, setUserToken] = useState(null);

  const authMemo = React.useMemo(() => {
    return {
      signIn: () => {
        setUserToken("id");
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
          <Drawer.Navigator initialRouteName="MainPage">
            <Drawer.Screen
              name="Profile"
              component={Profile}
              options={{
                headerShown: "true",
              }}
            />
            <Drawer.Screen
              name="MainPage"
              component={MainPage}
              options={{
                headerShown: "true",
                title: "Food Categories",
                textAlign: "center",
              }}
            />
            <Drawer.Screen
              name="H"
              component={Screen2}
              options={{ headerShown: "true" }}
            />
            <Drawer.Screen
              name="Something"
              component={Screen3}
              options={{ headerShown: "true" }}
            />
          </Drawer.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </Stack.Navigator>
        )}
      </AuthContext.Provider>
    </NavigationContainer>
  );
};
