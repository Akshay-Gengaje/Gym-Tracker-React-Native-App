import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Pressable,
} from "react-native";
import { ExpandableCalendar, CalendarProvider } from "react-native-calendars";
import moment from "moment";

const Schedule = ({ navigation }) => {
  const currentDay = moment();
  const [selectedDay, setSelectedDay] = useState(
    currentDay.format("YYYY-MM-DD")
  );
  const [weekDates, setWeekDates] = useState(getWeekDates(currentDay));

  const selectDay = (value) => {
    setSelectedDay(value);
    setWeekDates(getWeekDates(moment(value)));
  };

  function getWeekDates(date) {
    const startOfWeek = date.clone().startOf("isoWeek"); // Monday as the start of the week
    const endOfWeek = date.clone().endOf("isoWeek"); // Sunday as the end of the week
    const dates = [];
    for (let i = -1; i <= 5; i++) {
      // Only Monday to Friday
      dates.push(startOfWeek.clone().add(i, "days").format("YYYY-MM-DD"));
    }
    return dates;
  }

  const renderItem = ({ item }) => {
    const index = moment(item.date).format("YYYY-MM-DD");
    return (
      <View key={index} style={styles.item}>
        <Text style={styles.itemText}>{item.name}</Text>
      </View>
    );
  };

  const renderAgenda = (date) => {
    const agendaItems = [
      { date, name: "Sample Event" },
      // Add more items for this date if needed
    ];
    return (
      <View style={styles.agendaRow}>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>{moment(date).format("ddd DD")}</Text>
        </View>
        <FlatList
          style={styles.agendaRowContainer}
          data={agendaItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.date}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Schedule</Text>

      <CalendarProvider
        date={selectedDay}
        onDateChanged={selectDay}
        disabledOpacity={0.6}
      >
        <ExpandableCalendar
          initialPosition="closed"
          minDate={moment()
            .subtract(7, "M")
            .startOf("month")
            .format("YYYY-MM-DD")}
          maxDate={moment().format("YYYY-MM-DD")}
          pastScrollRange={6}
          calendarHeight={374}
          theme={{
            todayTextColor: "red",
            selectedDayBackgroundColor: "red",
            backgroundColor: "#000",
            calendarBackground: "#000",
            dayTextColor: "#fff",
            textDisabledColor: "#444",
            arrowColor: "red",
            arrowSize: 20,
            monthTextColor: "red",
          }}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.heading}>Activity Schedule</Text>
          <Pressable style={{ alignSelf: "center", marginRight: 10 }}>
            <Text
              style={{
                color: "red",
                fontSize: 16,
              }}
              onPress={() =>{
                navigation.navigate("AddActivity")
              }}
            >
              Add +
            </Text>
          </Pressable>
        </View>
        <ScrollView style={{ height: "100%" }}>
          {weekDates.map((date) => renderAgenda(date))}
        </ScrollView>
      </CalendarProvider>
    </SafeAreaView>
  );
};

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
  agendaRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  dateContainer: {
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#111",
    marginRight: 10,
    borderRadius: 5,
  },
  agendaRowContainer: {
    borderLeftColor: "red",
    borderLeftWidth: 1,
    borderRadius: 5,
  },
  dateText: {
    fontSize: 16,
    color: "#fff",
  },
  item: {
    backgroundColor: "#222",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  itemText: {
    fontSize: 16,
    color: "#fff",
  },
});

export default Schedule;
