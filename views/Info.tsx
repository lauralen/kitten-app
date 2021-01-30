import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { DataItem } from "../utils/types";

interface Props {
  navigation: any;
  selected: DataItem | null;
}

export default function Info({ selected }: Props) {
  if (!selected) return null;

  const { img, title, description } = selected;

  return (
    <>
      <Image
        style={styles.img}
        source={{
          uri: img
        }}
      />
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  img: {
    width: "100%",
    aspectRatio: 1
  },

  textWrapper: {
    margin: 20
  },

  title: {
    marginBottom: 15,
    fontSize: 30
  },

  description: {
    fontSize: 20
  }
});
