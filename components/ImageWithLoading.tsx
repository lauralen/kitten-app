import React, { useState } from "react";
import { View, Image, ActivityIndicator } from "react-native";
import { Colors } from "../styles/index";

interface Props {
  uri: string;
}

export default function ImageWithLoading({ uri }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <>
      <View
        style={{
          display: isLoading ? "flex" : "none"
        }}
      >
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
      <Image
        style={{
          display: isLoading ? "none" : "flex",
          flex: 1,
          height: 400
        }}
        source={{
          uri: uri
        }}
        onLoad={() => setIsLoading(false)}
        accessibilityRole="image"
      />
    </>
  );
}
