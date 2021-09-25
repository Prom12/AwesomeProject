// In App.js in a new project

import React from "react";
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
import { loginReducer, initialLoginState } from "./redux/reducers/auth";
import { Auth } from "./redux/actions/auth";
import { useSelector, useDispatch } from "react-redux";
import axios from "./constants/axios.js";

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
  const dispatch = useDispatch();
  const { userToken } = useSelector((state) => state.authReducer);
  const { profiles } = useSelector((state) => state.authReducer);
  React.useEffect(() => {
    (async () => {
      await axios
        .get("/profiles")
        .then((data) => {
          dispatch({ type: Auth.GET_PROFILES, payload: data.data });
        })
        .catch((err) => alert(err.message));
    })();
  }, []);

  const authMemo = React.useMemo(() => {
    return {
      signIn: (email, password) => {
        let userToken = null;
        const signIn1 = async () => {
          await axios
            .post("/login", { email, password })
            .then(() => {
              userToken = "id";
              dispatch({ type: Auth.SIGN_IN, id: email, token: userToken });
            })
            .catch((err) => {
              alert(err);
              console.log("email and password not valid");
            });
        };
        signIn1();
      },
      signUp: () => {
        dispatch({ type: Auth.SIGN_UP });
      },
      signOut: () => {
        dispatch({ type: Auth.SIGN_OUT });
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
              name="Cart"
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
