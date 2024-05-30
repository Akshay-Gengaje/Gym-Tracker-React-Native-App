import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { LineChart } from "react-native-chart-kit";

const LineCharts = () => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
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
        width={Dimensions.get("window").width} // from react-native
        height={220}
        yAxisSuffix=" Kg"
        yAxisInterval={1} // optional, defaults to 1
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
          marginVertical: 8,
          marginLeft: 28,
        }}
      />
    </View>
  );
};

export default LineCharts;

const styles = StyleSheet.create({});
