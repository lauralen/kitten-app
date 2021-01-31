import React from "react";
import { render } from "@testing-library/react-native";
import Info from "../views/Info";

test("displays cat image and name", () => {
  const { getByRole, getByText } = render(
    <Info
      selected={{
        id: "0",
        img: "http://placekitten.com/200/300",
        title: "Name",
        description: "About cat"
      }}
      navigation=""
    />
  );

  expect(getByRole("image")).toBeTruthy;
  expect(getByText("Name")).toBeTruthy;
  expect(getByText("About cat")).toBeTruthy;
});
