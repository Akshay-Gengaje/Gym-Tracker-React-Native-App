import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Agenda } from "react-native-calendars";
import moment from "moment/moment";

const Schedule = () => {
  const [items, setItems] = useState({});
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const loadItems = (day) => {
    setSelectedMonth(new Date(day.dateString));
    console.log(
      `Load items for ${day.dateString} + ${new Date(
        day.dateString
      ).getMonth()}`
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Schedule</Text>
      <Text style={styles.months}>{`${moment(
        selectedMonth.getMonth(),
        "M"
      ).format("MMM")} ${selectedMonth.getFullYear()}`}</Text>
      <Agenda
        showClosingKnob={true}
        items={items}
        loadItemsForMonth={loadItems}
        selected={new Date().toISOString().split("T")[0]}
        renderItem={(item, firstItemInDay) => {
          return (
            <View style={styles.item}>
              <Text>{item.name}</Text>
            </View>
          );
        }}
        renderEmptyDate={() => {
          return (
            <View style={styles.emptyDate}>
              <Text>No Items</Text>
            </View>
          );
        }}
        renderEmptyData={() => {
          return (
            <View style={styles.emptyDate}>
              <Text>No Items for this date</Text>
            </View>
          );
        }}
        rowHasChanged={(r1, r2) => {
          return r1.name !== r2.name;
        }}
        theme={{
          agendaKnobColor: "red",
          selectedDayBackgroundColor: "red",
          backgroundColor: "#00000", // Agenda background color
          calendarBackground: "#000", // Calendar background color
          dayTextColor: "#fff",
        }}
        headerStyle={{
          backgroundColor: "#333", // Header background color
        }}

        style={{
          paddingHorizontal: "10px",
          backgroundColor: "#fff",
        }}
      />
    </SafeAreaView>
  );
};

export default Schedule;

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
  months: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 20,
    marginBottom: 10,
  },
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  emptyDate: {
    flex: 1,
    paddingTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
