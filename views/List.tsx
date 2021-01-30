import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  ActivityIndicator
} from "react-native";
import NetInfo from "@react-native-community/netinfo";

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
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [count, setCount] = useState<number>(30);
  const [data, setData] = useState<DataItem[] | null>(null);

  NetInfo.fetch()
    .then(state => {
      setIsConnected(state.isConnected);
    })
    .finally(() => setIsLoading(false));

  useEffect(() => {
    getData(count);
  }, [count]);

  function getData(count: number) {
    setData(generateData(count));
  }

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color={Colors.primary} />
      ) : isConnected ? (
        <>
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
            initialNumToRender={5}
          />
        </>
      ) : (
        <Text>No internet connection</Text>
      )}
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
