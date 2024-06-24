import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Card = ({ title, data, icon }) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>{icon}</View>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    display: "felx",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    margin: 10,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 5,
  },
  text: {
    color: "#fff",
  },
  icon: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
