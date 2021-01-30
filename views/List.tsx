import React, { useState } from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import ListItem from "../components/ListItem";

import { DataItem } from "../utils/types";
import { generateData } from "../utils/functions";
import { Colors } from "../styles/index";

interface Props {
  setSelected: any;
  navigation: any;
}

const COUNT_OPTIONS = [30, 50, 100];

export default function List({ setSelected, navigation }: Props) {
  const [count, setCount] = useState<number>(30);

  return (
    <View style={styles.container}>
      <Text>Select list items count:</Text>
      <View style={styles.buttonWrapper}>
        {COUNT_OPTIONS.map(option => {
          return (
            <Button
              key={option}
              color={Colors.primary}
              onPress={() => setCount(option)}
              title={String(option)}
            />
          );
        })}
      </View>
      <FlatList<DataItem>
        data={generateData(count)}
        renderItem={({ item }) => (
          <ListItem
            item={item}
            select={(item: DataItem) => {
              setSelected(item);
              navigation.navigate("Info");
            }}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { margin: 20 },

  buttonWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    marginBottom: 20
  }
});
