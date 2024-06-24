import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { LineChart } from "react-native-chart-kit";

const LineCharts = () => {
  return (
    <View>
      <Text style={styles.title}>Body Weight Chart</Text>
      <LineChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get("window").width}
        height={220}
        yAxisSuffix=" Kg"
        yAxisInterval={1}
        chartConfig={{
          propsForBackgroundLines: {
            strokeWidth: 0,
          },
          fillShadowGradientFrom: "red",
          fillShadowGradientTo: "red",
          fillShadowGradientFromOpacity: 0.5,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        }}
        bezier
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 8,
          marginLeft: 28,
        }}
      />
    </View>
  );
};

export default LineCharts;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 10,
    marginBottom: 10,
    textAlign: "left",
  },
});
