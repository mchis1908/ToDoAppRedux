import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState, useCallback } from "react";
import ToDoNavigation from "./navigation/ToDoNavigation";

export default function App() {
  return <ToDoNavigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  day: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  dayContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
});
