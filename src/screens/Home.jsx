import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LineCharts from "../components/LineChart/LineCharts";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Home Screen</Text>
      <Text style={styles.subHeading}>Activity Tracking</Text>
      <LineCharts/>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    color: "#fff",
  },
  subHeading: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    color: "#fff",
  },
});
