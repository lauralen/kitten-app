import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

interface Props {
  img: string;
  title: string;
}

export default function ListItem({ img, title }: Props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: img
        }}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
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
