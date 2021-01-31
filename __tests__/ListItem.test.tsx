import React from "react";
import { render } from "@testing-library/react-native";
import ListItem from "../components/ListItem";

test("displays cat image and name", () => {
  const { getByRole, getByText } = render(
    <ListItem
      item={{
        id: "0",
        img: "http://placekitten.com/200/300",
        title: "Name",
        description: "About cat"
      }}
      select={() => {
        return null;
      }}
    />
  );

  expect(getByRole("image")).toBeTruthy;
  expect(getByText("Name")).toBeTruthy;
});
