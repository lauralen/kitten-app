import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, FlatList } from "react-native";

import Header from "./components/Header";
import ListItem from "./components/ListItem";

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

export default function App() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <>
      <StatusBar hidden={true} />
      <Header>
        <Text>Kitten List</Text>
      </Header>
      <FlatList<DataItem>
        data={data}
        renderItem={({ item }) => (
          <ListItem
            id={item.id}
            img={item.img}
            title={item.title}
            select={(id: string) => setSelected(id)}
          />
        )}
        keyExtractor={item => item.id}
      />
    </>
  );
}
