import React from "react";
import { View, Text } from "react-native";

interface Props {
  navigation: any;
  selected: string | null;
}

export default function Info({ selected }: Props) {
  return (
    <View>
      <Text>{selected}</Text>
    </View>
  );
}
