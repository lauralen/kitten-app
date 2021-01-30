import React from "react";
import { View, FlatList } from "react-native";
import ListItem from "../components/ListItem";
import { DataItem } from "../utils/types";

interface Props {
  setSelected: any;
  navigation: any;
}

const data: DataItem[] = [
  {
    id: "1",
    title: "Kitten",
    img: "http://placekitten.com/400/400?image=1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus pellentesque ipsum vitae semper. Vestibulum vitae eros ullamcorper, mollis urna eu, scelerisque ipsum. Suspendisse eu nisi sollicitudin quam fringilla tempor. Suspendisse ultrices mauris at mauris dignissim elementum. Ut eget rutrum dolor. Vivamus efficitur, nunc ut gravida tempor, nulla lectus sagittis odio, vel ultricies tellus lacus sed nulla. Curabitur ac elit vel leo tincidunt tristique vel eu neque."
  },
  {
    id: "2",
    title: "Cat",
    img: "http://placekitten.com/400/400?image=2",
    description:
      "Vivamus efficitur, nunc ut gravida tempor, nulla lectus sagittis odio, vel ultricies tellus lacus sed nulla. Curabitur ac elit vel leo tincidunt tristique vel eu neque."
  },
  {
    id: "3",
    title: "Kit Kat",
    img: "http://placekitten.com/400/400?image=3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus pellentesque ipsum vitae semper. Vestibulum vitae eros ullamcorper, mollis urna eu, scelerisque ipsum. Suspendisse eu nisi sollicitudin quam fringilla tempor. Suspendisse ultrices mauris at mauris dignissim elementum. Ut eget rutrum dolor. Vivamus efficitur, nunc ut gravida tempor, nulla lectus sagittis odio, vel ultricies tellus lacus sed nulla."
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
