import React from "react";
import { View, FlatList } from "react-native";
import ListItem from "../components/ListItem";

interface Props {
  setSelected: any;
  navigation: any;
}

interface DataItem {
  id: string;
  title: string;
  img: string;
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
            id={item.id}
            img={item.img}
            title={item.title}
            select={(id: string) => {
              setSelected(id);
              navigation.navigate("Info");
            }}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
