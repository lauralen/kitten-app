import React from "react";
import { waitFor, render } from "@testing-library/react-native";
import List from "../views/List";

test("displays no internet connection message", async () => {
  const { getByText } = render(
    <List
      navigation=""
      setSelected={() => {
        return null;
      }}
    />
  );

  await waitFor(() => expect(getByText("No internet connection")).toBeTruthy);
});
