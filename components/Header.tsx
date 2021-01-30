import React from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "../styles/index";

interface Props {
  children: React.ReactNode;
}

export default function Header({ children }: Props) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
    backgroundColor: Colors.primary
  }
});
