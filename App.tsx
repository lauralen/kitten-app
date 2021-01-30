import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <StatusBar hidden={true} />
      <Header>
        <Text>Kitten List</Text>
      </Header>
    </>
  );
}
