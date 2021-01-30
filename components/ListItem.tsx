import React from "react";
import { StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import { Colors } from "../styles/index";
import { DataItem } from "../utils/types";

interface Props {
  item: DataItem;
  select: any;
}

export default function ListItem({ item, select }: Props) {
  const { img, title } = item;

  return (
    <TouchableOpacity style={styles.container} onPress={() => select(item)}>
      <Image
        style={styles.img}
        source={{
          uri: img
        }}
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 10,
    borderWidth: 2,
    borderColor: Colors.primary,
    borderRadius: 10
  },

  img: {
    flex: 1,
    height: 400,
    borderRadius: 10
  },

  title: {
    paddingTop: 10,
    textAlign: "center"
  }
});
