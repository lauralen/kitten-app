import React from "react";
import { View, FlatList } from "react-native";
import ListItem from "../components/ListItem";
import { DataItem } from "../utils/types";

interface Props {
  setSelected: any;
  navigation: any;
}

const data = [
  {
    id: "1",
    title: "Kitten",
    img: "http://placekitten.com/400/400?image=1"
  },
  {
    id: "2",
    title: "Cat",
    img: "http://placekitten.com/400/400?image=2"
  },
  {
    id: "3",
    title: "Kit Kat",
    img: "http://placekitten.com/400/400?image=3"
  }
];

export default function List({ setSelected, navigation }: Props) {
  return (
    <View>
      <FlatList<DataItem>
        data={data}
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
