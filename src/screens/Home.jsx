import { StyleSheet, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LineCharts from "../components/LineChart/LineCharts";
import Card from "../components/Card/Card";
import { FontAwesome5 } from "@expo/vector-icons";
const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Health Overview</Text>
      <Card
        title={"Weight"}
        data={50}
        icon={<FontAwesome5 name="weight" size={24} color="white" />}
      />
      <LineCharts />
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
