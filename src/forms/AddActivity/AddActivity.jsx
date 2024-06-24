import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
const AddActivity = () => {
  const [text, setText] = React.useState("");
  return (
    <View style={styles.container}>
      \
      <TextInput
        label="Email"
        value={text}
        backgroundColor="#000"
        underlineColor="#fff"
        onChangeText={(text) => setText(text)}
      />
    </View>
  );
};

export default AddActivity;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 20,
    paddingHorizontal: 10,
  },
});
