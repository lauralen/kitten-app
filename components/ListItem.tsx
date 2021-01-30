import React from "react";
import { StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

interface Props {
  id: string;
  img: string;
  title: string;
  select: any;
}

export default function ListItem({ id, img, title, select }: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => select(id)}>
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
    borderColor: Colors.black,
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
