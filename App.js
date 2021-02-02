import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import book from "./Screen/collections/book";
import audioBooks from "./Screen/collections/audioBooks";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  const [activeColor, setActiveColor] = useState("blue");
  const [inactiveColor, setinActiveColor] = useState("gray");
  return (
    <Tab.Navigator
      swipeEnabled={true}
      initialRouteName="Books"
      // tabBarOptions={{ showIcon: true }}

      tabBarOptions={{
        activeTintColor: "#6E3AA7",
        inactiveTintColor: "lightgray",

        showIcon: true,
        pressColor: "cyan",
        labelStyle: {
          fontSize: 16,
          fontWeight: "bold",
        },
        style: {
          margin: 5,
          //          backgroundColor: "red",
          width: "90%",
          //justifyContent: "center",
          alignSelf: "center",
        },
        tabStyle: {
          // width: "100%",
          //justifyContent: "space-between",
          //borderWidth: 5,
          //margin: 5,
          //          borderWidth: 5,
          // borderBottomColor: "white",
          // borderRightColor: "black",
          // borderTopColor: "white",
          // borderLeftColor: "white",
          //borderColor: "white",
          //backgroundColor: "red",
          //backgroundColor: "red",
          //margin: 1,
        },
      }}
      //     tabBarPosition="top"
    >
      <Tab.Screen
        name="Books"
        component={book}
        options={{
          //  tabBarLabel: "Home",

          tabBarIcon: ({ focused }) =>
            focused == true ? (
              <MaterialCommunityIcons
                name="bookshelf"
                size={24}
                color="#6E3AA7"
              />
            ) : (
              <MaterialCommunityIcons
                name="bookshelf"
                size={24}
                color="lightgray"
              />
            ),
        }}
      />
      <Tab.Screen
        name="AudioBooks"
        component={audioBooks}
        options={{
          //  tabBarLabel: "Home",
          tabBarIcon: ({ focused }) =>
            focused == true ? (
              <MaterialCommunityIcons
                name="book-play-outline"
                size={24}
                color="#6E3AA7"
              />
            ) : (
              <MaterialCommunityIcons
                name="book-play-outline"
                size={24}
                color="lightgray"
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <Image
        source={require("./assets/forSearch.png")}
        style={{
          top: 0,
          right: 0,
          width: "100%",
          position: "absolute",
        }}
      />
      {
        //Text
      }

      <View style={{ width: "100%" }}>
        <Text
          style={{
            // fontFamily: "Roboto-Regular",
            fontSize: 20,
            //color: colors.gray,
            marginTop: "10%",
            left: "7%",
            marginBottom: 10,
          }}
        >
          SEARCH
        </Text>
      </View>
      {
        //Search DIVE
      }
      <NavigationContainer>{MyTabs()}</NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
