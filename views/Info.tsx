import React from "react";
import { View, Text } from "react-native";
import { DataItem } from "../utils/types";

interface Props {
  navigation: any;
  selected: DataItem | null;
}

export default function Info({ selected }: Props) {
  return (
    <View>
      <Text>{selected?.id}</Text>
      <Text>{selected?.title}</Text>
    </View>
  );
}
