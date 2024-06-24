import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar, StyleSheet, View } from "react-native";
import { tabScreens } from "./tabConfig";
import AddActivity from "../forms/AddActivity/AddActivity";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

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
          backgroundColor: "black",
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
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={TabGroup}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="AddActivity" component={AddActivity} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
