import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { DataItem } from "../utils/types";
import ImageWithLoading from "../components/ImageWithLoading";

interface Props {
  navigation: any;
  selected: DataItem | null;
}

export default function Info({ selected }: Props) {
  if (!selected) return null;

  const { img, title, description } = selected;

  return (
    <ScrollView>
      <ImageWithLoading uri={img} />
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </ScrollView>
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
