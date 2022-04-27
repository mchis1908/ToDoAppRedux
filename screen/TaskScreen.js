import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableNativeFeedback,
  Button,
} from "react-native";
import React, { useState } from "react";

const TaskScreen = (props) => {
  let curr = new Date();
  let first = curr.getDate() - curr.getDay();
  const [days, setDays] = useState([
    new Date(curr.setDate(first)).getDate(),
    new Date(curr.setDate(first + 1)).getDate(),
    new Date(curr.setDate(first + 2)).getDate(),
    new Date(curr.setDate(first + 3)).getDate(),
    new Date(curr.setDate(first + 4)).getDate(),
    new Date(curr.setDate(first + 5)).getDate(),
    new Date(curr.setDate(first + 6)).getDate(),
  ]);
  const AddHandler = () => {
    props.navigation.navigate("Add");
  };
  return (
    <View style={styles.container}>
      <View style={styles.dayContainer}>
        {days.map((value) => (
          <View key={value} style={styles.day}>
            <TouchableNativeFeedback>
              <View style={{ padding: 10 }}>
                <Text>{value}</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <TouchableNativeFeedback onPress={AddHandler}>
            <View style={styles.button}>
              <Text style={styles.text}>+</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  day: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    overflow: "hidden",
  },
  dayContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  buttonContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    flex: 1,
    margin: 10,
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FF3D00",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  text: {
    fontSize: 20,
    color: "white",
  },
});

export default TaskScreen;
