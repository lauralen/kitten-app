import "react-native-gesture-handler";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Colors } from "./styles/index";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

import List from "./views/List";
import Info from "./views/Info";

import { DataItem } from "./utils/types";

export default function App() {
  const [selected, setSelected] = useState<DataItem | null>(null);

  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primary
          }
        }}
      >
        <Stack.Screen name="List" options={{ title: "Kitten List" }}>
          {props => <List {...props} setSelected={setSelected} />}
        </Stack.Screen>
        <Stack.Screen name="Info" options={{ title: "Kitten View" }}>
          {props => <Info {...props} selected={selected} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
