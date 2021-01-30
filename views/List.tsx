import React from "react";
import { View, FlatList } from "react-native";
import ListItem from "../components/ListItem";

import { DataItem } from "../utils/types";
import { generateData } from "../utils/functions";

interface Props {
  setSelected: any;
  navigation: any;
}

export default function List({ setSelected, navigation }: Props) {
  return (
    <View>
      <FlatList<DataItem>
        data={generateData(30)}
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
