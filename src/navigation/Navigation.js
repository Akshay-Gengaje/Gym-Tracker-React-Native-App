import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { tabScreens } from "./tabConfig";
import { StatusBar, StyleSheet, View } from "react-native";

const Tab = createBottomTabNavigator();

function TabGroup() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const tab = tabScreens.find((tab) => tab.name === route.name);
          return tab ? tab.icon({ color, size }) : null;
        },
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "white",
        headerShown: false,
        tabBarStyle: {
          height: 60,
          // position: "absolute",
          // bottom: 15,
          // left: 10,
          // right: 10,
          // borderRadius: 20,

          backgroundColor: "black",
          // borderColor: "#eff",
          // borderWidth: 1,
          // borderTopLeftRadius: 20,
          // borderTopRightRadius: 20,
          // borderBottomLeftRadius: 20,
          // borderBottomRightRadius: 20,
        },
      })}
    >
      {tabScreens.map((tab, index) => (
        <Tab.Screen
          key={index}
          name={tab.name}
          component={tab.component}
          options={{
            tabBarIcon: tab.icon,
            tabBarShowLabel: false,
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={"light-content"} />
      <TabGroup />
    </NavigationContainer>
  );
}
